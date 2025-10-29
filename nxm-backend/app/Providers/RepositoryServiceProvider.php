<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\{
    CommissionRepositoryInterface,
    DistributorRepositoryInterface
};
use App\Repositories\Eloquent\{
    CommissionRepository,
    DistributorRepository
};

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Bind interfaces to concrete classes
        $this->app->bind(CommissionRepositoryInterface::class, CommissionRepository::class);
        $this->app->bind(DistributorRepositoryInterface::class, DistributorRepository::class);
    }
}
