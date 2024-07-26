<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersByServicesByBusiness extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'service_by_business_id',
        'created_by',
        'invitation_accepted',
        'invitation_token'
    ];
}
