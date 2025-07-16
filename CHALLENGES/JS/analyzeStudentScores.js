const students = [
  { name: "Amit", scores: [80, 75, 90] },
  { name: "Sara", scores: [60, 70, 65] },
  { name: "John", scores: [85, 90, 92] },
  { name: "Chetan", scores: [95, 99, 94] },
];

// Print the average score of each student using map.

let score = students.map((student) => {
  let individualScore = student.scores;
  // console.log(individualScore);
  let total = individualScore.reduce((iVal, nVal) => iVal + nVal);
  let avg = total / individualScore.length;
  avg = avg.toFixed(2);
  return { ...student, avg };
});

// // Filter students whose average is above 85.
console.log(
  score.filter((avg) => {
    return avg.avg > 85;
  })
);

// // Chain map → filter → forEach to print "Topper: <name> (avg: <avg>)".
// let topper = averageScore.reduce((fVal, nVal) =>
//   fVal.average > nVal.average ? fVal : nVal
// );
// console.log(`${topper.name}: ${topper.average}`);

// //  return { ...student, average };
// // ...student copies the original object:
// // Then it adds a new key average to it:

// // printing average above 85
