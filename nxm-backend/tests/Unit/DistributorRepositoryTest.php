<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\DB;
use App\Repositories\Eloquent\DistributorRepository;

class DistributorRepositoryTest extends TestCase
{
    protected DistributorRepository $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repository = new DistributorRepository();
    }

    /** @test */
    public function it_returns_top_distributors_with_sales()
    {
        // Ensure the test view is recreated cleanly
        DB::statement("DROP VIEW IF EXISTS vw_distributor_sales_commission");

        DB::statement("CREATE VIEW vw_distributor_sales_commission AS
            SELECT 1 AS distributor_id,
                   'Demo User' AS distributor_name,
                   3 AS referred_distributors,
                   1000.00 AS total_sales
        ");

        $data = $this->repository->getTopDistributors();

        $this->assertNotEmpty($data, 'Expected distributor data to be returned.');
        $this->assertEquals('Demo User', $data->first()->distributor_name);
        $this->assertEquals(1000.00, (float)$data->first()->total_sales);
    }
}
