<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\RefreshDatabaseState;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function setUp(): void
    {
        parent::setUp();

        //Prevent Laravel from running migrate:fresh
        if (class_exists(RefreshDatabaseState::class)) {
            RefreshDatabaseState::$migrated = true;
        }

        // Disable all automatic migrations
        config(['database.migrations' => false]);

        // Disable model factories / parallel DB resets
        putenv('DB_REFRESH=false');
    }
}
