document.getElementById("heading").innerHTML = "Welcome to Cybrom";
let content = "This is a variable element";
document.getElementById("heading").innerHTML = content;
document.getElementById("heading").style.color = "red";
document.getElementById("heading").style.backgroundColor = "yellow";

document.querySelector("p.mypara").style.fontSize = "40px";
document.querySelector("p.mypara").style.color = "blue";
document.querySelector("p.mypara").style.backgroundColor = "pink";


document.querySelector("h2.mypara").style.fontSize = "40px";
document.querySelector("h2.mypara").style.color = " red";
document.querySelector("h2.mypara").style.backgroundColor = " blue";
document.querySelector("h2.mypara").innerHTML = "Welcome";  

window.alert("Please type fast.....");
let name = prompt("what is your name ?");
alert(name);
let age = prompt("what is your age ?");
alert(age);
window.confirm("Are you understanding javascript");