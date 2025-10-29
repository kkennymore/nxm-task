<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Support\Facades\DB;
use App\Repositories\Eloquent\CommissionRepository;

class CommissionRepositoryTest extends TestCase
{
    protected CommissionRepository $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repository = new CommissionRepository();
    }

    /** @test */
    public function it_returns_expected_commission_values()
    {
        DB::statement("CREATE OR REPLACE VIEW vw_commission_report AS
    SELECT 
        'ABC4170' AS invoice,
        'John Doe' AS purchaser,
        'Jane Referrer' AS distributor,
        3 AS referred_distributors,
        10 AS percentage,
        100 AS order_total,
        6.00 AS commission,
        NOW() AS order_date
");


        $data = $this->repository->getAllCommissions();

        $this->assertNotEmpty($data, 'Expected commission data to be returned.');
        $this->assertTrue(property_exists($data->first(), 'commission'), 'Commission field missing in result object.');
        $this->assertEquals(6.00, (float)$data->first()->commission, 'Commission value mismatch.');
    }
}
