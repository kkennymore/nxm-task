<?php

namespace App\Repositories\Contracts;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;

/**
 * DistributorRepositoryInterface
 *
 * This interface defines the contract for accessing
 * distributor-related data, particularly for computing
 * their total sales, commissions, and rankings.
 *
 * Following the SOLID principle:
 * - Controllers depend on this interface (abstraction)
 * - The concrete implementation (Eloquent/DistributorRepository)
 *   can change without affecting the rest of the app.
 */
interface DistributorRepositoryInterface
{
    /**
     * Get a paginated list of distributors and their total sales.
     *
     * @param  int    $perPage  Number of distributors per page
     * @param  array  $filters  Optional filters (e.g. ['name' => 'John'])
     * @return LengthAwarePaginator
     */
    public function paginateDistributors(int $perPage = 15, array $filters = []): LengthAwarePaginator;

    /**
     * Retrieve a single distributor’s total sales and commission data
     * (used for showing details of a specific distributor).
     *
     * @param  int  $distributorId
     * @return object|null
     */
    public function findDistributorById(int $distributorId): ?object;

    /**
     * Get the top distributors based on total sales.
     * Used for Task 2: Top Distributors Report.
     *
     * @param  int  $limit  Number of top distributors to retrieve (default 200)
     * @return Collection
     */
    public function getTopDistributors(int $limit = 200): Collection;

    /**
     * Compute or fetch the rank of a distributor based on total sales.
     *
     * @param  int  $distributorId
     * @return int|null
     */
    public function getDistributorRank(int $distributorId): ?int;

    /**
     * Retrieve distributors with identical total sales (tie rank handling).
     *
     * @param  float  $salesAmount
     * @return Collection
     */
    public function getDistributorsWithSameSales(float $salesAmount): Collection;
}
