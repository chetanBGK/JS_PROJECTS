let number1 = 10;
let number2 = "20";

// function display(number1, number2) {
//   console.log(`Sum is ${number1 + number2}`);
// }
// display("100", 200);

// var result = function display(number1, number2) {
//   return number1 + number2;
// };

// console.log(result(100, 200));
// console.log(typeof result);

// display(100);

// var result = (number1, number2) => number1 + number2;

// console.log(`Using arrow function ${result(100, 200)}`);

let result = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      console.log(number1 + number2);

      break;
    case "-":
      // logic
      break;
  }
};

result(10, 20, "+");

// Immediately Invoked Function Expression
// (function (num1, num2) {
//   console.log(num1 + num2);
// })(10, 20);
// function display(number1) {
//   return number1 * number1;
// }

// // console.log(`Square of number is ${display(20)}`);
// let squareNumber = display(20);
// console.log(squareNumber);

// let squareNumber = function display(number1) {
//   return number1 * number1;
// };

// console.log(squareNumber(20));

// let squareNumber = function (number1) {
//   console.log("Anonymous function");

//   return number1 * number1;
// };

// console.log(squareNumber(20));

// (function () {
//   console.log(Date());
// })();

// let squareNumber = (number1) => number1 * number1;

// console.log(squareNumber(20));
