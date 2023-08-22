const fs = require('fs');

const countStudents = (path) => {
  const fields = {};

  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n');
  students.shift();
  console.log(`Number of students: ${students.length}`);
  students.forEach((student) => {
    if (student.split(',').length === 4) {
      const field = student.split(',')[3].trim();
      if (field in fields) {
        fields[`${field}`] += `, ${student.split(',')[0]}`;
      } else {
        fields[`${field}`] = '';
        fields[`${field}`] += `${student.split(',')[0]}`;
      }
    }
  });
  for (const field in fields) {
    if (fields[`${field}`]) {
      console.log(`Number of students in ${field}: ${fields[`${field}`].split(',').length}. List: ${fields[`${field}`]}`);
    }
  }
};

module.exports = countStudents;
