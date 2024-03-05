/*
1. tạo mạng : 
    cách tạo 
    cách dùng , tại sao dùng 
    kiểm tra data type
*/

// var languages = ["js", "php", "Ruby"];

// làm việc với mảng basic
var languages = ["js", "php", "Ruby"];
/*
1. toString() => chuyển sang chuỗi
2. join() => 
3.pop => xóa cuối mảng
4.push
5.shift
6.unShift
*/
function getLastElement(array) {
  var value = array.pop();
}

// Ví dụ sử dụng
function getLastElement(array) {
  var newArr = [...array];
  var value = newArr.pop();
  return value;
}

var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']
