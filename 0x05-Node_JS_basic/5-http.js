const http = require('http');
const students = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    /* const data = await students(db);
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${data.total}\n`);
    res.write(`Number of students in CS: ${data.fields.CS.length}. List: ${data.fields.CS}\n`);
    res.write(`Number of students in SWE: ${data.fields.SWE.length}. List: ${data.fields.SWE}`);
    res.end(); */
    res.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      let content = '';
      res.write(`Number of students: ${data.total}\n`);
      for (const field in data.fields) {
        if (data.fields[`${field}`]) {
          content += (`Number of students in ${field}: ${data.fields[`${field}`].split(',').length}. List: ${data.fields[`${field}`]} \n`);
        }
      }
      res.write(content.trim());
      res.end();
    }).catch((err) => res.end(err.message));
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
