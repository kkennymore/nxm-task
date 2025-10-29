<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\DistributorService;
use App\Http\Resources\DistributorResource;

/**
 * Controller for Task 2: Top Distributors Report
 */
class DistributorController extends Controller
{
    protected DistributorService $service;

    public function __construct(DistributorService $service)
    {
        $this->service = $service;
    }

    /**
     * Return the top 200 distributors by total sales.
     */
    public function top()
    {
        $distributors = $this->service->getTopDistributors();
        return DistributorResource::collection($distributors);
    }
}
