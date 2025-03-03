let letter = prompt("Nhập chữ cần kiểm tra");
let charSpecial = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

if (letter.match(/^[A-Za-z]$/)) {
    alert(`${letter} là chữ cái`);
} else if (letter.match(charSpecial)) {
    alert(`${letter} không phải là chữ cái`);
} else {
    alert(`${letter} không phải là chữ cái`);
}