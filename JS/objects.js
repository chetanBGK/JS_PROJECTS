// let student = {
//   rollNo: 111,
//   branch: "MCA",
//   mobile: 9684751325,
//   personalData: {
//     "first Name": "Ramesh",
//     middleName: "M",
//     LastName: "Patil",
//   },
//   displayData: () => {
//     console.log(`${student.rollNo} : ${student.branch} : ${student.mobile}`);
//   },
// };

// student["email"] = "abc@gmail.com";
// console.log(student.email);
// student["id"] = 123;
// console.log(typeof student.id);

// console.log(student.personalData["first Name"]);

// student.displayData();

let student = {
  Name: {
    fName: "Ramesh",
    mName: "Raman",
    lName: "Patil",
  },
  rollNo: 123,
  email: "ramesh@gmail.com",
  branch: "MCA",
  display: () => {
    console.log(student.rollNo, student.Name.fName);
  },
};

// console.log(student.Name.fName);

// student.email = "ramesh123@gmail.com";
// student.gender = "Male";
// console.log(
//   `${student["rollNo"]}: ${student.email}:
//   ${student["Name"]}: ${student.gender}`
// );

// delete student.email; //Delete property of an object
// console.log(student);
