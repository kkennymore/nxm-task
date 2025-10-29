<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceDetailResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'invoice'     => $this['invoice'],
            'purchaser'   => $this['purchaser'],
            'distributor' => $this['distributor'],
            'order_date'  => $this['order_date'],
            'order_total' => $this['order_total'],
            'items'       => InvoiceItemResource::collection($this['items']),
        ];
    }
}
