<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Resource formatter for distributor ranking.
 */
class DistributorResource extends JsonResource
{

    public function toArray($request)
    {
        return [
            'rank' => $this->rank,
            'distributor_id' => $this->distributor_id,
            'distributor_name' => $this->distributor_name,
            'referred_distributors' => (int) $this->referred_distributors,
            'total_sales' => number_format($this->total_sales, 2),
        ];
    }
}
