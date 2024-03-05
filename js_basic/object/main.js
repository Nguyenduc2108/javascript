// var myInfo = {
//   name: "vava",
//   age: 18,
//   address: "ha noi",
// };
// console.log(myInfo);

//Object constructor
function Use(firstName, lastName, avata) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avata = avata;
}

var author = new Use("Son", "Dang", "avata");
var user = new Use("vu", "Nguyen", "comment");

console.log(author);
console.log(user);

// object prototype

// Làm bài tại đây
var Student = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${firstName} ${lastName}`;
  };
};

// Ví dụ khi sử dụng
var student = new Student("Long", "Bui");

console.log(student.firstName); // 'Long'
console.log(student.lastName); // 'Bui'
console.log(student.getFullName()); // 'Long Bui'

//Object Date
function getNextYear() {
  var date = new Date();
  var year = date.getFullYear();
  var nextYear = year + 1;
  return nextYear;
}
console.log(getNextYear());

// Math Object

console.log(Math.floor(Math.random() * 10));

var ramdom = Math.floor(Math.random() * 10);

if (ramdom < 5) {
  // ti le 5 tren 100 => 5% trung
  console.log("Cuong hoa thanh cong!");
}

///
var getRandomItem = function (arr = [1, 2, 5, "a"]) {
  var item = Math.floor(Math.random() * arr.length);
  return arr[item];
};

console.log(getRandomItem());
