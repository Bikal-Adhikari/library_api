# Library Management System - Server API

Welcome to the Library Management System Server API! This API is designed to manage library operations such as user registration, login, and book management. It allows admins to add and edit book details, and users to borrow books. The project is built using Node.js, Express, Bcrypt, Joi, CORS, Morgan, and MongoDB.

## Features

### User Features

- **User Registration**: Users can register by providing their details.
- **User Login**: Registered users can log in to the system.
- **Borrow Book**: Logged-in users can borrow books from the library.

### Admin Features

- **Add Book**: Admins can add new books to the library.
- **Edit Book Details**: Admins can edit existing book details.
- **Borrow Book Management**: Admins can manage the borrowing of books.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Bcrypt**: Password hashing function for secure password storage.
- **Joi**: Data validation library for JavaScript.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **Morgan**: HTTP request logger middleware for Node.js.
- **MongoDB**: NoSQL database for storing application data.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Bikal-Adhikari/library_api.git
   cd library-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**: Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**:

   ```bash
   npm start
   ```
