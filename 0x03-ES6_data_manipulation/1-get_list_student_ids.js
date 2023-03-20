export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    return list.map((stu) => stu.id);
  }

  return [];
}
