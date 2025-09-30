📦 Nest.js REST API – Project

A fully functional REST API built with Nest.js, showcasing clean architecture, modular design, and production-ready features.
This project was developed as part of learning Nest.js, and serves as a portfolio example of backend development skills.

✨ Features

✅ Global API Prefix → Organized routes under /api

✅ CORS Protection → Restricted access to whitelisted domains only

✅ Rate Limiting → Prevents abuse with global and per-route throttling

✅ Custom Logger → Logs only relevant events (error, warn, log)

✅ DTOs & Validation → Enforces strict input validation using class-validator

✅ Database Integration (Prisma) → Persistent CRUD operations

🛠 Tech Stack

Backend Framework: Nest.js
(Node.js + TypeScript)

Database ORM: Prisma

Validation: Class-Validator

Security: NestJS Throttler
, CORS

🚀 Getting Started
Clone & Install
git clone https://github.com/raheel-zp/Nest-Js-Rest-Api.git
cd Nest-Js-Rest-Api
npm install

Environment Variables

Create a .env file in the root with your database connection:

DATABASE_URL="postgresql://user:password@localhost:5432/nestdb"

Run in Development
npm run start:dev

API available at:

http://localhost:3000/api

📂 Project Structure
src/
┣ main.ts # Entry point
┣ app.module.ts # Root module
┣ app.controller.ts # Example controller
┣ app.service.ts # Example service
┣ common/ # Guards, filters, interceptors
┣ dto/ # Data Transfer Objects
┣ modules/ # Feature modules (users, auth, etc.)
┗ prisma/ # Prisma client and schema

📡 Example API Endpoints
Users
GET /api/users
POST /api/users
GET /api/users/:id
PUT /api/users/:id
DELETE /api/users/:id
