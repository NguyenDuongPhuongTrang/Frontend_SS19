let result = "javascript" + 5;
// Kết quả: "javascript5"
// Giải thích: Toán tử + khi áp dụng với một chuỗi sẽ thực hiện phép nối chuỗi, không phải phép cộng số học.

let result = "javascript" - 1;
// Kết quả: NaN
// Giải thích: Phép trừ không thể áp dụng với chuỗi không phải số, nên JavaScript trả về NaN (Not-a-Number).

let result = "3" + 2;
// Kết quả: "32"
// Giải thích: Toán tử + ưu tiên nối chuỗi nếu có ít nhất một toán hạng là chuỗi.

let result = "5" - 4;
// Kết quả: 1
// Giải thích: "5" có giá trị là số và có thể thành số nên có thể thực hiện phép trừ.

let result = isNaN("123");
// Kết quả: false
// Giải thích: "123" có thể chuyển thành số hợp lệ nên isNaN("123") trả về false.

let result = isNaN("hello");
// Kết quả: true
// Giải thích: "hello" không thể chuyển thành số nên isNaN("hello") trả về true.

let result = Number.isNaN("123");
// Kết quả: false
// Giải thích: giá trị của chuỗi "123" được truyền vào không phải NaN nên kết quả là false

let result = Number.isNaN(NaN);
// Kết quả: true
// Giải thích: NaN đúng là NaN, nên Number.isNaN(NaN) trả về true.