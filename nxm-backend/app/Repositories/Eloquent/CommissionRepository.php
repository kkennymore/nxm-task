<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Repositories\Contracts\CommissionRepositoryInterface;
use Illuminate\Support\Collection;

/**
 * Repository: Handles data access for vw_commission_report view
 */
class CommissionRepository implements CommissionRepositoryInterface
{
    /**
     * Get all commissions from vw_commission_report.
     *
     * @return \Illuminate\Support\Collection
     */
    public function getAllCommissions()
    {
        return DB::table('vw_commission_report')
            ->select([
                'invoice',
                'purchaser',
                'distributor',
                'referred_distributors',
                'percentage',
                'order_total',
                'commission',
                'order_date',
            ])
            ->orderBy('order_date', 'desc')
            ->get();
    }
    public function getCommissionReport(array $filters)
    {
        $query = DB::table('vw_commission_report');

        // Distributor filter (ID, first name, or last name)
        if (!empty($filters['distributor'])) {
            $dist = $filters['distributor'];
            $query->where(function ($q) use ($dist) {
                $q->where('distributor', 'LIKE', "%{$dist}%")
                  ->orWhere('order_id', '=', $dist);
            });
        }

        // Date range filter
        if (!empty($filters['date_from'])) {
            $query->whereDate('order_date', '>=', $filters['date_from']);
        }
        if (!empty($filters['date_to'])) {
            $query->whereDate('order_date', '<=', $filters['date_to']);
        }

        return $query
            ->select([
                'invoice',
                'purchaser',
                'distributor',
                'referred_distributors',
                'percentage',
                'order_total',
                'commission',
                'order_date'
            ])
            ->orderByDesc('order_date')
            ->get();
    }

    public function findInvoiceHeader(string $invoice): ?object
    {
        return DB::table('orders as o')
            ->join('users as purchaser', 'purchaser.id', '=', 'o.purchaser_id')
            ->leftJoin('users as referrer', 'referrer.id', '=', 'purchaser.referred_by')
            ->join('order_items as oi', 'oi.order_id', '=', 'o.id')
            ->join('products as p', 'p.id', '=', 'oi.product_id')
            ->where('o.invoice_number', $invoice)
            ->select(
                'o.id',
                'o.invoice_number as invoice',
                DB::raw("CONCAT(purchaser.first_name, ' ', purchaser.last_name) AS purchaser"),
                DB::raw("CONCAT(referrer.first_name, ' ', referrer.last_name) AS distributor"),
                'o.order_date',
                DB::raw('ROUND(SUM(oi.quantity * p.price), 2) AS order_total')
            )
            ->groupBy(
                'o.id',
                'o.invoice_number',
                'purchaser.first_name',
                'purchaser.last_name',
                'referrer.first_name',
                'referrer.last_name',
                'o.order_date'
            )
            ->first();
    }

    public function getInvoiceItems(int $orderId): Collection
    {
        return DB::table('order_items as oi')
            ->join('products as p', 'p.id', '=', 'oi.product_id')
            ->where('oi.order_id', $orderId)
            ->select(
                'p.sku',
                'p.name as product_name',
                DB::raw('FORMAT(p.price, 2) as price'),
                'oi.quantity',
                DB::raw('FORMAT(oi.quantity * p.price, 2) as total')
            )
            ->get();
    }
}
