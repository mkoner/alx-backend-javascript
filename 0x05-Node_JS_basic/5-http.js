const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const data = await students(process.argv[2]);
    res.write(`Number of students: ${data.total}\n`);
    res.write(`Number of students in CS: ${data.fields.CS.split(',').length}. List: ${data.fields.CS}\n`);
    res.write(`Number of students in SWE: ${data.fields.SWE.split(',').length}. List: ${data.fields.SWE}`);
    res.end();
    /* students(process.argv[2]).then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.total}\n`);
      res.write(`Number of students in CS: ${data.fields.CS.split(',').length}. List: ${data.fields.CS}\n`);
      res.write(`Number of students in SWE: ${data.fields.SWE.split(',').length}. List: ${data.fields.SWE}`);
      res.end();
    }).catch((err) => res.end(err.message)); */
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
