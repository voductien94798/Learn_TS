interface Student {
  id: String;
  name: String;
  gender: 'male' | 'female';
  age: number;
}
const bob: Student = {
  id: '',
  name: '',
  gender: 'female',
  age: 23,
};
function findStudent(studentList: Student[], studentId: String) {
  if (studentList.length === 0) {
    return undefined;
  }
  studentList.find((x) => x.age);
}
