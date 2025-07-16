let cartSize = 0;

// function addTobag() {
//   cartSize += 1;
//   document.querySelector(
//     "#messageTag"
//   ).innerText = `Your cart has ${cartSize} items`;
// }

// function wishList() {
//   cartSize != 0
//     ? ((cartSize -= 1),
//       (document.querySelector(
//         "#messageTag"
//       ).innerText = `Your cart has ${cartSize} items`))
//     : alert("You cart is empty");
// }

// function offer() {
//   cartSize += 2;
//   document.querySelector(
//     "#messageTag"
//   ).innerText = `Your cart has ${cartSize} items`;
// }

// function clearCart() {
//   cartSize = 0;
//   document.querySelector(
//     "#messageTag"
//   ).innerText = `Your cart has ${cartSize} items`;
// }

function processOrder(cartItemNumber) {
  if (cartSize == 0 && cartItemNumber == -1) alert("Your cart has no items");
  else if (cartItemNumber == 0) {
    cartSize *= cartItemNumber;
    document.querySelector(
      "#messageTag"
    ).innerText = `Your cart has ${cartSize} items`;
  } else {
    cartSize += cartItemNumber;
    document.querySelector(
      "#messageTag"
    ).innerText = `Your cart has ${cartSize} items`;
  }
}

// function changeStatus() {
//   document.querySelector("#messageTag").innerText = `Value of num1 is ${num1}`;
// }
