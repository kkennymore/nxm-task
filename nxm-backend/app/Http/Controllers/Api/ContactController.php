<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use App\Services\ContactService;
use Illuminate\Http\JsonResponse;

class ContactController extends Controller
{
    protected ContactService $contactService;

    public function __construct(ContactService $contactService)
    {
        $this->contactService = $contactService;
    }

    /**
     * Store a new contact message.
     */
    public function store(ContactRequest $request): JsonResponse
    {
        $contact = $this->contactService->store($request->validated());

        return response()->json([
            'status' => true,
            'message' => 'Contact message saved successfully.',
            'data' => $contact,
        ], 201);
    }
}
