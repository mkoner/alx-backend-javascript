export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) {
    return list.filter((stu) => stu.location === city);
  }

  return [];
}
