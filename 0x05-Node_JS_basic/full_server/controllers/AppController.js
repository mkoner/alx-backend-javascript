export default class AppController {
  static getHomepage(request, response) {
    response.write('Hello Holberton School!');
    response.sendStatus(200);
  }
}
