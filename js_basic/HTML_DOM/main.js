// document.write("Hello");
//innerText, textContent

//getter
//setter

//innerHTML, outerHTML

////ly thuyet
// var headingEl = document.querySelector(".heading");

// headingEl.innerText = "New heading";

// console.log(headingEl.innerText);
// console.log(headingEl.textContent);
const box = document.querySelector(".box");

box.innerHTML = "<h1>hello</h1>";

//bai 2
var courses = ["HTML & CSS", "Javascript", "PHP", "Java"];
const ul = document.querySelector(".courses-list");
function render(courses) {
  var arr = courses
    .map(function (item) {
      return `<li>${item}</li>`;
    })
    .join("");
  ul.innerHTML = arr;
}

render(courses);

///4.Node properties

//5.Dom Css
Object.assign(box.style, {
  width: "100px",
  height: "100px",
  background: "red",
});

//6.ClassList property(add, remove , contain , toggle)
console.log(box.classList);

//7. DOM events
//VD trong thực tế
// 1.input select
// 2.keyup , keydown
// 3. preventDefault, stopPropagation

var inputEl = document.querySelector('input[type="text"');
var inputCheck = document.querySelector('input[type="checkbox"');

inputEl.onchange = function (e) {
  console.log(e.target.value);
};

inputCheck.onchange = function (e) {
  console.log(e.target.checked);
};

//8. Event listener

/// exercise
var btn = document.querySelector(".btn    ");

var arr = ["red", "blue", "green"]        ;
var index = 0;

btn.addEventListener("click",     function () {
  btn.style.color      = `${arr[index]}`;
  index++;
  if (index >= arr.length) {
    index = 0;
  }
});
setTimeout(() => {
  arr.filter((item) => {
    return item !== "blue";
  });
}, 3000);
