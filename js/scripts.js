const el = document.querySelector("#currenttime");

setInterval(setTime, 1000);

function setTime() {
    el.textContent = new Date().toLocaleTimeString();
}