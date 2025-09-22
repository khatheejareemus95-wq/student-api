// server.js
app.post('/api/students', async (req, res) => {
try {
const { name, age, course, year, status } = req.body || {};


// required: name, course, year
if (!isNonEmptyString(name) || !isNonEmptyString(course) || !isNonEmptyString(year)) {
return res.status(400).json({ error: 'name, course, and year are required and cannot be blank' });
}


// age must be a number > 0
const nAge = Number(age);
if (Number.isNaN(nAge) || nAge <= 0) {
return res.status(400).json({ error: 'age is required and must be a number greater than 0' });
}


const student = {
id: Date.now().toString(),
name: name.trim(),
age: nAge,
course: course.trim(),
year: year.trim(),
status: isNonEmptyString(status) ? status.trim() : 'active',
createdAt: new Date().toISOString(),
};


const students = await readStudents();
students.push(student);
await writeStudents(students);


// Return created resource
return res.status(201).json(student);
} catch (err) {
console.error('POST /api/students error:', err);
return res.status(500).json({ error: 'Internal server error' });
}
});


// GET /api/students
app.get('/api/students', async (req, res) => {
try {
const students = await readStudents();
return res.json(students);
} catch (err) {
console.error('GET /api/students error:', err);
return res.status(500).json({ error: 'Internal server error' });
}
});


// Basic health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));


// global error handler fallback
app.use((err, req, res, next) => {
console.error('Unhandled error:', err);
res.status(500).json({ error: 'Internal server error' });
});


const PORT = process.env.PORT || 3000;
ensureDataFile().then(() => {
app.listen(PORT, () => console.log(`Student API listening on port ${PORT}`));
}).catch(err => {
console.error('Failed to start server:', err);
process.exit(1);
});