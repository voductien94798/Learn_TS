interface Student1 {
  id: String;
  namee: String;
  gender: 'male' | 'female';
  age: number;
}
const bob3: Student1 = {
  id: '',
  namee: 'tien',
  gender: 'female',
  age: 23,
};
const bob4: Student1 = {
  id: '',
  namee: 'tien',
  gender: 'female',
  age: 23,
};

//destructuring
const { id, namee, gender, age } = bob3;

//rest
const { id, ...rest } = bob4;
// spread clone
const bob2 = {
  ...bob3,
  name: 'tiendeptrai',
};

//rest vs spread
// đều là 3 chấm
// rest là gom
// spread là tách
