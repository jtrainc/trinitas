function promptUser() {
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
    else {
        h2.textContent = "This is fake, replacement content.";
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
    //setup trakcing eyes!
    const eyes = document.querySelectorAll(".eye");
    //listen to user mouse movements
    document.addEventListener("mousemove", updateEyes);

    function updateEyes(event) {
        for (const eye of eyes) {
            const pupil = eye.querySelector(".pupil");
            const shape = eye.getBoundingClientRect();
            const dx = event.clientX - (shape.left + shape.width / 2);
            const dy = event.clientY - (shape.top + shape.height / 2);
            const angle = Math.atan2(dy, dx);
            const x = Math.cos(angle) * 10;
            const y = Math.sin(angle) * 10;
            pupil.style.transform = `translate(${x}px, ${y}px)`;
        }
    }
}

function say(phrase) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.rate = 5
    speechSynthesis.speak(utterance)
}

const speakButton = document.querySelector("#sayPhrase");
const phraseInput = document.querySelector("#phrase");

speakButton.addEventListener("click", function () {
    console.log("Testing");
    say(phraseInput.value);
});

function say_phrase(phrase) {
    const utterance = new SpeechSynthesisUtterance(phrase);
    speechSynthesis.speak(utterance);
}
//this is a function called "logical fallies". It has two paramaters: the first of which is the appeal to athority example, and the second is the num of times to print.
function logical_fallicies(appeal_to_athority_example, num_of_times_to_print) {
    for (let i = 0; i < num_of_times_to_print; i++) {
        console.log("An example of an appeal to athority is: " + appeal_to_athority_example);
    }
}

logical_fallicies("Listen to me, for I have the badge of green justice!", 3);
const phrases = [
    "Hello, world",
    What is your name ? "
    Do you like pizza ? "
    Because you can not be my friend if you don't like pizza."
];

function printPhrasesToPage(inputPhrase) {
    //this is a "for... of" (as opposed to "for...in") loop.
    for (const phrase of inputPhrases) {
        const listItem = document.createElement("li")
        //methods are functions that belong to objects (e.g. Math.random())
        listItem.textContent = phrase + " " + Math.floor(800 * Math.random());
        document.body.append(listItem);
    }
}
printPhrasesToPage(["Jon Anthony", "Brandon Jansky", "Jackson Cowart"]);


//This is a function named "foo"; it has no arguments (i.e., the parens have nothing between them). It's body is everything within the opening and closign curly braces (i.e., {and}).
const foo2 = () => {
    phrases.forEach(say_phrase);
}
const foo 