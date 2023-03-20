/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsToUpdate = list.filter((student) => student.location === city);
  return studentsToUpdate.map((student) => {
    const grade = newGrades.filter((gra) => gra.studentId === student.id);
    if (grade.length === 1) {
      student.grade = grade[0].grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
