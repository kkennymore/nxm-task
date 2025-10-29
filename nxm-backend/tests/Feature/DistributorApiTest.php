<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class DistributorApiTest extends TestCase
{
    /** @test */
    public function it_returns_top_distributors_in_correct_order()
    {
        DB::statement("DROP VIEW IF EXISTS vw_distributor_sales_commission");

        DB::statement("CREATE VIEW vw_distributor_sales_commission AS
            SELECT 1 AS distributor_id, 'Demario Purdy' AS distributor_name, 15 AS referred_distributors, 22026.75 AS total_sales
            UNION ALL
            SELECT 2, 'Floy Miller', 12, 9645.00
            UNION ALL
            SELECT 3, 'Loy Schamberger', 4, 575.00
        ");

        $response = $this->getJson('/api/v1/distributors/top');

        $response->assertJsonFragment(['distributor_name' => 'Demario Purdy']);
        $response->assertJsonFragment(['total_sales' => '22,026.75']);

    }
}
