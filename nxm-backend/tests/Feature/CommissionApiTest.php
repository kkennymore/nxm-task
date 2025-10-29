<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Support\Facades\DB;

class CommissionApiTest extends TestCase
{
    /** @test */
    public function it_returns_commission_report_with_expected_data()
    {
        DB::statement("DROP VIEW IF EXISTS vw_commission_report");

        DB::statement("
            CREATE VIEW vw_commission_report AS
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

        $response = $this->getJson('/api/v1/commissions');

        $response->assertOk()
                 ->assertJsonFragment(['invoice' => 'ABC4170'])
                 ->assertJsonFragment(['commission' => '6.00'])
                 ->assertJsonFragment(['order_total' => '100.00']);
    }
}
