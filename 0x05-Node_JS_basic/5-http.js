const http = require('http');
const fs = require('fs');

const port = 1245;

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    const fields = {};
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const students = data.split('\n');
      students.shift();
      students.forEach((student) => {
        if (student.split(',').length === 4) {
          const field = student.split(',')[3].trim();
          if (field in fields) {
            fields[`${field}`] += `${student.split(',')[0]}, `;
          } else {
            fields[`${field}`] = '';
            fields[`${field}`] += `${student.split(',')[0]}, `;
          }
        }
      });
      resolve({ students, fields });
    }
  });
});

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const data = await countStudents(process.argv[2]);
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${data.students.length} \n`);
    for (const field in data.fields) {
      if (data.fields[`${field}`]) {
        res.write(`Number of students in ${field}: ${data.fields[`${field}`].slice(0, -2).split(',').length}. List: ${data.fields[`${field}`].slice(0, -2)} \n`);
      }
    }
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server running at port ${port}/`);
});

module.exports = app;
