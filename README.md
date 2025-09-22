# Kalvium Student Management API

This project is a simple backend API for managing student records.  
Built with **Node.js** and **Express**, deployed on **Render**.  
It supports adding new students and fetching the complete student list.

---

## 📌 Features
- **Add Student (POST /api/students)**
  - Accepts `name`, `age`, `course`, and `year` in JSON.
  - Generates a unique `id` automatically.
  - Sets `status` to `"active"` by default if not provided.
  - Validates required fields and ensures `age > 0`.
  - Saves student records to `data/students.json`.

- **Get All Students (GET /api/students)**
  - Returns all student records as a JSON array.
  - Always reflects the current state of `students.json`.

- **Other**
  - Handles corrupted `students.json` gracefully.
  - CORS enabled for frontend integration.

---

## 🚀 Running the Project Locally

1. **Clone this repo**
   ```bash
   git clone https://github.com/<your-username>/student-api-yourname.git
   cd student-api-yourname
2. **Install dependencies**

npm install


3. **Start server**

npm start


Server will run at:
👉 http://localhost:3000 (or the port set in PORT env variable)