# Simple E-Commerce Product API

A simple E-Commerce Product API built using Node.js, Express.js, MongoDB, JWT Authentication, and Multer.

---

# Features

* User Authentication (Register/Login)
* JWT Protected Routes
* CRUD Operations for Products
* Multiple Image Uploads using Multer
* Category Filtering
* MongoDB Database Integration
* Global Error Handling
* REST API Architecture

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Multer

---

# Folder Structure

```bash id="5k2q9d"
ecommerce-api/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── app.js
│
├── uploads/
├── API_DOCUMENTATION.md
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

# Installation

Clone the repository:

```bash id="fbr19j"
git clone your_repository_link
```

Move into the project directory:

```bash id="gk4t8f"
cd ecommerce-api
```

Install dependencies:

```bash id="c1kp9o"
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory and add:

```env id="9xt3hz"
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

# Run the Server

For development:

```bash id="t1q2py"
npm run dev
```

For production:

```bash id="1k0f7x"
npm start
```

---

# API Endpoints

## Auth Routes

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |

---

## Product Routes

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/products     |
| GET    | /api/products/:id |
| POST   | /api/products     |
| PUT    | /api/products/:id |
| DELETE | /api/products/:id |

---

# Authentication

Protected routes require JWT token.

Example:

```bash id="n1f3xb"
Authorization : Bearer your_jwt_token
```

---

# Image Upload

* Multiple image uploads supported
* Uses Multer middleware
* Images stored inside `uploads/` folder

---

# API Documentation

Detailed API documentation available in:

```bash id="j5bq7t"
API_DOCUMENTATION.md
```

---

# Author

Harshit Raghuwanshi
