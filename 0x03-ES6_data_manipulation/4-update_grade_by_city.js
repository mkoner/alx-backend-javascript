export default function updateStudentGradeByCity(list, city, newGrades) {
  const studentsToUpdate = Array.isArray(list) ? list.filter((student) => student.location === city) : [];
  return studentsToUpdate.map((student) => {
    const grade = Array.isArray(newGrades) ? newGrades.filter((gra) => gra.studentId === student.id) : null;
    grade.length === 1 ? student.grade = grade[0].grade : student.grade = 'N/A';
    return student;
  });
}
