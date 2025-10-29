<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * CommissionResource
 * -------------------
 * Transforms each record from vw_commission_report
 * into a consistent and formatted JSON response.
 */
class CommissionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'invoice' => $this->invoice,
            'purchaser' => $this->purchaser,
            'distributor' => $this->distributor,
            'referred_distributors' => (int) $this->referred_distributors,
            'percentage' => (float) $this->percentage,
            'order_total' => number_format((float) $this->order_total, 2),
            'commission' => number_format((float) $this->commission, 2),
            'order_date' => $this->order_date,
        ];
    }
}
