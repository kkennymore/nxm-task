<?php

namespace App\Repositories\Contracts;
use Illuminate\Support\Collection;

interface CommissionRepositoryInterface
{
    public function getCommissionReport(array $filters);
     /** Returns the order “header” by invoice number (with totals). */
    public function findInvoiceHeader(string $invoice): ?object;

    /** Returns line items for a given order id. */
    public function getInvoiceItems(int $orderId): Collection;
}
