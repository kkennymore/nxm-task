# Use the official Node.js image as a base image
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies first
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
# RUN npm run build

# Stage 2: Serve the app using an Nginx server
# FROM nginx:alpine

# Copy the built application from the build stage to the Nginx HTML directory
# COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3006 to make the app accessible
EXPOSE 3006

# Start the Nginx server
CMD ["npm", "run", "dev"]
