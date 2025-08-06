# 🎯 Support Desk Application

_This Project is made from the Udemy Course of Brad Traversy_

A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing support tickets with user authentication.

## 🚀 Features

- **User Authentication**
  - JWT-based authentication
  - Secure password hashing with bcrypt
  - Register & Login functionality
  - Protected routes
  - Persistent sessions

## 💻 Tech Stack

### Frontend

- **React 19** with TypeScript
- **Redux Toolkit** for state management
- **React Router DOM** for routing
- **Axios** for API requests
- **React Icons** for UI elements
- **React Toastify** for notifications
- **Vite** as the build tool

### Backend

- **Node.js** with Express
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcrypt** for password hashing
- **Express Async Handler** for error handling

### Development Tools

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Vitest** for testing
- **Concurrently** for running multiple scripts

## 🛠️ Project Structure

```
support-desk/
├── frontend/               # React TypeScript frontend
│   ├── src/
│   │   ├── app/           # Redux store setup
│   │   ├── components/    # Reusable components
│   │   ├── features/      # Feature modules (auth)
│   │   ├── pages/         # Page components
│   │   └── utils/         # Utility functions
│   └── ...
│
└── backend/               # Node.js backend
    ├── config/           # Database configuration
    ├── controllers/      # Route controllers
    ├── middleware/       # Custom middleware
    ├── models/          # Database models
    ├── routes/          # API routes
    └── server.js        # Entry point
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies

   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with:

   ```
   NODE_ENV = development
   PORT = 5000
   MONGO_URI = your_mongodb_connection_string
   JWT_SECRET = your_jwt_secret
   ```

4. Run the application

   ```bash
   # Run both frontend and backend
   npm run dev

   # Run backend only
   npm run server

   # Run frontend only
   npm run client
   ```

## 🔒 API Endpoints

### Users

- `POST /api/users` - Register user
- `POST /api/users/login` - Login user
- `GET /api/users/me` - Get user data (Protected)

## 📝 License

This project is licensed under the MIT License.
