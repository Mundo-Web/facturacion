<?php

namespace App\Http\Controllers;

use App\Http\Classes\dxResponse;
use App\Jobs\SendNewLeadNotification;
use App\Models\dxDataGrid;
use App\Models\Client;
use App\Models\ClientView;
use Exception;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Auth;
use SoDe\Extend\JSON;
use SoDe\Extend\Response;
use SoDe\Extend\Trace;

class ClientController extends Controller
{
    public function paginate(Request $request): HttpResponse|ResponseFactory
    {
        $response =  new dxResponse();
        try {
            $instance = ClientView::select();

            if ($request->group != null) {
                [$grouping] = $request->group;
                $selector = \str_replace('.', '__', $grouping['selector']);
                $instance = ClientView::select([
                    "{$selector} AS key"
                ])
                    ->groupBy($selector);
            }

            if (!Auth::user()->can('clients.root')) {
                $instance->whereIn('status', [0, 1]);
            }
            if ($request->filter) {
                $instance->where(function ($query) use ($request) {
                    dxDataGrid::filter($query, $request->filter ?? []);
                });
            }

            if ($request->sort != null) {
                foreach ($request->sort as $sorting) {
                    $selector = \str_replace('.', '__', $sorting['selector']);
                    $instance->orderBy(
                        $selector,
                        $sorting['desc'] ? 'DESC' : 'ASC'
                    );
                }
            } else {
                $instance->orderBy('id', 'DESC');
            }

            $totalCount = $instance->count('*');
            $jpas = $request->isLoadingAll
                ? $instance->get()
                : $instance
                ->skip($request->skip ?? 0)
                ->take($request->take ?? 10)
                ->get();

            $results = [];

            foreach ($jpas as $jpa) {
                $result = JSON::unflatten($jpa->toArray(), '__');
                $results[] = $result;
            }

            $response->status = 200;
            $response->message = 'Operación correcta';
            $response->data = $results;
            $response->totalCount = $totalCount;
        } catch (\Throwable $th) {
            $response->status = 400;
            $response->message = $th->getMessage() . ' Ln.' . $th->getLine();
        } finally {
            return response(
                $response->toArray(),
                $response->status
            );
        }
    }

    public function save(Request $request): HttpResponse|ResponseFactory
    {
        $response = new Response();
        try {

            $body = $request->all();
            $jpa = Client::find($request->id);

            if (!$jpa) {
                $body['name'] = $body['name'] ?? $body['contact_name'];
                $body['tradename'] = $body['tradename'] ?? $body['name'];
                $body['web_url'] = $body['web_url'] ?? 'https://...';
                $body['source'] = $body['source'] ?? 'Atalaya';
                $body['origin'] = $body['origin'] ?? 'Interno';
                $body['ip'] = request()->ip();
                $body['date'] = Trace::getDate('date');
                $body['time'] = Trace::getDate('time');
                $body['status_id'] = $body['status_id'] ?? 10;
                if (Auth::check()) {
                    $body['created_by'] = Auth::user()->id;
                    $body['updated_by'] = Auth::user()->id;
                }
                if ($body['source'] == 'whatsapp-web.js') {
                    $exists = Client::where('contact_phone', $body['contact_phone'])
                        ->exists();
                    if (!$exists) {
                        $body['source'] = 'WhatsApp';
                        $body['origin'] = 'Interno';
                        $client = Client::create($body);
                    }
                } else {
                    $client = Client::create($body);
                }
                if (isset($client)) SendNewLeadNotification::dispatchAfterResponse($client);
            } else {
                $body['updated_by'] = Auth::user()->id;
                $jpa->update($body);
            }

            $response->status = 200;
            $response->message = 'Operacion correcta';
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

    static function status(Request $request)
    {
        $response = new Response();
        try {
            Client::where('id', $request->id)
                ->update([
                    'status' => $request->status ? 0 : 1
                ]);

            $response->status = 200;
            $response->message = 'Operacion correcta';
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

    static function assign(Request $request)
    {
        $response = new Response();
        try {
            Client::where('id', $request->id)
                ->update([
                    'assigned_to' => $request->method() == 'DELETE' ? null : Auth::user()->id
                ]);

            $response->status = 200;
            $response->message = 'Operacion correcta';
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

    static function clientStatus(Request $request)
    {
        $response = new Response();
        try {
            Client::where('id', $request->client)
                ->update([
                    'updated_by' => Auth::user()->id,
                    'status_id' => $request->status
                ]);

            $response->status = 200;
            $response->message = 'Operacion correcta';
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

    static function delete(Request $request, string $id)
    {
        $response = new Response();
        try {
            $client = Client::find($id);
            if (!$client) throw new Exception('No se ha encontrado ningun registro');

            if ($client->status_id == 12) {
                $deleted = Client::where('id', $id)
                    ->update(['status' => null]);
            } else {
                $deleted = Client::where('id', $id)
                    ->delete();
            }

            if (!$deleted) throw new Exception('No se ha eliminado ningun registro');

            $response->status = 200;
            $response->message = 'Operacion correcta';
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
