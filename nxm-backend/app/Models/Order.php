<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';
    protected $guarded = [];

    // Each order belongs to a user (the purchaser)
    public function purchaser()
    {
        return $this->belongsTo(User::class, 'purchaser_id');
    }

    // Each order has many items
    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}
