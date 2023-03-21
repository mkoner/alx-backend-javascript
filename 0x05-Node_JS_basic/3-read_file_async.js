const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    const fields = {};
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      console.log('This is the list of our students');
      const students = data.split('\n');
      students.shift();
      console.log(`Number of students: ${students.length}`);
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

      for (const field in fields) {
        if (fields[`${field}`]) {
          console.log(`Number of students in ${field}: ${fields[`${field}`].slice(0, -2).split(',').length}. List: ${fields[`${field}`].slice(0, -2)}`);
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
