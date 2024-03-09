/*
1. tạo mạng : 
    cách tạo 
    cách dùng , tại sao dùng 
    kiểm tra data type
*/

// var languages = ["js", "php", "Ruby"];

// làm việc với mảng basic
// var languages = ["js", "php", "Ruby"];
/*
1. toString() => chuyển sang chuỗi
2. join() => 
3.pop => xóa cuối mảng
4.push
5.shift
6.unShift
*/
// function getLastElement(array) {
//   var value = array.pop();
// }

// // Ví dụ sử dụng
// function getLastElement(array) {
//   var newArr = [...array];
//   var value = newArr.pop();
//   return value;
// }

// var animals = ["Monkey", "Tiger", "Elephant"];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

/////////////////// 9/03/2024
/**
 * forEach()
 * every
 * some
 * find
 * filter
 * map
 * reduce
 */

// const sports = [
//   {
//     name: "Bóng rổ",
//     like: 6,
//   },
//   {
//     name: "Bơi lội",
//     like: 5,
//   },
//   {
//     name: "Bóng đá",
//     like: 10,
//   },
// ];

// function getMostFavoriteSport(sports) {
//   return sports.filter(function (item) {
//     return item.like > 5;
//   });
// }

// // Kỳ vọng
// console.log(getMostFavoriteSport(sports));
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// var array = [[1, 2], 3, 4, [5, 6, [7, 8]], 9];
// // var newArr = array.reduce(function (a, b) {
// //   return a.concat(b);
// // });
// var newArr = array.flat();

// console.log(newArr);

///bai tap moi
var watchList = [
  {
    Title: "Inception",
    Year: "2010",
    Rated: "PG-13",
    Released: "16 Jul 2010",
    Runtime: "148 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer: "Christopher Nolan",
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    Plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    Language: "English, Japanese, French",
    Country: "USA, UK",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
    imdbID: "tt1375666",
    Type: "movie",
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Rated: "PG-13",
    Released: "07 Nov 2014",
    Runtime: "169 min",
    Genre: "Adventure, Drama, Sci-Fi",
    Director: "Christopher Nolan",
    Writer: "Jonathan Nolan, Christopher Nolan",
    Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    Language: "English",
    Country: "USA, UK",
    imdbRating: "8.6",
    imdbVotes: "910,366",
    imdbID: "tt0816692",
    Type: "movie",
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Rated: "PG-13",
    Released: "18 Jul 2008",
    Runtime: "152 min",
    Genre: "Action, Adventure, Crime",
    Director: "Christopher Nolan",
    Writer:
      "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    Language: "English, Mandarin",
    Country: "USA, UK",
    imdbRating: "9.0",
    imdbVotes: "1,652,832",
    imdbID: "tt0468569",
    Type: "movie",
  },
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    imdbRating: "8.3",
    imdbVotes: "972,584",
    imdbID: "tt0372784",
    Type: "movie",
  },
  {
    Title: "Avatar",
    Year: "2009",
    Rated: "PG-13",
    Released: "18 Dec 2009",
    Runtime: "162 min",
    Genre: "Action, Adventure, Fantasy",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    Plot: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    Language: "English, Spanish",
    Country: "USA, UK",
    imdbRating: "7.9",
    imdbVotes: "876,575",
    imdbID: "tt0499549",
    Type: "movie",
  },
];

function calculateRating(watchList) {
  var author = watchList.filter(function (film) {
    return film.Director === "Christopher Nolan";
  });

  var avg = author.reduce(function (total, curr) {
    return total + +curr.imdbRating;
  }, 0);
  return avg / author.length;
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

///create reduce

Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i, this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
var totalNumber = numbers.reduce2(function (total, number) {
  return total + number;
}, 10);

console.log(totalNumber);

///////////asfdsafdasfsafdaasfasdf
function arrToObj(arr) {
  var result = arr.reduce(function (obj, value) {
    return Object.assign({ [value[0]]: value[1] }, obj);
  }, {});
  return result;
}

// Expected results:
var arr = [
  ["name", "Sơn Đặng"],
  ["age", 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
