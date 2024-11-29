# CookBook Social Media Platform

## Project Overview

### Introduction

**CookBook** is a social media platform designed for food enthusiasts to **Create, Explore, and Share Recipes** from around the world. Inspired by popular platforms like Facebook and Instagram, CookBook focuses on cooking and recipes while maintaining familiar social media features. It creates a unique digital space where users can connect through their love of food, share their culinary creations, and explore new recipes from others.

The platform is designed to be accessible to users of all skill levels, fostering an open, collaborative environment for discovering new ideas, sharing cooking techniques, and celebrating favorite dishes.

## Installation

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js**: You can download it from [here](https://nodejs.org/)
- **MySQL**: Download and install MySQL from [here](https://dev.mysql.com/downloads/installer/)

### Step 1: Clone the Repository

To run the CookBook project locally, start by cloning the repository:

```bash
git clone https://github.com/your-username/cookbook-social-media.git
cd cookbook-social-media
```

### Step 2: Set Up MySQL Database

1. Open your MySQL client (e.g., MySQL Workbench or the terminal).
2. Create a new database named `cookbook`:

```sql
CREATE DATABASE cookbook;
```

3. Make sure your MySQL user has the correct permissions to access the database. By default, the MySQL root user is used.

### Step 3: Configure Environment Variables

In the root folder of the project, create a `.env` file (if it doesn't already exist) and add the following:

```plaintext
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin123
DB_NAME=cookbook
JWT_SECRET=rykellebayot
```

- **DB_PASSWORD**: If your MySQL setup has a different password for the `root` user, update it here.
- **JWT_SECRET**: This is your secret key used for JWT authentication.

### Step 4: Install Dependencies

#### Backend Setup

Navigate to the backend folder, install the required dependencies, and start the server:

```bash
cd backend
npm install
npm run dev
```

This will start the backend server on `localhost:5000` and connect to your local MySQL database.

#### Frontend Setup

In a new terminal window, navigate to the frontend folder, install the necessary dependencies, and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

This will start the frontend and make it available on a local development server.

### Step 5: Access the App

Once both the backend and frontend are running, you can access the application by navigating to:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000) (API endpoints)

