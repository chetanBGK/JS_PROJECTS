function add(num1, num2, cb) {
  cb(num1 + num2);
}

add(100, 20, (answer) => console.log(answer));
