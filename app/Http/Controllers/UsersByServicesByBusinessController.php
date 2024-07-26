<?php

namespace App\Http\Controllers;

use App\Http\Classes\EmailConfig;
use App\Models\UsersByServicesByBusiness;
use App\Http\Requests\StoreUsersByServicesByBusinessRequest;
use App\Http\Requests\UpdateUsersByServicesByBusinessRequest;
use App\Models\Constant;
use App\Models\ServicesByBusiness;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use SoDe\Extend\Crypto;
use SoDe\Extend\Response;

class UsersByServicesByBusinessController extends BasicController
{
  public $model = UsersByServicesByBusiness::class;

  public function inviteUser(Request $request)
  {
    $response = Response::simpleTryCatch(function (Response $res) use ($request) {
      $userJpa = User::where('email', $request->email)
        ->where('status', true)
        ->first();
      if (!$userJpa) throw new Exception('El usuario no existe o se encuentra inactivo');
      $serviceByBusinessJpa = ServicesByBusiness::with('service', 'business')
        ->where('id', $request->match)
        ->where('created_by', Auth::user()->id)
        ->first();
      if (!$serviceByBusinessJpa) throw new Exception('El servicio no existe o no tienes permisos para vincular');

      $ubsbb = UsersByServicesByBusiness::updateOrCreate([
        'user_id' => $userJpa->id,
        'service_by_business_id' => $serviceByBusinessJpa->id
      ], [
        'user_id' => $userJpa->id,
        'service_by_business_id' => $serviceByBusinessJpa->id,
        'created_by' => Auth::user()->id,
        'invitation_token' => Crypto::randomUUID()
      ]);

      $content = Constant::value('accept-invitation');
      $content = str_replace('{SENDER}', Auth::user()->name, $content);
      $content = str_replace('{SERVICE}', $serviceByBusinessJpa->service->name, $content);
      $content = str_replace('{BUSINESS}', $serviceByBusinessJpa->business->name, $content);
      $content = str_replace('{URL_CONFIRM}', env('APP_URL') . '/invitation/' . $ubsbb->invitation_token, $content);

      $mailer = EmailConfig::config();
      $mailer->Subject = 'Confirmacion - Atalaya';
      $mailer->Body = $content;
      $mailer->addAddress($userJpa->email);
      $mailer->isHTML(true);
      $mailer->send();

      $res->message = 'Se ha enviado una invitacion al usuario ' . $userJpa->name;
    });

    return \response(
      $response->toArray(),
      $response->status
    );
  }
}
