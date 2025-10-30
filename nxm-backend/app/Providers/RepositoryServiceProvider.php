<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Contracts\{
    CommissionRepositoryInterface,
    ContactRepositoryInterface,
    DistributorRepositoryInterface
};
use App\Repositories\Eloquent\{
    CommissionRepository,
    ContactRepository,
    DistributorRepository
};

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Bind interfaces to concrete classes
        $this->app->bind(CommissionRepositoryInterface::class, CommissionRepository::class);
        $this->app->bind(DistributorRepositoryInterface::class, DistributorRepository::class);
        $this->app->bind(ContactRepositoryInterface::class, ContactRepository::class);
    }
}
