# Indo Japan Language School - Backend API

Lightweight Node.js Express REST API supporting the Indo Japan Language School portal.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Run the Server
```bash
# Production mode
npm start

# Development mode (with file watcher)
npm run dev
```

The server listens on **`http://localhost:5000`**.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API status and available endpoints summary |
| `GET` | `/api/health` | Health check and server timestamp |
| `GET` | `/api/content` | Full institutional content (JLPT levels, intakes, contact info) |
| `GET` | `/api/content/jlpt` | Syllabi and hours for JLPT N5 to N1 |
| `GET` | `/api/content/intakes` | Timelines and deadlines for April, July, October & January |
| `GET` | `/api/content/contact` | Jalandhar center phone numbers, emails, and operating hours |
| `POST` | `/api/enquiries` | Submit student callback request or inquiry |
| `GET` | `/api/enquiries` | View logged student inquiries |
