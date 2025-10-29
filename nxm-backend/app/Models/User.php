<?php

namespace App\Models;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $table = 'users'; // matches your DB schema
    protected $guarded = [];    // allow mass assignment

    // Relationship: distributor's referred users
    public function referrals()
    {
        return $this->hasMany(User::class, 'referred_by');
    }

    // Relationship: distributor's orders
    public function orders()
    {
        return $this->hasMany(Order::class, 'purchaser_id');
    }
}
