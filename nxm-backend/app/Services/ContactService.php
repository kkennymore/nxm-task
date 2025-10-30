<?php

namespace App\Services;

use App\Repositories\Contracts\ContactRepositoryInterface;

class ContactService
{
    protected ContactRepositoryInterface $contactRepository;

    public function __construct(ContactRepositoryInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    public function store(array $data)
    {
        return $this->contactRepository->create($data);
    }
}
