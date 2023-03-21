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

const countStudents = (path) => {
  const fields = {};

  try {
    const data = fs.readFileSync(path, 'utf8');
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
