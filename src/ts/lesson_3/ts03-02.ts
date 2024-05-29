//type alias: cách đặt lại tên cho kiểu dữ liệu mới
type StudentName = String;
//object type
type Student5 = {
  readonly id: number; // chri đọc k đc update
  name: String;
  age?: number; // optional
};
//union type
type Status = 'active' | 'unactive';
type Status1 = number | string;
//intersection type gôm nhiều lại
interface BPT {
  name: String;
  credit: number;
}
interface Contact {
  email: String;
  phone: number;
}
type Customer = BPT & Contact;
//add new props. Interface đc còn type thì không
interface A {
  id: number;
  name: string;
}
interface A {
  age?: number;
}
type A1 = {
  id: number;
  name: string;
};
type A1 = {
  id: number;
  name: string;
}; // not works
// cách đặt tên interface là sử dụng pascalCase và k sử dụng I
