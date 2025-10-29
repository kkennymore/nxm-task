<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceItemResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'sku'          => $this->sku,
            'product_name' => $this->product_name,
            'price'        => $this->price,
            'quantity'     => (int) $this->quantity,
            'total'        => $this->total,
        ];
    }
}
