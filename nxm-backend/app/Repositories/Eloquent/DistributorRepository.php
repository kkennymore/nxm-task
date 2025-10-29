<?php

namespace App\Repositories\Eloquent;

use App\Repositories\Contracts\DistributorRepositoryInterface;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

/**
 * DistributorRepository
 *
 * Fetches distributor-related sales and ranking data.
 */
class DistributorRepository implements DistributorRepositoryInterface
{
    /**
     * Paginate distributors with filters (optional).
     */
    public function paginateDistributors(int $perPage = 15, array $filters = []): LengthAwarePaginator
    {
        $query = DB::table('vw_distributor_sales_commission');

        if (!empty($filters['name'])) {
            $query->where('distributor_name', 'like', '%' . $filters['name'] . '%');
        }

        return $query->orderByDesc('total_sales')->paginate($perPage);
    }

    /**
     * Get top N distributors based on total sales.
     */
    public function getTopDistributors(int $limit = 200): Collection
    {
        return DB::table('vw_distributor_sales_commission')
            ->orderByDesc('total_sales')
            ->limit($limit)
            ->get();
    }

    /**
     * Find distributor details by ID.
     */
    public function findDistributorById(int $distributorId): ?object
    {
        return DB::table('vw_distributor_sales_commission')
            ->where('distributor_id', $distributorId)
            ->first();
    }

    /**
     * Compute rank for a distributor (accounting for ties).
     */
    public function getDistributorRank(int $distributorId): ?int
    {
        $rows = DB::table('vw_distributor_sales_commission')
            ->select('distributor_id', 'total_sales')
            ->orderByDesc('total_sales')
            ->get();

        $rank = 0;
        $prevSales = null;
        $counter = 0;

        foreach ($rows as $row) {
            $counter++;
            if ($prevSales === null || $row->total_sales < $prevSales) {
                $rank = $counter;
                $prevSales = $row->total_sales;
            }

            if ($row->distributor_id == $distributorId) {
                return $rank;
            }
        }

        return null;
    }

    /**
     * Get distributors with the same sales amount (ties).
     */
    public function getDistributorsWithSameSales(float $salesAmount): Collection
    {
        return DB::table('vw_distributor_sales_commission')
            ->where('total_sales', $salesAmount)
            ->get();
    }
}
