export default function getStudentIdsSum(list) {
  const ids = Array.isArray(list) ? list.map((stu) => stu.id) : [];

  return ids.reduce((acumulator, curValue) => acumulator + curValue, 0);
}
