// mặc định return type
function sayHello() {
  console.log('hi easy frontend');
}
//explicit return type
function sum(a: number, b: number): number {
  return a + b;
}
// dùng ? Sau tên biến: có thể có hoặc không truyền, không truyền sẽ thành underfined
// function getLength(numberList?: number[] | undefined): number
function getLength(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// có thể sử dụng 1 giá trị mặc đình nếu không truyền
// function getLength(numberList?: number[]): number
function getLength(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// không thể nào vừa có ?(optional parameter) và default parameter
function getLength(numberList?: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// Function Overload
// function noop(): void
function noop() {
  return;
}
// function noop(): void
function noop();
// không thể nào vừa number vừa string oke
type NewType = number & string; // never
function fn(x: string | number) {
  if (typeof x === 'string') {
    // do something
  } else if (typeof x === 'number') {
    // do something else
  } else {
    x; // has type 'never'
  }
}
interface Student7 {
  id: number;
  name: string;
  age: number;
}
function createStudent({ id, name, age }: Student7) {
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
} as Student7);
