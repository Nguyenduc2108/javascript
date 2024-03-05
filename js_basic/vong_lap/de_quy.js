// 1. Xác định điểm dừng
// 2. logic handle => tạo ra điểm dừng

// function deQuy() {}

// deQuy();

function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}

countDown(3);

function giaiThua(number) {
  if (number > 0) {
    return number * giaiThua(number - 1);
  }
  return 1;
}

giaiThua(6);
