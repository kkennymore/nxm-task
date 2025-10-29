<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CommissionFilterRequest;
use App\Http\Resources\CommissionResource;
use Illuminate\Http\Request;
use App\Services\CommissionService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

/**
 * Controller: Handles Commission Report API (Task 1)
 */
class CommissionController extends Controller
{
    protected CommissionService $commissionService;

    /**
     * Inject CommissionService for SOLID (Dependency Inversion)
     */
    public function __construct(CommissionService $commissionService)
    {
        $this->commissionService = $commissionService;
    }

    /**
     * GET /api/v1/commissions
     * Filters: distributor, date_from, date_to
     */
    public function index(CommissionFilterRequest $request)
    {
        // All validation handled automatically by the request
        $filters = $request->filters();

        $data = $this->commissionService->getCommissionReport($filters);

        return CommissionResource::collection($data);
    }
}
