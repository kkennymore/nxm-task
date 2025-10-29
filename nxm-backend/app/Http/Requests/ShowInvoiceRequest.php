<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ShowInvoiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        // Authorization logic to be written here,  allow all for now
        return true;
    }

    public function rules(): array
    {
        return [
            'invoice' => ['required', 'string', 'max:50'],
        ];
    }

    public function messages(): array
    {
        return [
            'invoice.required' => 'The invoice identifier is required.',
            'invoice.string'   => 'The invoice must be a string.',
            'invoice.max'      => 'The invoice cannot exceed 50 characters.',
        ];
    }

    /**
     * Prepare data for validation.
     * This ensures route parameters get merged into validation data.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'invoice' => $this->route('invoice'),
        ]);
    }
}
