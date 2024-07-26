<?php

namespace App\Http\Controllers;

use App\Models\Business;
use App\Models\Person;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use SoDe\Extend\JSON;

class BusinessController extends BasicController
{
    public $model = Business::class;
    public $softDeletion = true;
    public $reactView = 'Businesses';

    public function setReactViewProperties()
    {
        $businesses = Business::with(['person', 'owner', 'contact'])->where('created_by', Auth::user()->id)->get();
        return [
            'businesses' => $businesses,
            'economic_sectors' => JSON::parse(Storage::get('utils/economic_sectors.json')),
            'business_activities' => JSON::parse(Storage::get('utils/business_activities.json')),
        ];
    }

    public function beforeSave(Request $request)
    {
        $body = $request->all();

        $personJpa = Person::updateOrCreate([
            'document_type' => 'RUC',
            'document_number' => $body['business']['ruc']
        ], [
            'document_type' => 'RUC',
            'document_number' => $body['business']['ruc'],
            'name' => $body['business']['tradename'],
            'lastname' => $body['business']['businessname'],
            'created_by' => Auth::user()->id
        ]);

        $ownerJpa = Person::updateOrCreate([
            'document_type' => $body['owner']['document_type'],
            'document_number' => $body['owner']['document_number']
        ], [
            'document_type' => $body['owner']['document_type'],
            'document_number' => $body['owner']['document_number'],
            'name' => $body['owner']['name'],
            'lastname' => $body['owner']['lastname'],
            'created_by' => Auth::user()->id
        ]);

        $contactJpa = Person::updateOrCreate([
            'document_type' => $body['owner']['document_type'],
            'document_number' => $body['owner']['document_number']
        ], [
            'document_type' => $body['owner']['document_type'],
            'document_number' => $body['owner']['document_number'],
            'name' => $body['owner']['name'],
            'lastname' => $body['owner']['lastname'],
            'created_by' => Auth::user()->id
        ]);
        unset($body['business']);
        unset($body['owner']);
        unset($body['contact']);

        $body['name'] = $personJpa->name;
        $body['person_id'] = $personJpa->id;
        $body['owner_id'] = $ownerJpa->id;
        $body['contact_id'] = $contactJpa->id;
        $body['created_by'] = Auth::user()->id;

        $businessJpa = Business::where('person_id', $personJpa->id)->first();
        if ($businessJpa) throw new Exception('Ya existe una empresa con estos datos');

        return $body;
    }
}
