const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = "Hey I am red!";
p.style.color = "Red";

const h3 = document.createElement("h3");
h3.textContent = "Hey I am blue!";
h3.setAttribute("style", "color : blue");

body.appendChild(p);
body.appendChild(h3);

const div = document.createElement("div");
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "I am in a div!";
const pn = document.createElement("p");
pn.textContent = "ME TOO!";

div.append(h1);
div.append(pn);
body.appendChild(div);

function alertFunction() {
    alert("Button clicked.");
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function(e) {
    console.log(e.target);
    e.target.style.background = "blue";
});