<?php

namespace App\Repositories\Contracts;

interface CommissionRepositoryInterface
{
    public function getCommissionReport(array $filters);
}
