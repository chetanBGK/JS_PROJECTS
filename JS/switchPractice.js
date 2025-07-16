let choice = prompt("Enter the choice");

switch (Number(choice)) {
  case 1:
    console.log("It's monday");
  // break;

  case 2:
    console.log("It's Tuesday");
    break;
  case 3:
    console.log("It's wednsday");
    break;

  default:
    console.log("It's Sunday");
    break;
}
