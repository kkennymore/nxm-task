<?php

namespace App\Repositories\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Repositories\Contracts\CommissionRepositoryInterface;

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
}
