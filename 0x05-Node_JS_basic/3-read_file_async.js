const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    const fields = {};
    let total = 0;
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const students = data.split('\n');
      students.shift();
      students.forEach((student) => {
        if (student.split(',').length === 4) {
          const field = student.split(',')[3].trim();
          total += 1;
          if (field in fields) {
            fields[`${field}`] += `, ${student.split(',')[0]}`;
          } else {
            fields[`${field}`] = '';
            fields[`${field}`] += `${student.split(',')[0]}`;
          }
        }
      });
      console.log(`Number of students: ${total}`);
      for (const field in fields) {
        if (fields[`${field}`]) {
          console.log(`Number of students in ${field}: ${fields[`${field}`].split(',').length}. List: ${fields[`${field}`]}`);
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
