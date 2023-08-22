const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  const db = process.argv[2] ? process.argv[2] : '';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let content = '';
    const data = await students(db);
    content += 'This is the list of our students\n';
    content += `Number of students: ${data.total} \n`;
    for (const field in data.fields) {
      if (data.fields[`${field}`]) {
        content += `Number of students in ${field}: ${data.fields[`${field}`].split(',').length}. List: ${data.fields[`${field}`]} \n`;
      }
    }
    res.end(content.trim());
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
