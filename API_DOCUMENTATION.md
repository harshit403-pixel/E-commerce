# Simple E-Commerce Product API Documentation

## Base URL

```bash
http://localhost:3000/api
```

---

# Authentication Routes

## 1. Register User

### Route

```bash
POST /auth/register
```

### Description

Registers a new user.

### Request Body

```json
{
  "name": "Harshit",
  "email": "harshit@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

### Error Responses

#### Missing Fields

```json
{
  "success": false,
  "message": "All fields are required"
}
```

#### User Already Exists

```json
{
  "success": false,
  "message": "User already exists"
}
```

---

## 2. Login User

### Route

```bash
POST /auth/login
```

### Description

Logs in an existing user and returns a JWT token.

### Request Body

```json
{
  "email": "harshit@gmail.com",
  "password": "123456"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

### Error Responses

#### Invalid Credentials

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

# Product Routes

## 1. Get All Products

### Route

```bash
GET /products
```

### Description

Fetches all available products.

### Category Filtering

```bash
GET /products?category=electronics
```

### Success Response

```json
{
  "success": true,
  "count": 2,
  "products": []
}
```

---

## 2. Get Single Product

### Route

```bash
GET /products/:id
```

### Description

Fetches a single product using product ID.

### Success Response

```json
{
  "success": true,
  "product": {}
}
```

### Error Responses

#### Product Not Found

```json
{
  "success": false,
  "message": "Product not found"
}
```

#### Invalid Product ID

```json
{
  "success": false,
  "message": "Invalid product ID"
}
```

---

## 3. Create Product

### Route

```bash
POST /products
```

### Description

Creates a new product.

### Authentication

Required

### Headers

```bash
Authorization : Bearer jwt_token
```

### Request Body

Use `form-data`

| KEY         | TYPE |
| ----------- | ---- |
| name        | Text |
| description | Text |
| price       | Text |
| category    | Text |
| images      | File |

### Success Response

```json
{
  "success": true,
  "message": "Product created successfully",
  "product": {}
}
```

### Error Responses

#### Missing Required Fields

```json
{
  "success": false,
  "message": "Name and price are required"
}
```

#### Invalid Token

```json
{
  "success": false,
  "message": "Invalid token"
}
```

---

## 4. Update Product

### Route

```bash
PUT /products/:id
```

### Description

Updates an existing product.

### Authentication

Required

### Headers

```bash
Authorization : Bearer jwt_token
```

### Request Body

Use `form-data`

| KEY         | TYPE |
| ----------- | ---- |
| name        | Text |
| description | Text |
| price       | Text |
| category    | Text |
| images      | File |

### Success Response

```json
{
  "success": true,
  "message": "Product updated successfully",
  "product": {}
}
```

### Error Responses

#### Product Not Found

```json
{
  "success": false,
  "message": "Product not found"
}
```

---

## 5. Delete Product

### Route

```bash
DELETE /products/:id
```

### Description

Deletes a product using product ID.

### Authentication

Required

### Headers

```bash
Authorization : Bearer jwt_token
```

### Success Response

```json
{
  "success": true,
  "message": "Product deleted successfully"
}
```

### Error Responses

#### Product Not Found

```json
{
  "success": false,
  "message": "Product not found"
}
```

#### Invalid Token

```json
{
  "success": false,
  "message": "Invalid token"
}
```

---

# Common Error Responses

## Invalid Product ID

```json
{
  "success": false,
  "message": "Invalid product ID"
}
```

## Missing Required Fields

```json
{
  "success": false,
  "message": "Name and price are required"
}
```

## Invalid Token

```json
{
  "success": false,
  "message": "Invalid token"
}
```

---

# Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* bcryptjs

---
