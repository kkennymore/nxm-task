<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration {
    public function up(): void
    {
        DB::unprepared("
            DROP VIEW IF EXISTS vw_commission_report;

            CREATE VIEW vw_commission_report AS
            SELECT
              o.id AS order_id,
              o.invoice_number AS invoice,
              CONCAT(purchaser.first_name, ' ', purchaser.last_name) AS purchaser,
              CONCAT(referrer.first_name, ' ', referrer.last_name) AS distributor,
              o.order_date,

              -- Count of distributors referred by this referrer at the time of the order
              (
                SELECT COUNT(*)
                FROM users u2
                INNER JOIN user_category uc2 ON u2.id = uc2.user_id
                INNER JOIN categories c2 ON uc2.category_id = c2.id
                WHERE u2.referred_by = referrer.id
                  AND c2.name = 'Distributor'
                  AND u2.enrolled_date <= o.order_date
              ) AS referred_distributors,

              -- Commission percentage based on referred distributors
              fn_commission_percentage(
                (
                  SELECT COUNT(*)
                  FROM users u3
                  INNER JOIN user_category uc3 ON u3.id = uc3.user_id
                  INNER JOIN categories c3 ON uc3.category_id = c3.id
                  WHERE u3.referred_by = referrer.id
                    AND c3.name = 'Distributor'
                    AND u3.enrolled_date <= o.order_date
                )
              ) AS percentage,

              -- Total order amount
              ROUND(SUM(p.price * oi.quantity), 2) AS order_total,

              -- Commission earned
              CASE
                WHEN referrer.id IS NOT NULL
                  AND EXISTS (
                    SELECT 1
                    FROM user_category uc4
                    JOIN categories c4 ON uc4.category_id = c4.id
                    WHERE uc4.user_id = referrer.id AND c4.name = 'Distributor'
                  )
                THEN ROUND(SUM(p.price * oi.quantity) *
                     (fn_commission_percentage(
                        (
                          SELECT COUNT(*)
                          FROM users u5
                          INNER JOIN user_category uc5 ON u5.id = uc5.user_id
                          INNER JOIN categories c5 ON uc5.category_id = c5.id
                          WHERE u5.referred_by = referrer.id
                            AND c5.name = 'Distributor'
                            AND u5.enrolled_date <= o.order_date
                        )
                      ) / 100), 2)
                ELSE 0
              END AS commission

            FROM orders o
            JOIN order_items oi ON oi.order_id = o.id
            JOIN products p ON p.id = oi.product_id
            JOIN users purchaser ON purchaser.id = o.purchaser_id
            LEFT JOIN users referrer ON referrer.id = purchaser.referred_by
            GROUP BY
              o.id,
              o.invoice_number,
              o.order_date,
              purchaser.id,
              purchaser.first_name,
              purchaser.last_name,
              referrer.id,
              referrer.first_name,
              referrer.last_name;
        ");
    }

    public function down(): void
    {
        DB::unprepared('DROP VIEW IF EXISTS vw_commission_report;');
    }
};
