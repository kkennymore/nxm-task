<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        // Drop the function if it already exists
        DB::unprepared('DROP FUNCTION IF EXISTS fn_commission_percentage');

        // Create the stored function
        DB::unprepared("
            CREATE FUNCTION fn_commission_percentage(ref_count INT)
            RETURNS DECIMAL(5,2)
            DETERMINISTIC
            BEGIN
                DECLARE pct DECIMAL(5,2);
                IF ref_count BETWEEN 0 AND 4 THEN
                    SET pct = 5.00;
                ELSEIF ref_count BETWEEN 5 AND 10 THEN
                    SET pct = 10.00;
                ELSEIF ref_count BETWEEN 11 AND 20 THEN
                    SET pct = 15.00;
                ELSEIF ref_count BETWEEN 21 AND 29 THEN
                    SET pct = 20.00;
                ELSEIF ref_count >= 30 THEN
                    SET pct = 30.00;
                ELSE
                    SET pct = 0.00;
                END IF;
                RETURN pct;
            END
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        // Drop the stored function if migration is rolled back
        DB::unprepared('DROP FUNCTION IF EXISTS fn_commission_percentage');
    }
};
