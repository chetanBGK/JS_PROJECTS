let userWinCount = 0;
let computerWinCount = 0;
let resultStatus = document.querySelector("#resultStatus");

function chooseWinner(userChoice, ComputerChoice) {
  if (userChoice === ComputerChoice) {
    document.querySelector(
      "#resultStatus"
    ).innerText = `User won ${userWinCount} times and Computer Won ${computerWinCount} times`;
    alert(
      `user choice= ${userChoice}: Computer choice= ${ComputerChoice}: it's tie`
    );
  } else if (userChoice > ComputerChoice) {
    userWinCount += 1;
    document.querySelector(
      "#resultStatus"
    ).innerText = `User won ${userWinCount} times and Computer Won ${computerWinCount} times`;
    alert(
      `user choice= ${userChoice}: Computer choice= ${ComputerChoice}: User Won`
    );
  } else {
    computerWinCount += 1;
    document.querySelector(
      "#resultStatus"
    ).innerText = `User won ${userWinCount} times and Computer Won ${computerWinCount} times`;
    alert(
      `user choice= ${userChoice}: Computer choice= ${ComputerChoice}: Computer Won`
    );
  }
}
// console.log(Math.ceil(Math.random() * 3));
