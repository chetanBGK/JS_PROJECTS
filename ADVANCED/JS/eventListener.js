// function displayMessage() {
//   console.log("Button clicked");
// }

// function displayTime() {
//   let date = String(new Date());
//   console.log(date.substring(0, 15));
// }

// let buttonVariable = document.querySelector("#submitButton");

// buttonVariable.addEventListener("click", displayMessage);
// buttonVariable.addEventListener("click", displayTime);
// buttonVariable.addEventListener("click", createElement);

// function createElement() {
//   buttonVariable.addEventListener("click", () => {
//     let newTag = document.createElement("h1");
//     newTag.innerText = "New h1 tag";

//     let newButton = document.createElement("button");
//     newButton.innerText = "Delete";

//     // Delete only the previous h1 (optional logic)
//     newButton.addEventListener("click", () => {
//       newTag.remove();
//       newButton.remove();
//     });

//     const header = document.querySelector("#headerTags");
//     header.appendChild(newTag);
//     header.appendChild(newButton);
//   });
// }

// let HasExperience = document.querySelector("#experience");

// HasExperience.addEventListener("click", createExpFields);

// function createExpFields() {
//   let noOfYears = document.createElement("label");
//   noOfYears.innerText = "Number of years";
//   let yearsField = document.createElement("input");

//   document.querySelector("#expFields").appendChild(noOfYears);
//   document.querySelector("#expFields").appendChild(yearsField);

//   let noExperience = document.querySelector("#noExperience");
//   noExperience.addEventListener("change", () => {
//     noOfYears.remove();
//     yearsField.remove();
//   });
// }

let buttonVariable = document.querySelector("#clickButton");

buttonVariable.addEventListener("click", display);
buttonVariable.addEventListener("click", displayTime);

function display() {
  console.log("Button clicked");

  let h1Tag = document.createElement("h1");
  let buttonTag = document.createElement("button");
  buttonTag.id = "buttonId";
  buttonTag.style.color = "Red";

  h1Tag.innerText = "This is new h1 tag";
  buttonTag.innerText = "new Button";

  document.querySelector("#headerTags").appendChild(h1Tag);
  document.querySelector("#headerTags").appendChild(buttonTag);

  let newButton = document.querySelector("#buttonId");
  newButton.addEventListener("click", () => {
    newButton.remove();
    h1Tag.remove();
  });

  function removeItem() {
    document.remove();
  }
  // divTag;
}

function displayTime() {
  console.log(new Date());
}
