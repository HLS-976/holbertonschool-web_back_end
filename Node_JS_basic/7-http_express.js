const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const process = require('process');

const app = express();
const port = 1245;

const countStudents = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    if (lines.length <= 1) return 'Number of students: 0';

    const students = lines.slice(1);
    const fields = {};

    students.forEach((student) => {
      const [firstName, , , field] = student.split(',');
      fields[field] = fields[field] || [];
      fields[field].push(firstName);
    });

    let result = `Number of students: ${students.length}\n`;
    Object.entries(fields).forEach(([field, names]) => {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    if (!databasePath) throw new Error('Database path not provided');

    const absolutePath = path.resolve(databasePath);
    const studentsInfo = await countStudents(absolutePath);
    res.type('text').send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.type('text').status(500).send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
