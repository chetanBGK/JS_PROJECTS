// let fruits = ["Apple", "Mango", "Grapes", "Banana"];

// console.log(fruits);
// fruits[1] = "Jackfruit";
// console.log(fruits);

// console.log("Using for of");
// for (let item of fruits) {
//   console.log(item);
// }

// console.log("Using for in");

// for (let item in fruits) {
//   console.log(fruits[item]);
// }

// console.log("------Using forEach--------");

// let newArray = fruits.forEach((item) => {
//   return item;
// });

// console.log(newArray);

// console.log("---------Using map------------");
// let newArray2 = fruits.map((item) => {
//   return item;
// });

// console.log(newArray2);

// console.log("----------Modifying Array-----------");
// fruits.push("berry");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("berry");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// console.log(fruits.slice(1, 3));

// fruits.splice(1, 2, "Cherry", "blue berry", "green berry");
// console.log(fruits);

// let array1 = [1, 2, 3, 4, 5, 3, [10, 20, 30, 40, 50], 5, 3, "India", true];
// // console.log(typeof array1);
// console.log(array1);
// console.log(array1[3][2]);
// console.log(array1.indexOf(3));
// console.log(array1.lastIndexOf(3));
// console.log(array1.flat().includes(30));
// array1[0] = 100;
// console.log(array1);

// let numbsers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(numbsers);

// numbsers.push(200);
// console.log("After push ", numbsers);
// numbsers.pop();
// console.log("After pop ", numbsers);
// numbsers.shift();
// console.log("After shift ", numbsers);
// numbsers.unshift(111);
// console.log("After unshift ", numbsers);

// let numbsers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// numbsers.splice(start,delete count,elements);
// console.log(`Before splice ${numbsers}`);

// numbsers.splice(3,0, 120, 111, 222, 333);
// console.log(`AFter using splice ${numbsers}`);

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log("Using for of");

// for (let element of numbers) {
//   console.log(element);
// }

// console.log("Using for in");
// for (let i in numbers) {
//   console.log(numbers[i]);
// }

// let numbers = [10, 11, 22, 33, 44, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(divideByFive);

// console.log("Using map");

// let mapVariable = numbers.map((element, index, array) => {
//   return element * element;
// });
// console.log(mapVariable);

// // console.log("Using for each");

// let forEachVariable = numbers.forEach((element, index, array) => {
//   return element * element;
// });

// console.log(forEachVariable);

// let numbers = [10, 11, 22, 33, 44, 20, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// let filteredNumbers = numbers.filter((element, nextElement) => {
//   return element % 5 == 0;
// });

// console.log(filteredNumbers);
// console.log(numbers.sort());
// let sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(sortedNumbers);

// let mappedValues = numbers.map((element) => {
//   return element * element;
// });

// console.log("Mapped values");

// console.log(mappedValues);

// let numbers = [
//   10, 11, 22, 33, 44, 20, 10, 20, 30, 23, 12, 7, 8, 5, 40, 50, 60, 70, 80, 90,
//   100,
// ];

// console.log(
//   `Using sort ${numbers.sort(
//     (firstNumber, nextNumber) => firstNumber - nextNumber
//   )}`
// );

let numbersInText = [
  "ten",
  "eleven",
  "twenty-two",
  "thirty-three",
  "forty-four",
  "twenty",
  "ten",
  "twenty",
  "thirty",
  "twenty-three",
  "twelve",
  "seven",
  "eight",
  "five",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
  "one hundred",
];

// console.log(numbersInText.sort((a, b) => a.localeCompare(b)));

// let array1=[5,6,7,10,15]; input
// 25+100+225=350 O/P

// let numbers = [10, 11, 22, 33, 44, 20, 30, 23, 12, 7, 8, 5, 80, 90, 100];

// filter
// map
// reduce
// forEach
// let total = numbers
//   .filter((number) => number % 5 == 0)
//   .map((number) => number * number)
//   .reduce((fVal, nVal) => fVal + nVal);
// console.log(total);
// let total = numbers
//   .filter((number) => number % 5 == 0)
//   .map((number) => number * number)
//   .reduce((fVal, nVal) => fVal + nVal);

// console.log(total);

let names = [
  "Aarti Bhimrao Patil",
  "anjali Anil Kanase",
  "Chaitanya Raju Patil",
];

// console.log(names.filter((nam) => nam.toUpperCase().endsWith("PATIL")));

// let convertedCase = names.map((myname) => myname.toUpperCase());
// console.log(names.filter((myname) => myname.toUpperCase().startsWith("A")));

// console.log(convertedCase);

let numbers = [10, 11, 22, 33, 44, 20, 30, 23, 12, 7, 8, 5, 80, 90, 100];
console.log(...numbers);
// let spreadNumbers= (...numbers);

//Larget number 100
//smallest number 5
//second largest 90
//second smallest 7
// let sorted = numbers.sort((a, b) => a - b);
// console.log(`First smallest ${sorted[0]}`);
// console.log(`Second smallest ${sorted[1]}`);
// sorted.reverse();
// console.log(`First largest ${sorted[0]}`);
// console.log(`Second largest ${sorted[1]}`);
