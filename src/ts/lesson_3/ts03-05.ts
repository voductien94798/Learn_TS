//Generics: kiểu dữ liệu mà có nhận tham số và trả về kiểu dữ liệu tương ứng.
// Gennerics type là việc cho phép truyền một type và một component (class,interface,function) như một tham số, cho phép
// - type of lấy tất cả các key trong  component (giống với Object.key trong js )
interface List<T> {
  length: number;
  [index: number]: T;
}
const numberList1: List<number> = [1, 2, 3];
const wordList: List<string> = ['easy', 'frontend'];
numberList1.length;
interface Student77 {
  id: number;
  name: string;
}
const studentListt: List<Student77> = [{ id: 1, name: 'tien' }];
//key of
type StudentKeys = keyof Student77;
const keys: StudentKeys = 'id';
//typeof operator
console.log(typeof window !== 'undefined'); // check thử có đang ở client không
//mapped types
//Dùng index signature để định nghĩa kiểu dữ liệu có props lấy từ kiểu dữ liệu khác.
interface Student88 {
  id: number;
  name: string;
}
type MappedTypes = {
  [Key in keyof Student88]: boolean;
};
