<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ExpenseController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/expenses', 'App\Http\Controllers\ExpenseController@index')->name('expenses.all');
Route::post('/expenses', 'App\Http\Controllers\ExpenseController@store')->name('expenses.store');
Route::get('/expenses/{expenses}', 'App\Http\Controllers\ExpenseController@show')->name('expenses.show');
Route::put('/expenses/{expenses}', 'App\Http\Controllers\ExpenseController@update')->name('expenses.update');
Route::delete('/expenses/{expenses}', 'App\Http\Controllers\ExpenseController@destroy')->name('expenses.destroy');
