let textValue = " ";

function changeTextValue(userValue) {
  if (userValue == "=") {
    textValue = eval(textValue);
    document.querySelector("#display").value = textValue;
  } else {
    textValue = textValue + userValue; //789526+456+6
    document.querySelector("#display").value = textValue;
  }
}
