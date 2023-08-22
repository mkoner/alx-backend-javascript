const readDatabase = require('../utils');

export default class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students\n');
    readDatabase('database.csv').then((data) => {
      for (const key in data) {
        if (data[`${key}`]) {
          response.write(`Number of students in ${key}: ${data[`${key}`].length}. List: ${data[`${key}`].join(', ')} \n`);
        }
      }
      response.status(200).end();
    }).catch((error) => {
      //response.sendStatus(500);
      response.write(error.message);
      response.status(500).end();
    });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      //response.sendStatus(200);
      response.write('Major parameter must be CS or SWE');
      response.status(500).end();
    }
    readDatabase('database.csv').then((data) => {
      //response.sendStatus(200);
      response.write(`List: ${data[`${major}`].join(', ')} \n`);
      response.status(200).end();
    }).catch((error) => {
      ////response.sendStatus(500);
      response.write(error.message);
      response.status(500).end();
    });
  }
}
