const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Output: { apple: 3, banana: 2, orange: 1 }

let wordCount = {};
words.forEach((fruits) => {
  //   debugger;
  wordCount[fruits] = (wordCount[fruits] || 0) + 1;
});

console.log(wordCount);
