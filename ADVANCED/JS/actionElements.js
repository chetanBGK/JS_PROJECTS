// document.getElementById("h1Tag").innerText = "Text changed in h1 tag";

// console.log(document.getElementById("h1Tag").innerText);
// console.log(document.getElementsByClassName("h1Tag"));
// console.log(document.getElementsByClassName("h1Tag")[2]);

// console.log(document.getElementsByClassName("h1Tag")[2].innerText);

// console.log(document.querySelector("#h2Tag").innerText);
// let h1Tags = document.querySelectorAll(".h1Tag");
// console.log(h1Tags[2].innerText);

//To get only content
// console.log(document.querySelectorAll(".h1Tag")[0].innerText);
// console.log(document.querySelector("#buttonTag").innerText);
// //To get tag with content
// console.log(document.querySelector("#divTag").innerHTML);

// let buttonValue = document.querySelector("#buttonTag");
// buttonValue.innerText = "button value changed";
// console.log(buttonValue.innerText);

// console.log(document.querySelector("#buttonTag").innerText);

// console.log(document.querySelector("#buttonTag").innerText);
//
// function performOperation(num1, num2, operator) {
//   console.log(eval(num1 + operator + num2));
//   //   ("10-20");
//   //   if (operator == "+") console.log(num1 + num2);
//   //   else if (operator == "-") console.log(num1 - num2);
//   //   else if (operator == "*") console.log(num1 * num2);
//   //   else console.log(num1 / num2);
// }

performOperation = (num1, num2, operator) =>
  console.log(eval(num1 + operator + num2));
