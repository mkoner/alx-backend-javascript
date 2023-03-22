const fs = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
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
            fields[`${field}`].push(`${student.split(',')[0]}`);
          } else {
            fields[`${field}`] = [];
            fields[`${field}`].push(`${student.split(',')[0]}`);
          }
        }
      });
      resolve(fields);
    }
  });
});

module.exports = readDatabase;
