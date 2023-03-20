interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any,
}

interface Directors extends Teacher {
  numberOfReports: number,
}

function printTeacher(firstName: string, lastName: string): String {
  return `${firstName.slice(0,1)}. ${lastName}}`;
}

interface ConstructorInterface {
  firstName: string,
  lastName: string,
}

interface ClassInterface {
  firstName: string,
  lastName: string,
  workOnHomework: () => string,
  displayName: () => string,
}

class StudentClass implements ClassInterface{
  firstName: string;
  lastName: string;

  constructor(constructor: ConstructorInterface) {
    this.firstName = constructor.firstName;
    this.lastName = constructor.lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
