# Aabidmustafa-workspace

This repository contains the codebase for the Aabidmustafa project, structured as a monorepo with separate frontend and backend applications.

## Tech Stack
- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (via Mongoose)

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (running locally or a cloud URI)

### Frontend Setup
1. Navigate to the frontend directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Access the app at `http://localhost:3000`

### Backend Setup
1. Navigate to the backend directory: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file in the `server` directory and configure `PORT` and `MONGO_URI`. (See `.env.example` if available, or use defaults `PORT=5000`, `MONGO_URI=mongodb://localhost:27017/aabidmustafa-dev`)
4. Start the development server: `npm run dev`
5. The API will be available at `http://localhost:5000`
