# NXM Assessment Backend Task – Laravel 9 + MariaDB 10

This project implements the **NXM Commission and Distributor Report System**, developed using **Laravel 9** and **MariaDB 10**.  
It uses the provided database schema (no structural modifications) and builds all reporting logic through **SQL Views**, **Stored Functions**, and **Eloquent Repositories**.

---

## Features

- Uses the **provided database schema** — no alterations.
- Adds optimized **views** and **indexes** for performance.
- Implements:
  - Distributor report with ranking and sales totals.
  - Commission report with referred distributor count and computed commissions.
- Supports **filtering** by:
  - Distributor (by ID, first name, or last name)
  - Order date (by `date_from`, `date_to`, or both)
- Fully covered by **Unit and Feature Tests**.

---

## Requirements

- PHP 8.1+
- Composer
- MariaDB 10.x or MySQL 8.x
- Laravel 9.x

---

## Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/kkennymore/nxm-task.git
   cd nxm-backend
````

2. **Install dependencies**

   ```bash
   composer install
   ```

3. **Environment setup**

   Copy the example environment file and update your database settings:

   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

   Update the `.env` file with your credentials:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=nxm_assessment
   DB_USERNAME=root
   DB_PASSWORD=
   ```

---

## 🗄️ Database Setup

### Option 1 — Migrate with Views Only

The migrations will create **views, functions, and indexes** only.

```bash
php artisan migrate
```

### Option 2 — Import Existing Schema and Data

If you already have the provided SQL schema and data (e.g. `nxm_assessment_2023.sql`):

```bash
mysql -u root -p nxm_assessment < nxm_assessment_2023.sql
```

Then run the Laravel-specific migrations to add reporting views:

```bash
php artisan migrate
```

> **Note:** The app does not alter existing tables — only adds views and indexes.

---

## Running Tests

The project includes **Unit and Feature tests** for both the repositories and API endpoints.

Run all tests:

```bash
php artisan test -v
```

You can also test individual classes, for example:

```bash
php artisan test --filter=CommissionRepositoryTest
php artisan test --filter=DistributorApiTest
```

> Tests run against the **testing database** defined in `.env.testing`.
> You can import your SQL dump there if you wish to test with real data.

---

## Expected Outputs

The commission calculations and reports are validated against these known results:

| Invoice  | Expected Commission |
| -------- | ------------------: |
| ABC4170  |               $6.00 |
| ABC6931  |              $37.20 |
| ABC23352 |              $27.60 |
| ABC3010  |               $0.00 |
| ABC19323 |               $0.00 |

All other report columns and filters (Distributor, Date Range, Order Totals, etc.) match the original specification.

---

## Project Structure

```
app/
 ├────Http/
 │    ├── Controllers/
 │    │    └── Api/
 │    │         ├── CommissionController.php
 │    │         └── DistributorController.php
 │    └── Requests/
 │    │    └── CommissionFilterRequest.php
 │    │    └── DateRangeRequest.php
 │    │    └── ShowInvoiceRequest.php
 │    └── Resources/
 │    │    └── CommissionResource.php
 │    │    └── DistributorResource.php
 │    │    └── InvoiceDetailResource.php
 │    │    └── InvoiceItemResource.php
 │    │
 ├────Models/
 │    ├── Product.php
 │    ├── User.php
 │    └── OrderItem.php
 │    └── Order.php
 │    
 ├────Repositories/
 │    ├── Contracts/
 │    │    ├── CommissionRepositoryInterface.php
 │    │    └── DistributorRepositoryInterface.php
 │    └── Eloquent/
 │         ├── CommissionRepository.php
 │         └── DistributorRepository.php
 │
 ├────Services/
 │    ├── CommissionService.php
 │    └── DistributorService.php
 │
 ├────Providers/
 │    ├── RepositoryServiceProvider.php
 │    └── ...
 database/
 ├────migrations/
 │    ├── 2023_XX_XX_XXXXXX_create_commission_view.php
 │    ├── 2023_XX_XX_XXXXXX_create_distributor_sales_view.php
 │    └── ...
 │
routes/
 ├────api.php
 └────web.php
 │
tests/
 ├────Feature/
 │    ├── CommissionApiTest.php
 │    └── DistributorApiTest.php
 └────Unit/
      ├── CommissionRepositoryTest.php
      └── DistributorRepositoryTest.php
```

---

## Notes

* The project uses **Eloquent Repositories** to abstract data access.
* Commission computations are handled at the **SQL View** level for performance.
* Tests are **idempotent** — they don’t refresh or truncate your manually imported data.

---

## Troubleshooting

If tests fail due to missing views:

```bash
php artisan migrate:fresh
php artisan migrate
```

If you get DB connection errors during tests:

```bash
cp .env .env.testing
php artisan config:clear
```

---

### Author

**[Usiobaifo A Kenneth]**
Software Engineer • Laravel | MariaDB | Clean Architecture

---