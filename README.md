### Library Management System - Server API

Welcome to the Library Management System Server API! This API is designed to manage library operations such as user registration, login, and book management. It allows admins to add and edit book details, and users to borrow books. The project is built using Node.js, Express, Bcrypt, Joi, CORS, Morgan, and MongoDB.

### Features

## User Features

1. User Registration: Users can register by providing their details.
2. User Login: Registered users can log in to the system.
3. Borrow Book: Logged-in users can borrow books from the library.

## Admin Features

1. Add Book: Admins can add new books to the library.
2. Edit Book Details: Admins can edit existing book details.
3. Borrow Book Management: Admins can manage the borrowing of books.

## Technologies Used

1. Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.
2. Express: Fast, unopinionated, minimalist web framework for Node.js.
3. Bcrypt: Password hashing function for secure password storage.
4. Joi: Data validation library for JavaScript.
5. CORS: Middleware for enabling Cross-Origin Resource Sharing.
6. Morgan: HTTP request logger middleware for Node.js.
7. MongoDB: NoSQL database for storing application data.

### Installation

To get started with the project, follow these steps:

## Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/library-management-server.git
cd library-management-server

Install dependencies:

bash
Copy code
npm install

Set up environment variables: Create a .env file in the root directory and add the following variables:

plaintext
Copy code
PORT=5000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Start the server:

bash
Copy code
npm start
