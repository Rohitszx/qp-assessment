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
      ```bash  docker-compose up 

   This will pull the PostgreSQL Docker image and set up the database container.

   Ensure that Docker Compose is running properly by checking the status of containers:
  ``bash docker ps

4. **Run the API**: After setting up the Docker containers, you can run the API locally:
```bash
npm run dev
npm install
```
5. **Docker Setup**:
```bash docker-compose up ```
  **Verify containers**:
```bash docker ps ```
  **Run the API**:
```bash npm run dev ```
6. Access the API

API available at: http://localhost:3000
Test endpoints using Postman or any HTTP client

7. API Endpoints

**Admin Routes**

Add Grocery Item: ```POST /api/admin/groceries```
Get All Grocery Items: ```GET /api/admin/groceries```
Update Grocery Item: ```PUT /api/admin/groceries/:id```
Delete Grocery Item: ```DELETE /api/admin/groceries/:id```

**User Routes** 

Get All Grocery Items: ```GET /api/user/groceries```
Place an Order: ```POST /api/user/order```

**Authentication Routes**

Signup: ```POST /api/auth/signup```
Login: ```POST /api/auth/login```

8. Database Configuration

## Database Setup
**Environment Variables** :
```bash
DB_HOST: Database hostname (default: localhost)
DB_PORT: Database port (default: 5432)
DB_USER: Database username (default: postgres)
DB_PASSWORD: Database password (default: password)
DB_NAME: Database name (default: grocery_db)
```


9. Docker Commands:
  - Build and start containers:
      ``` docker-compose up --build 
  - Stop and remove containers:
      ``` docker-compose down 

10. Technologies Used
```bash
Node.js: Backend runtime
Express: Web framework for routing
TypeScript: Type safety and improved development
PostgreSQL: Relational database
Docker: Containerization platform
```
