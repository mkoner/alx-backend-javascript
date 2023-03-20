interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
    firstName: "Adama",
    lastName: "Kanté",
    age: 23,
    location: "Abidjan"
}

const student2: Student = {
    firstName: "Alex",
    lastName: "Ouraga",
    age: 39,
    location: "Abidjan"
}

const studentsList: Student[] = [
    student1,
    student2,
]

const table = document.createElement('table');
document.body.appendChild(table);

const theader = table.createTHead();
const hrow = theader.insertRow();
const th1 = document.createElement('th')
const th2 = document.createElement('th')
th1.innerHTML = 'Name';
th2.innerHTML = 'Location';
hrow.appendChild(th1);
hrow.appendChild(th2);

const tbody =  table.createTBody();
for (const student of studentsList) {
    let trow = tbody.insertRow();
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
    trow.appendChild(td1);
    trow.appendChild(td2);
}
