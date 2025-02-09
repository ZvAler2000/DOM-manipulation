let list = document.querySelector("ul");
let input = document.getElementById("item");
let button = document.querySelector("button");
let variable;
let buttons;

button.addEventListener("click" , function() {
    variable = input.cloneNode();
    input.value = "";

    let listItem = document.createElement("li");
    let itemName = document.createElement("span");
    let deleteButton = document.createElement("button");

    itemName.textContent = variable.value;
    deleteButton.textContent = "Delete";

    listItem.appendChild(itemName);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});

 