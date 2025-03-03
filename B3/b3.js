let choice = +prompt("Bạn muốn quy đổi từ 1.VNĐ -> USD hay 2.USD -> VNĐ?");
switch(choice){
    case 1:
        let moneyV1 = +prompt("Mời bạn nhập số tiền");
        let moneyU1 = moneyV1 / 23000;
        alert(`${moneyV1}VNĐ = ${moneyU1}USD`);
        break;
    case 2:
        let moneyU2 = +prompt("Mời bạn nhập số tiền");
        let moneyV2 = moneyU2 * 23000;
        alert(` ${moneyU2}USD = ${moneyV2}VNĐ `);
        break;
    default:
        alert(`Lựa chọn không hợp lệ! Vui lòng chọn 1 hoặc 2!`);
        break;
}