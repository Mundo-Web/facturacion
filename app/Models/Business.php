<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'name',
        'economic_sector_id',
        'economic_sector',
        'business_activity_id',
        'business_activity',
        'verified',
        'person_id',
        'owner_id',
        'contact_id',
        'created_by',
        'status'
    ];

    public function person() {
        return $this->belongsTo(Person::class, 'person_id');
    }
    public function owner()
    {
        return $this->belongsTo(Person::class, 'owner_id');
    }
    public function contact()
    {
        return $this->belongsTo(Person::class, 'contact_id');
    }
}
