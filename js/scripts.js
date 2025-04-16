//These are all "const" bcause we expect no changes to be made to the value
const h1 = document.getElementById("title");
const h2 = document.querySelector("h2");
const el = document.querySelector("#currenttime");
const username = prompt("What is your name, traveler?");

//Types of values
let string_type = "Hello";




//We are going to change this value at least once more
let timevalue;

// Can the use see our secret content?
let tries = 10;
let userAnswer = prompt("What is the secret password?");

while (userAnswer != "gay" && tries > 0) {
    alert("Wrong. Try again. You have " + tries + " attempts remaining.");
    userAnswer = prompt("What is the secret password?");
    tries = tries - 1;
}
if (userAnswer == "gay") {
    h2.hidden = false;
}

// Update our clock once every second
setInterval(setTime, 1_000);

// Greet the user by the name they provided
h1.textContent = "Hello, " + username;

function setTime() {
    timevalue = new Date().toLocaleTimeString();
    renderTime();
}

function renderTime() {
    el.textContent = timevalue;
}