const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname)));

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // In-memory SQLite database

// Create a table and insert some sample data
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS students (id TEXT PRIMARY KEY, name TEXT, level INTEGER, faculty TEXT, department TEXT, medicalCondition TEXT)");

  // Insert sample data
  const stmt = db.prepare("INSERT INTO students (id, name, level, faculty, department, medicalCondition) VALUES (?, ?, ?, ?, ?, ?)");
  
  // Sample data
  const sampleData = [
    { id: "22/CSCF308/063", name: "Bob Johnson", level: 600, faculty: "Engineering", department: "Mechanical Engineering", medicalCondition: "Headache" },
    { id: "22/CSCF308/064", name: "Emily Davis", level: 500, faculty: "Arts", department: "English", medicalCondition: "Asthma" },
    { id: "22/CSCF308/065", name: "Michael Wilson", level: 600, faculty: "Engineering", department: "Electrical Engineering", medicalCondition: "Sprained Ankle" },
    { id: "22/CSCF308/066", name: "Sarah Brown", level: 700, faculty: "Science", department: "Chemistry", medicalCondition: "Common Cold" },
    { id: "22/CSCF308/067", name: "David Lee", level: 400, faculty: "Social Sciences", department: "Psychology", medicalCondition: "Anxiety" },
    { id: "22/CSCF308/068", name: "Jessica White", level: 800, faculty: "Business", department: "Finance", medicalCondition: "Food Poisoning" },
    { id: "22/CSCF308/069", name: "Ryan Taylor", level: 600, faculty: "Engineering", department: "Civil Engineering", medicalCondition: "Migraine" },
    { id: "22/CSCF308/070", name: "Laura Martinez", level: 500, faculty: "Arts", department: "Music", medicalCondition: "Sore Throat" },
  ];

  sampleData.forEach(data => {
    stmt.run(data.id, data.name, data.level, data.faculty, data.department, data.medicalCondition);
  });
  
  stmt.finalize();
});

// Endpoint to fetch student records
app.get('/api/students', (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      console.error('Error querying database:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(rows);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
