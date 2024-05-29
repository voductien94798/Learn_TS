//ENUM
//Tập hợp các giá trị cùng nhóm.
//Dễ dàng quản lý và truy xuất.
//Sử dụng cho data một chiều, định nghĩa enum --> rồi sử dụng.
enum Statuss {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}

// enum Statuss {
//   PENDING = 3, // 3
//   IN_PROGRESS, // 4
//   DONE, // 5
//   CANCELLED, // 6
// }
// enum Statuss {
//   PENDING = 3,
//   IN_PROGRESS = 5,
//   DONE = 8,
//   CANCELLED = 10,
// }

// can assign any number to your enum variable
const stats1: Statuss = Statuss.PENDING;
const stats2: Statuss = 1;
const stats3: Statuss = -1;
// number enum --> support reverse mapping
console.log(Statuss[0]); // 'PENDING'
console.log(Statuss['DONE']); // 2
//String enum
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});
// trường hợp parse từ dữ liếu sang enum thì nên sài type nhé
