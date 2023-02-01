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
