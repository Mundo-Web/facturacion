<?php

namespace App\Http\Controllers;

use App\Models\Business;
use Illuminate\Support\Facades\Auth;

class BusinessController extends BasicController
{
    public $model = Business::class;
    public $softDeletion = true;
    public $reactView = 'Business';

    public function setReactViewProperties()
    {
        $businesses = Business::where('owner_id', Auth::user()->id)->get();
        return [
            'businesses' => $businesses
        ];
    }

    public function setPaginationInstance(string $model)
    {
        return $model::select()
            ->with(['owner']);
    }
}
