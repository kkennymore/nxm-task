# Use the official PHP image with Apache
FROM php:8.1-apache

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy the application files into the container
COPY . /var/www/html

# Install system dependencies and required PHP extensions
RUN apt-get update && \
    apt-get install -y \
    unzip \
    zlib1g-dev \
    ffmpeg \
    libgmp-dev \
    libpq-dev \
    libpng-dev \
    libjpeg-dev \
    libgif-dev \
    libzip-dev \
    libwebp-dev \
    sendmail \
    git \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install PHP extensions that Composer might require
RUN docker-php-ext-install \
    pdo_mysql \
    gd \
    zip \
    bcmath \
    opcache

# Install and enable Redis PHP extension
RUN pecl install redis && docker-php-ext-enable redis

# Configure and install other PHP extensions
RUN docker-php-ext-configure gd --with-jpeg --with-webp=/usr/include/ && \
    docker-php-ext-install gmp sockets pdo_pgsql zip pdo_mysql gd

# Enable Apache mod_rewrite for Laravel
RUN a2enmod rewrite

# Clean up apt cache and unneeded dependencies to reduce image size
RUN apt-get purge -y --auto-remove

# Set appropriate file permissions
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 755 /var/www/html/storage

# Clear Composer cache and run composer install with no cache
RUN composer clear-cache && composer install --no-interaction --prefer-dist --optimize-autoloader

# Expose the port Laravel will run on
EXPOSE 8000

# Set the command to run when the container starts
CMD ["apache2-foreground"]
