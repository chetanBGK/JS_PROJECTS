const cart = [
  { name: "Pen", price: 10, qty: 3 },
  { name: "Notebook", price: 50, qty: 2 },
  { name: "Eraser", price: 5, qty: 5 },
];

let total = cart.map((item) => {
  let total = item.price * item.qty;
  return { ...item, total };
});
console.log(total);

// let total = cart.map((item) => {
//   let total = item.price * item.qty;
//   return total;
// });
// console.log(
//   `Total cart value is: ${total.reduce((iVal, nVal) => iVal + nVal)}`
// );

// Get total bill.
// let itemTotal = cart.map((item) => {
//   let total = item.price * item.qty;
//   return { ...item, total };
// });

// itemTotal.forEach((item) => console.log(item.total));

// let finalTotal = itemTotal.reduce((a, b) => a + b.total, 0);
// console.log(finalTotal);

// // Add 18% GST and ro und off.
// console.log("Adding GST");
// console.log(
//   `Total GST ${finalTotal * 0.18}: Total Amount ${
//     finalTotal + finalTotal * 0.18
//   }`
// );
