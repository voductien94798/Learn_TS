//primitive: number, boolean, string, null, undefined, symbol
//reference: array, object. Funtion
//có các kiểu dữ liệu khác như: any, unknown, void, never
//literal types là chỉ định một giá trị cụ thể làm kiểu dữ liệu
let count2: 1;
//any
let count1: any = 5;
count1 = 'five';
// với các kiểu dữ liệu đơn giản như number, boolean, string thì không cần khai báo ts cũng tự hiểu

// dùng để chỉ đọc as const
const student2 = {
  id: 1,
  name: 'tien',
} as const;
