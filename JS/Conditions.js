let num1 = 200;
let num2 = "100";

num1 = num1 + Number(num2); //300
num2 = num1 - Number(num2); //100
num1 = num1 - Number(num2); //200

// temp = num1; //temp=100
// num1 = num2; // num1=200
// num2 = temp; //num2=100

console.log(`num1= ${num1}`);
console.log(`num2= ${num2}`);
