const fs = require('fs');

async function readDatabase(path) {
  let data;
  const fields = {};
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
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
  }
  return fields;
}

module.exports = readDatabase;
