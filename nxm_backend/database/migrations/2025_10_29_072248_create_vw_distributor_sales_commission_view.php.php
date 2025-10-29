<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Migration: Create the vw_distributor_sales_commission view
 *
 * This view computes total sales made by each distributor based on the orders
 * of customers/distributors they referred.
 */
return new class extends Migration {
    public function up(): void
    {
        // Ensure all necessary tables exist before creating the view
        if (!Schema::hasTable('users') || !Schema::hasTable('orders') ||
            !Schema::hasTable('order_items') || !Schema::hasTable('products')) {
            return;
        }

        DB::unprepared("
            DROP VIEW IF EXISTS vw_distributor_sales_commission;

            CREATE VIEW vw_distributor_sales_commission AS
            SELECT
              d.id AS distributor_id,
              CONCAT(d.first_name, ' ', d.last_name) AS distributor_name,

              -- Total number of distributors this user referred
              (
                SELECT COUNT(*)
                FROM users u
                INNER JOIN user_category uc ON u.id = uc.user_id
                INNER JOIN categories c ON uc.category_id = c.id
                WHERE u.referred_by = d.id
                  AND c.name = 'Distributor'
              ) AS referred_distributors,

              -- Total sales made by referred customers/distributors
              ROUND(COALESCE(SUM(p.price * oi.quantity), 0), 2) AS total_sales

            FROM users d
            LEFT JOIN users referred ON referred.referred_by = d.id
            LEFT JOIN orders o ON o.purchaser_id = referred.id
            LEFT JOIN order_items oi ON oi.order_id = o.id
            LEFT JOIN products p ON p.id = oi.product_id

            GROUP BY
              d.id,
              d.first_name,
              d.last_name;
        ");
    }

    public function down(): void
    {
        DB::unprepared('DROP VIEW IF EXISTS vw_distributor_sales_commission;');
    }
};
