<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $table = 'order_items';
    protected $guarded = [];

    // Relation: product
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
