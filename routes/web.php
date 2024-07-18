<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\Controller;
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

require __DIR__ . '/router.php';

Route::get('/', fn (Request $request) => view('home'));
Route::get('/login', [AuthController::class, 'loginView'])->name('Login.jsx');
Route::get('/register', [AuthController::class, 'registerView'])->name('Register.jsx');


Route::middleware('auth')->group(function () {

    Route::get('/business', [BusinessController::class, 'reactView'])->name('Business.jsx');


    foreach (Router::components as $path => $page) {
        if (isset($page['adminto-instance']) && $page['adminto-instance']) {
            Route::get('/' . $path, function (Request $request) use ($page) {
                $properties = [
                    'PUBLIC_RSA_KEY' => Controller::$PUBLIC_RSA_KEY,
                    'token' => csrf_token(),
                    'session' => Auth::user(),
                    'permissions' => Auth::user()->getAllPermissions(),
                    'WA_URL' => env('WA_URL'),
                    'APP_URL' => env('APP_URL')
                ];
                if (isset($page['compact'])) {
                    foreach ($page['compact'] as $key => $compact) {
                        if (isset($compact['select'])) {
                            $query = $compact['class']::select($compact['select']);
                        } else {
                            $query = $compact['class']::select();
                        }
                        if (isset($compact['filter'])) {
                            $query = $query->where($compact['filter']);
                        }
                        $properties[$key] = $query->get();
                    }
                }
                return Inertia::render($page['component'], $properties)->rootView('admin');
            })->name($path);
        }
    }
});
