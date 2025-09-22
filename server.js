// server.js (paste full code given earlier)
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors()); // allow all origins for assignment
app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const STUDENTS_FILE = path.join(DATA_DIR, 'students.json');

// ensure data dir/file, read/write helpers (see earlier full code sample)...

app.get("/", (req, res) => {
  res.send("🎉 Student API is running! Use /api/students to fetch students.");
});

app.post('/api/students', async (req, res) => { /* validate and append student */ });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
