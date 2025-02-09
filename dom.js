const link = document.querySelector("a");
link.textContent = "WTF is this!?!?!?";
link.href = "https://www.google.com";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "X marks the spot!";
sect.appendChild(para);

const text = document.createTextNode("- Pirates and Snoop Dogg");

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);
para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";
