# Snack des princes - Full Stack Website + Online Store

Modern restaurant website and ordering platform for **Snack des princes** (Massa, Morocco).

## Tech Stack

- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)

## Features

- Home page with hero section, highlights, and customer reviews
- Dynamic menu from backend (`GET /api/menu`)
- Cart system (add/update/remove)
- Checkout form and cash-on-delivery flow (`POST /api/order`)
- About page with story, hours, and embedded map
- Contact page with phone/location and contact form UI
- Orders listing endpoint (`GET /api/orders`)
- Auto-seeded menu data on first run

## Project Structure

- `frontend/` React client app
- `backend/` Express REST API

## Local Setup

### 1) Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend runs on `http://localhost:5000` by default.

### 2) Frontend

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Frontend runs on `http://localhost:5173` by default.

## API Endpoints

- `GET /api/menu` - get menu items
- `POST /api/order` - create a new order
- `GET /api/orders` - get all orders (admin use)

## Notes

- Ensure MongoDB is running locally or set a hosted `MONGO_URI`.
- Menu prices are stored in MAD.
- Payment method is set to **Cash on delivery** in checkout.
