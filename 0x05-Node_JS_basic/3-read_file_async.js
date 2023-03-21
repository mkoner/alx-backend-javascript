const fs = require('fs');

const printStudents = (students) => {
  students.forEach((student) => {
    if (student !== students[`${students.length - 1}`]) {
      process.stdout.write(`${student}, `);
    } else {
      process.stdout.write(`${student}`);
    }
  });
  process.stdout.write('\n');
};

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    const fields = {};
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const students = data.split('\n');
      students.shift();
      console.log(`Number of students: ${students.length}`);
      students.forEach((student) => {
        const field = student.split(',')[3].trim();
        if (field in fields) {
          fields[`${field}`].push(student.split(',')[0]);
        } else {
          fields[`${field}`] = [];
          fields[`${field}`].push(student.split(',')[0]);
        }
      });

      for (const field in fields) {
        if (fields[`${field}`]) {
          process.stdout.write(`Number of students in ${field}: ${fields[`${field}`].length}. List: `);
          printStudents(fields[`${field}`]);
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
