<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BasicController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', fn (Request $request) => view('home'));
Route::get('/login', [AuthController::class, 'loginView'])->name('Login.jsx');
Route::get('/register', [AuthController::class, 'registerView'])->name('Register.jsx');
Route::get('/confirm-email/{token}', [AuthController::class, 'confirmEmailView'])->name('ConfirmEmail.jsx');
Route::get('/confirmation/{token}', [AuthController::class, 'loginView']);

Route::middleware('auth')->group(function () {
    Route::get('/home', [BasicController::class, 'reactView'])->name('Home.jsx');
    Route::get('/businesses', [BusinessController::class, 'reactView'])->name('Businesses.jsx');
    Route::get('/services', [ServiceController::class, 'reactView'])->name('Services.jsx');

    Route::get('/profile', [ProfileController::class, 'reactView'])->name('Profile.jsx');
});
