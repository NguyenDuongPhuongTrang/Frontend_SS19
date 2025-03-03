let string = prompt("Mời bạn nhập chuỗi");
if(string.match(" ")){
    alert(`Chuỗi ${string} có chứa dấu cách`);
}else{
    alert(`Chuỗi ${string} không chứa dấu cách`);
}