<?php

namespace App\Http\Controllers;

use App\Models\ModelHasRoles;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use SoDe\Extend\Crypto;
use SoDe\Extend\Response;

class AuthController extends Controller
{

  public function loginView()
  {
    if (Auth::check()) return redirect('/home');

    return Inertia::render('Login', [
      'PUBLIC_RSA_KEY' => Controller::$PUBLIC_RSA_KEY,
      'NOCAPTCHA_SITEKEY' => env('NOCAPTCHA_SITEKEY')
    ])->rootView('auth');
  }

  public function registerView()
  {
    if (Auth::check()) return redirect('/home');

    return Inertia::render('Register', [
      'PUBLIC_RSA_KEY' => Controller::$PUBLIC_RSA_KEY,
      'NOCAPTCHA_SITEKEY' => env('NOCAPTCHA_SITEKEY'),
    ])->rootView('auth');
  }

  /**
   * Handle an incoming authentication request.
   */
  public function login(Request $request): HttpResponse | ResponseFactory | RedirectResponse
  {
    $response = new Response();
    try {
      $email = $request->email;
      $password = $request->password;

      if (!Auth::attempt([
        'email' => Controller::decode($email),
        'password' => Controller::decode($password)
      ])) {
        throw new Exception('Credenciales invalidas');
      }

      $request->session()->regenerate();

      $response->status = 200;
      $response->message = 'Autenticacion correcta';
    } catch (\Throwable $th) {
      $response->status = 400;
      $response->message = $th->getMessage();
    } finally {
      return response(
        $response->toArray(),
        $response->status
      );
    }

    $request->session()->regenerate();

    return redirect()->intended(RouteServiceProvider::HOME);
  }

  public function signup(Request $request): HttpResponse | ResponseFactory | RedirectResponse
  {
    $response = new Response();
    try {
      $jpa = null;
      if ($request->id) {
        $jpa = User::find($request->id);
      }
      if (!$jpa) {
        if (!isset($request->password) || !isset($request->confirm)) throw new Exception('Debes ingresar una contraseña para el nuevo usuario');
        $jpa = new User();
        $jpa->relative_id = Crypto::randomUUID();
      }
      $jpa->name = $request->name;
      $jpa->lastname = $request->lastname;
      $jpa->email = $request->email;

      if (
        isset($request->password) && isset($request->confirm)
      ) {
        if (Controller::decode($request->password) == Controller::decode($request->confirm)) {
          $jpa->password = password_hash(Controller::decode($request->password), PASSWORD_DEFAULT);
        } else throw new Exception('Las contraseñas deben ser iguales');
      }

      $jpa->save();

      ModelHasRoles::where('model_id', $jpa->id)
        ->where('model_type', User::class)
        ->delete();

      foreach ($request->roles as $role) {
        ModelHasRoles::create([
          'role_id' => $role,
          'model_id' => $jpa->id,
          'model_type' => User::class
        ]);
      }

      $response->status = 200;
      $response->message = 'Operacion correcta';
      $response->data = $jpa->toArray();
    } catch (\Throwable $th) {
      $response->status = 400;
      $response->message = $th->getMessage();
    } finally {
      return response(
        $response->toArray(),
        $response->status
      );
    }
  }

  /**
   * Destroy an authenticated session.
   */
  public function destroy(Request $request)
  {
    $response = new Response();
    try {
      Auth::guard('web')->logout();

      $request->session()->invalidate();
      $request->session()->regenerateToken();

      $response->status = 200;
      $response->message = 'Cierre de sesion exitoso';
    } catch (\Throwable $th) {
      $response->status = 400;
      $response->message = $th->getMessage();
    } finally {
      return response(
        $response->toArray(),
        $response->status
      );
    }
  }
}
