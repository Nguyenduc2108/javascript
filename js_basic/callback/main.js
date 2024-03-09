/*
callback : hàm được chuyền qua đối số

*/

/// Callback part 2
// Array.prototype.map2 = function (callback) {
//   var output = [];
//   var arrayLength = this.length;
//   for (let i = 0; i < arrayLength; i++) {
//     var result = callback(this[i], i);
//     output.push(result);
//   }
//   return output;
// };

// var courses = ["Js", "Php", "Ruby"];

// var htmls = courses.map2(function (course) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls);

//foeEach2
// Array.prototype.forEach2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     var result = callback(this[i]);
//   }
//   return result;
// };

// courses.forEach2(function (item) {
//   console.log(item);
// });

//reduce2
// Array.prototype.reduce2 = function (callback, result) {
//   let i = 0;
//   if (arguments.length < 2) {
//     i = 1;
//     result = this[0];
//   }
//   for (; i < this.length; i++) {
//     var result = callback(result, this[i], i, this);
//   }
//   return result;
// };

// var ap = courses.reduce2(function (prev, curr) {
//   return prev + curr;
// });

// console.log(ap);

//find
// Array.prototype.find2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       return this[i];
//     }
//   }
// };

// courses.find(function (item) {
//   console.log(item);
// });

// //filter2
// Array.prototype.filter2 = function (callback) {
//   var output = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       output.push(this[i]);
//     }
//   }
//   return output;
// };

// courses.filter2(function (item) {
//   console.log(item);
// });

// //every2
// Array.prototype.every2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i)) {
//       return true;
//     }
//   }
//   return false;
// };

// courses.every2(function (item) {
//   console.log(item);
// });

// //some2
// Array.prototype.some2 = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i)) {
//       return true;
//     }
//   }
//   return false;
// };

// courses.some2(function (item) {
//   console.log(item);
// });
