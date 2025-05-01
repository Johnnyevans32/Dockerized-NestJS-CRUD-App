# NestJS CRUD Application with Docker

A robust CRUD application built with NestJS, featuring user authentication and management capabilities. The application is containerized using Docker and uses PostgreSQL as its database.

## Features

- User registration and login with JWT authentication
- CRUD operations for user management
- Secure password hashing
- Containerized with Docker and Docker Compose
- PostgreSQL database integration

## Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Johnnyevans32/Dockerized-NestJS-CRUD-App
cd nestjs-crud-app
```

2. Start the application:
```bash
docker-compose up --build
```

This will:
- Start the PostgreSQL database on port `5432`
- Build and run the NestJS application on port `3000`

3. Access the application:
- API Documentation: `http://localhost:3000/api`
- Swagger UI: `http://localhost:3000/api/docs`

## Project Structure

```
src/
├── auth/           # Authentication module
├── users/          # User management module
├── config/         # Configuration files
├── common/         # Shared utilities and decorators
└── main.ts         # Application entry point
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=nestjs_crud
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=1d
```

## API Endpoints

### Authentication
- POST `/auth/register` - Register a new user
- POST `/auth/login` - Login and get JWT token

### Users
- GET `/users` - List all users (requires authentication)
- GET `/users/:id` - Get user by ID (requires authentication)
- PUT `/users/:id` - Update user (requires authentication)
- DELETE `/users/:id` - Delete user (requires authentication)

## Development

For local development without Docker:

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run start:dev
```

## Testing

Run tests:
```bash
npm run test
```

## Notes

- The application uses TypeORM for database operations
- JWT is used for authentication
- Password hashing is implemented using bcrypt
- CORS is enabled for cross-origin requests
- Swagger documentation is available at `/api/docs` 