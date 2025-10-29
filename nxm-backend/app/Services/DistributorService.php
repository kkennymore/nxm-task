<?php

namespace App\Services;

use App\Repositories\Contracts\DistributorRepositoryInterface;

/**
 * DistributorService
 *
 * Handles business logic for computing top distributors and ranks.
 */
class DistributorService
{
    protected DistributorRepositoryInterface $repository;

    public function __construct(DistributorRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Get top N distributors.
     */
    public function getTopDistributors(int $limit = 200)
    {
        $distributors = $this->repository->getTopDistributors($limit);

        $rank = 0;
        $prevSales = null;
        $counter = 0;

        foreach ($distributors as $d) {
            $counter++;
            if ($prevSales === null || $d->total_sales < $prevSales) {
                $rank = $counter;
                $prevSales = $d->total_sales;
            }
            $d->rank = $rank;
        }

        return $distributors;
    }
}
