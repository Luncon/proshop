# ProShop

A full-stack e-commerce web application built as part of the **Traversy Media ProShop MERN course**. This project was developed to gain hands-on experience building and connecting a modern React frontend, REST API, authentication system, and MongoDB database.

## Features

* User registration and authentication
* User profiles
* Product browsing and product details
* Product search
* Shopping cart
* Checkout process
* Shipping and payment workflows
* Product reviews and ratings
* Order management
* Admin product management
* Admin user management
* Admin order management

## Tech Stack

### Frontend

* React
* Redux
* React Router
* Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)

## Project Structure

The application uses a client-server architecture:

* **Frontend** — React application responsible for the user interface and client-side state
* **Backend** — Express REST API responsible for application logic, authentication, and data access
* **Database** — MongoDB with Mongoose for storing users, products, reviews, and orders

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd proshop
```

Install the backend dependencies:

```bash
npm install
```

Install the frontend dependencies:

```bash
cd frontend
npm install
cd ..
```

## Environment Variables

Create a `.env` file in the project root and configure the required environment variables.

Example:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Depending on the version of the project, additional environment variables may be required for payment functionality.

**Do not commit your `.env` file or credentials to the repository.**

## Running the Application

Run the frontend and backend development servers:

```bash
npm run dev
```

The frontend and API can also be started separately using the scripts defined in `package.json`.

## Purpose

This project was completed as a guided full-stack development project to strengthen my understanding of:

* Building REST APIs with Express
* Designing routes and controllers
* Working with MongoDB and Mongoose
* User authentication and authorization
* Connecting a React frontend to a backend API
* Managing application state
* Structuring a full-stack web application
* Handling asynchronous API requests
* Implementing common e-commerce functionality

## Attribution

This project is based on the **ProShop MERN Stack course/project by Brad Traversy / Traversy Media**.

The original project provided the architecture and instructional foundation for this implementation. This repository represents my implementation completed while following the course.

## License

This project is based on software distributed under the MIT License. See the `LICENSE` file for the applicable license and attribution information.
