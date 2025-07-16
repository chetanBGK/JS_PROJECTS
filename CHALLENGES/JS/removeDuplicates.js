let numbers = [1, 2, 5, 6, 7, 2, 3, 5, 6, 6, 6, 4, 1];

// let unique = []; //1,2,5,6,7,3
let unique2 = {};
numbers.forEach((number) => {
  // debugger;
  unique2[number] = (unique2[number] || 0) + 1;
});
console.log(unique2);

// numbers.forEach((number) => {
//   // debugger;
//   if (!unique.includes(number)) {
//     // debugger;
//     unique.push(number);
//   }
// });

// console.log(unique);

// console.log(unique);

// for (let item of Object.values(unique)) console.log(item);

// let unique2 = [];
// numbers.forEach((number) => {
//   if (!unique2.includes(number)) {
//     unique2.push(number);
//   }
// });

// console.log(`UNique numbers ${unique2}`);
