let selectButton = document.querySelector("#addItem");
selectButton.addEventListener("click", addTaskToTheList);

function addTaskToTheList() {
  let taskValue = document.querySelector("#task").value;
  let itemsList = document.createElement("h3");
  //   itemsList.style.width = "50px";

  itemsList.innerText = taskValue;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.marginLeft = "10px";
  deleteButton.addEventListener("click", () => {
    itemsList.remove();
  });

  itemsList.appendChild(deleteButton);

  document.querySelector("#itemList").appendChild(itemsList);
  document.querySelector("#task").value = "";
}
