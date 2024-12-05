# qp-assessment

# Grocery Booking API

## Overview

The **Grocery Booking API** is a simple, robust API designed to handle grocery items and orders for both admins and users. This API allows admins to manage grocery items (add, view, update, delete), while users can browse available grocery items and place orders.

The application is built with **Node.js** and **TypeScript** and includes role-based access for **Admin** and **User** roles. To simplify deployment, the application is containerized using **Docker** for easy scalability and portability. A relational **PostgreSQL** database is used for data storage.

## Features

### Admin Responsibilities:
- **Add New Grocery Items**: Add new grocery items to the system.
- **View Existing Grocery Items**: View a list of all the available grocery items.
- **Remove Grocery Items**: Delete items from the system.
- **Update Existing Grocery Items**: Update the details of existing grocery items (name, price, inventory).
- **Manage Inventory Levels**: Update stock levels for each grocery item.

### User Responsibilities:
- **View Available Grocery Items**: Browse a list of all available grocery items.
- **Place Orders**: Place an order for multiple grocery items in a single request.

### Advanced Challenge:
- **Dockerized Application**: The API is containerized using Docker, enabling easy deployment and scaling in any environment.

## Requirements

- **Node.js**: Version 16 or above.
- **TypeScript**: For a statically typed experience.
- **Docker**: For containerization and easy deployment.
- **PostgreSQL**: As the relational database for storage.

## Setup and Installation

### Prerequisites:
- Make sure you have **Node.js**, **Docker**, and **Docker Compose** installed on your machine. You can check your installations with the following commands:
  - `node -v`
  - `docker --version`
  - `docker-compose --version`

### Steps to Set Up:

1. **Clone the Repository**:
   Clone this project repository to your local machine.
   ```bash
   git clone <repository-url>
   cd <repo-folder>

2. **Install Dependencies**:
   Run npm install to install all the necessary Node.js dependencies.
   ```bash
   npm install
3. **Docker Setup** : This project uses Docker to containerize the application and the database (PostgreSQL). 
    
    Run the following command to start the Docker containers:
    ```bash
    docker-compose up 

This will pull the PostgreSQL Docker image and set up the database container.

Ensure that Docker Compose is running properly by checking the status of containers:
  ```bash
  docker ps
  ```
4. **Run the API**: After setting up the Docker containers, you can run the API locally:
```bash
npm run dev
npm install
```
5. **Docker Setup**:
```bash
 docker-compose up 
```
**Verify containers**:
``` 
docker ps 
```
  **Run the API**:
```
npm run dev 
```
6. **Access the API**
API available at: http://localhost:3000
Test endpoints using Postman or any HTTP client

## API Endpoints

### Admin Routes:

1. **Add Grocery Item**: `POST /api/admin/groceries`
   - **Request Body**:
     ```json
     {
       "name": "string",  // Name of the grocery item
       "price": "number",  // Price of the grocery item
       "stock": "number"  // Available stock for the grocery item
     }
     ```
   - **Response**:
     - `201 Created`: If the item was successfully added.

2. **Get All Grocery Items**: `GET /api/admin/groceries`
   - **Query Parameters**:
     - `page`: (optional) The page number for pagination (default: 1).
     - `limit`: (optional) Number of items per page (default: 10).
   - **Response**:
     - `200 OK`: List of grocery items.

3. **Update Grocery Item**: `PUT /api/admin/groceries/:id`
   - **Request Parameters**:
     - `id`: The ID of the grocery item to update (path parameter).
   - **Request Body**:
     ```json
     {
       "name": "string",  // Name of the grocery item (optional)
       "price": "number",  // Price of the grocery item (optional)
       "stock": "number"  // Available stock for the grocery item (optional)
     }
     ```
   - **Response**:
     - `200 OK`: If the item was successfully updated.
     - `404 Not Found`: If the item with the provided ID does not exist.

4. **Delete Grocery Item**: `DELETE /api/admin/groceries/:id`
   - **Request Parameters**:
     - `id`: The ID of the grocery item to delete (path parameter).
   - **Response**:
     - `200 OK`: If the item was successfully deleted.
     - `404 Not Found`: If the item with the provided ID does not exist.

### User Routes:

1. **Get All Grocery Items**: `GET /api/user/groceries`
   - **Query Parameters**:
     - `page`: (optional) The page number for pagination (default: 1).
     - `limit`: (optional) Number of items per page (default: 10).
   - **Response**:
     - `200 OK`: List of grocery items available to the user.

2. **Place an Order**: `POST /api/user/order`
   - **Request Body**:
     ```json
     {
        "userId" : 2,
        "items": [
            {
            "groceryItemId": "string",  // The ID of the grocery item
            "quantity": "number"  // The quantity of the grocery item
            }
        ]
     }
     ```
   - **Response**:
     - `201 Created`: If the order was successfully placed.
     - `400 Bad Request`: If the request body is malformed or missing required information.

### Authentication Routes:

1. **Signup**: `POST /api/auth/signup`
   - **Request Body**:
     ```json
     {
       "username": "string",  // The desired username
       "email": "string",  // The email address
       "password": "string"  // The password for the account
     }
     ```
   - **Response**:
     - `201 Created`: If the user was successfully registered.
     - `400 Bad Request`: If any required fields are missing or invalid.

2. **Login**: `POST /api/auth/login`
   - **Request Body**:
     ```json
     {
       "email": "string",  // The email address of the user
       "password": "string"  // The password of the user
     }
     ```
   - **Response**:
     - `200 OK`: If the login is successful, returns a JWT token.
     - `401 Unauthorized`: If the credentials are incorrect or missing.


8. **Database Configuration**

#### Environment Variables:
```bash
DB_HOST: Database hostname (default: localhost)
DB_PORT: Database port (default: 5432)
DB_USER: Database username (default: postgres)
DB_PASSWORD: Database password (default: password)
DB_NAME: Database name (default: grocery_db)
```


9. **Docker Commands**:
  - Build and start containers:
      `docker-compose up --build `
  - Stop and remove containers:
      `docker-compose down `

10. **Technologies Used**
```bash
Node.js: Backend runtime
Express: Web framework for routing
TypeScript: Type safety and improved development
PostgreSQL: Relational database
Docker: Containerization platform
```
