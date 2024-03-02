// function showDialog() {
//   alert("lll");
// }

// showDialog();

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    myString += `${param} - `;
  }
  console.log(myString);
}

writeLog("Log 1", "Log 2", "Log 3");

var sum = function (a, b) {
  return a + b;
};

var result = sum(2, 8);
console.log(result);

function showMessage() {
  console.log("message 1");
}

function showMessage() {
  console.log("message 3");
}

function showMessage() {
  console.log("message 2");
}

showMessage();
