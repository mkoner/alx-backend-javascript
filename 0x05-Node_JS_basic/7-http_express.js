const express = require('express');
const fs = require('fs');
const students = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('This is the list of our students\n');
  students(process.argv[2]).then((data) => {
    res.write(`Number of students: ${data.total}\n`);
    res.write(`Number of students in CS: ${data.fields.CS.split(',').length}. List: ${data.fields.CS}\n`);
    res.write(`Number of students in SWE: ${data.fields.SWE.split(',').length}. List: ${data.fields.SWE}`);
    res.end();
  }).catch((err) => res.end(err.message));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
