let a = +prompt("Nhập số a");
let b = +prompt("Nhập số b");
let c = +prompt("Nhập số c");

if(isNaN){
    alert(`Có một số không hợp lệ`);
}else{
    a > b && a > c ? alert(`${a} là số lớn nhất`) :
    b > a && b > c ? alert(`${b} là số lớn nhất`) : alert(`${c} là số lớn nhất`);
}

