# Fullstack Deployment: React, NodeJS, SQL

This project demonstrates a comprehensive workflow for deploying a fullstack application using React for the frontend, Node.js for the backend, and MySQL for the database. It provides a complete implementation from setting up the environment to hosting the application on Google Cloud.

# Project Overview

## Tech Stack

- Frontend: React , Shadcn/ui
- Backend: Node.js (Hapi framework)
- Auth: Firebase Auth
- Database: MySQL
- Deployment: Google Cloud Platform (GCP)

## Features

1. Frontend:

- Dynamic UI built with React.
- CRUD operations integrated with backend API.
- Responsive design for desktop and mobile.

2. Backend:

- Developed using Node.js with Hapi framework.
- API endpoints for user authentication and CRUD operations.
- Secure handling of data with JWT-based authentication.

3. Database:

- MySQL for data storage.
- Proper relational schema and optimized queries.

4. Deployment:

- Hosted on Google Cloud using CLI.
- Environment configured for scalability and reliability.

### How to Run the Project

- Prerequisites
- Node.js (v16 or above)
- MySQL
- Google Cloud CLI

## Setup Instructions

1. Clone the Repository:

```
git clone https://github.com/your-repo/fullstack-React-node-sql.git
cd fullstack-React-node-sql
```

2. Frontend Setup:

```
cd frontend
npm install
npm run dev

```

3. Backend Setup:

```
cd backend
npm install
npm run start

```

4. Database:

- Create a MySQL database.
- Import the provided schema from /database/schema.sql.

5. Google Cloud Deployment:

- Configure Google Cloud CLI with your project.
- Deploy the app using gcloud app deploy.

# API Documentation

## Authentication Endpoints

`POST /api/login` - User login with Firebase Auth.

`POST /api/signup` - User registration.

## CRUD Endpoints

`GET /api/items` - Fetch all items.

`POST /api/items` - Add a new item.

`PUT /api/items/:id` - Update an item.

`DELETE /api/items/:id` - Delete an item.

# License

MIT License
