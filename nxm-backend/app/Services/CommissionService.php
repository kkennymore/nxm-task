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
    public function __construct(CommissionRepositoryInterface $commissionRepo,)
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

    public function getInvoiceDetails(string $invoice): array
    {
        $header = $this->commissionRepo->findInvoiceHeader($invoice);
        if (!$header) {
            return [];
        }

        $items = $this->commissionRepo->getInvoiceItems($header->id);

        return [
            'invoice'      => $header->invoice,
            'purchaser'    => $header->purchaser,
            'distributor'  => $header->distributor,
            'order_date'   => $header->order_date,
            'order_total'  => $header->order_total,
            'items'        => $items,
        ];
    }
}
