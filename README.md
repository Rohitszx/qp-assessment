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
   `npm install`
