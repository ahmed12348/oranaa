<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OrderController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

// Auth::routes();
//Route::get('/{any}', [ApplicationController::class, 'index'])->where('any', '.*');
Route::any('/{any}', function() {return view('welcome');})->where('any', '.*');

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//
//Route::resource('orders', OrderController::class)->except('destroy');
//Route::get('/orders/delete/{id}', [OrderController::class, 'delete'])->name('orders.delete');
//
//// report_account_number
//Route::get('/report_order', [OrderController::class, 'reportOrder'])->name('report_order_ajax');
//Route::post('/report_order', [OrderController::class, 'reportOrderAjax'])->name('report_order_ajax');
