interface Student3 {
  id: number;
  name: String;
  gender: 'male' | 'female';
  age: number;
}

function findStudentById(studentList: Student3[], studentId: number): Student3 | undefined {
  if (studentList.length === 0) {
    return undefined;
  }
  return studentList.find((x) => x.id === studentId);
}

const studentList: Student3[] = [
  {
    id: 1,
    name: 'alice',
    gender: 'female',
    age: 20,
  },
  {
    id: 2,
    name: 'alice2',
    gender: 'male',
    age: 2,
  },
];
const bob1 = findStudentById(studentList, 3);
console.log(bob);

if (bob) {
  console.log(bob.name);
}
