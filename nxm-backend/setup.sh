#!/bin/bash

# Load environment variables
source ".env"

# Function to wait for MySQL to be ready
wait_for_mysql() {
    echo "Waiting for MySQL to be ready..."
    until mysql -h "$DB_HOST" -u "$DB_USERNAME" -p"$DB_PASSWORD" -e 'show databases'; do
        echo "MySQL is not ready yet, waiting..."
        sleep 5
    done
}

# Function to set up Laravel
setup_laravel() {
    echo "Setting up the .env file..."
    
    # Ensure the .env file exists and is copied correctly
    if [ ! -f ".env" ]; then
        cp .env.example .env
    fi

    # Replace DB settings in .env
    sed -i "s/DB_HOST=127.0.0.1/DB_HOST=${NXM_DATABASE_CONTAINER}/" .env
    sed -i "s/DB_PORT=3306/DB_PORT=${DATABASE_PORT}/" .env
    sed -i "s/DB_DATABASE=laravel/DB_DATABASE=${DB_NAME}/" .env
    sed -i "s/DB_USERNAME=root/DB_USERNAME=${DB_USERNAME}/" .env
    sed -i "s/DB_PASSWORD=/DB_PASSWORD=${DB_PASSWORD}/" .env

    # Generate Laravel app key
    echo "Generating Laravel application key..."
    php artisan key:generate

    # Run database migrations
    echo "Running migrations..."
    php artisan migrate
}

# Function to grant full MySQL privileges to the database user
grant_full_mysql_privileges() {
    echo "Granting full privileges to ${DB_USERNAME}..."

    docker exec -i "${NXM_MYSQL_CONTAINER}" mysql -uroot -p"${DB_PASSWORD}" <<EOF
    -- Create user if it doesn't exist
    CREATE USER IF NOT EXISTS '${DB_USERNAME}'@'%' IDENTIFIED BY '${DB_PASSWORD}';

    -- Grant all privileges (root-like) on all databases
    GRANT ALL PRIVILEGES ON *.* TO '${DB_USERNAME}'@'%' WITH GRANT OPTION;

    -- Apply the privileges
    FLUSH PRIVILEGES;
EOF

    echo "Granted full root-like privileges to ${DB_USERNAME}"
}


# Main function to run the entire setup process
main() {
    # Wait for MySQL to be ready
    # wait_for_mysql

    # Setup Laravel environment and database
    # setup_laravel

    # Grant full privileges to the DB user
    grant_full_mysql_privileges

    # Done
    echo "Setup complete! Laravel is ready."
}

# Run the main function
main
