<?php

namespace App\Services;

use App\Repositories\Contracts\CommissionRepositoryInterface;

/**
 * Service Layer for Commission Reports
 * Applies business logic, filtering, and transformations.
 */
class CommissionService
{
    protected CommissionRepositoryInterface $commissionRepo;

    public function __construct(CommissionRepositoryInterface $commissionRepo)
    {
        $this->commissionRepo = $commissionRepo;
    }

    /**
     * Fetch filtered commission data for the report
     */
    public function getCommissionReport(array $filters)
    {
        return $this->commissionRepo->getCommissionReport($filters);
    }
}
