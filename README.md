
# 🛒 E-commerce Website (Frontend + Backend)

This is a complete MERN-style e-commerce platform with a React + Vite + Tailwind frontend and a Node.js + Express backend.

---

## 📁 Folder Structure

```
ecommerce_project/
├── backend/Shopify-E-commerce-Backend-main/
└── frontend/E-commerce-Website-Frontend-main/
```

---

## ⚙️ Backend Setup (Node.js + Express)

### 📌 Requirements
- Node.js (v16+ recommended)
- npm

### 🚀 Getting Started

```bash
cd backend/Shopify-E-commerce-Backend-main

# Install dependencies
npm install

# Start server
node index.js
```

The server should start on default port (likely 3000 or 5000). You can modify this in `index.js`.

---

## 💻 Frontend Setup (React + Vite + Tailwind)

### 📌 Requirements
- Node.js
- npm

### 🚀 Getting Started

```bash
cd frontend/E-commerce-Website-Frontend-main

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173` by default.

---

## 🔗 Connecting Frontend & Backend

1. Make sure the backend is running.
2. Update any API URLs in the frontend (`src` folder) to point to your backend, e.g., `http://localhost:5000/api/...`.

---

## 🧪 Testing

You can test the flow by:
- Visiting `http://localhost:5173` (frontend)
- Making sure product listings, cart, and checkout functions communicate with backend APIs.

---

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **API Routing:** RESTful routes

