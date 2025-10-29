<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Request: Validates date range filters
 */
class DateRangeRequest extends FormRequest
{
    public function authorize(): bool
    {
        // Allow public access or API auth if needed
        return true;
    }

    public function rules(): array
    {
        return [
            'date_from' => ['nullable', 'date', 'before_or_equal:date_to'],
            'date_to'   => ['nullable', 'date', 'after_or_equal:date_from'],
        ];
    }

    public function messages(): array
    {
        return [
            'date_from.date' => 'The start date must be a valid date.',
            'date_to.date'   => 'The end date must be a valid date.',
            'date_from.before_or_equal' => 'The start date must be before or equal to the end date.',
            'date_to.after_or_equal'    => 'The end date must be after or equal to the start date.',
        ];
    }

    /**
     * Prepare validated date filter array
     */
    public function filters(): array
    {
        return [
            'date_from' => $this->input('date_from'),
            'date_to'   => $this->input('date_to'),
        ];
    }
}
