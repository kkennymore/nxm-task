<?php

use App\Http\Controllers\Api\CommissionController;
use App\Http\Controllers\Api\DistributorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// auth endpoints
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::get('/distributors/top', [DistributorController::class, 'top']);
    Route::get('/commissions', [CommissionController::class, 'index']);
});