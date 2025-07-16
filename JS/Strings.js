let string1 = "Welcome to JS, the world of JavaScript!";

console.log(string1.length); //13
console.log(string1.charAt(6));
console.log(string1.indexOf("o"));
console.log(string1.lastIndexOf("o"));
console.log(string1.includes("to"));
console.log(string1.startsWith("Wel"));
console.log(string1.endsWith("JS"));

console.log(`Using Slice ${string1.slice(1, 9)}`); //starts with 1 ends with 9-1

console.log(string1.substring(1, 5).toUpperCase());
console.log(`Using replace ${string1.replace("JS", "Java Script")}`);
console.log(`Using replaceAll ${string1.replaceAll("o", "O")}`);
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());

var string2 = "              Welcome to JS                ";
console.log(string2);
console.log(`Using trim ${string2.trim()}`);

console.log(`Using slice ${string1.slice(-13, -6)} `);
