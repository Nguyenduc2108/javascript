// for (var i = 1; i <= 1000; i++) {
//   console.log(i);
// }

// function getRandNumbers(min, max, length) {
//   var arr = [];
//   for (var i = 0; i <= length; i++) {
//     arr.push(Math.random() * (max - min) + min);
//   }
//   return arr;
// }

// console.log(getRandNumbers(1, 10, 3));

// function getTotal(arr) {
//   var total = 0;
//   for (var i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }

// console.log(getTotal([1, 2, 3]));

// // Expected results
// getTotal([1, 2, 3]); // Output: 6
// getTotal([4, 5, -3]); // Output: 6
// getTotal([4, 5, 3, 5]); // Output: 17

// var orders = [
//   {
//     name: "Khóa học HTML - CSS Pro",
//     price: 3000000,
//   },
//   {
//     name: "Khóa học Javascript Pro",
//     price: 2500000,
//   },
//   {
//     name: "Khóa học React Pro",
//     price: 3200000,
//   },
// ];

// function getTotal(orders) {
//   var total = 0;
//   var ordersLength = orders.length;
//   for (var i = 0; i < ordersLength; i++) {
//     total += orders[i].price;
//   }
//   return total;
// }

// // Expected results:
// console.log(getTotal(orders)); // Output: 8700000

/// for in
// function run(object) {
//   var array = [];

//   for (var key in object) {
//     array.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
//   }

//   return array;
// }

// // Expected results:
// console.log(run({ name: "Nguyen Van A", age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]

// object = {
//   name: "Nguyen Van A",
//   age: 16,
// };
