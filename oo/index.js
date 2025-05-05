import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green" });
const pinkTank = new Tank({ color: "pink" })

armyTank.render();
pinkTank.render();

const pressedKeys = {
    "KeyA": false,
    "KeyS": false,
    "KeyD": false,
    "KeyW": false,
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowLeft": false,
    "ArrowRight": false,
};

function update() {
    // If the user is pressing W or ArrowUp
    if (pressedKeys.KeyW || pressedKeys.ArrowUp) {
        armyTank.driveForward();
        pinkTank.driveForward();
    }
    else if (pressedKeys.KeyS || pressedKeys.ArrowDown) {
        armyTank.driveBackward();
        pinkTank.driveForward();
    }
    if (pressedKeys.KeyA || pressedKeys.ArrowLeft) {
        armyTank.turnLeft();
        pinkTank.driveForward();
    }
    else if (pressedKeys.KeyD || pressedKeys.ArrowRight) {
        armyTank.turnRight();
        pinkTank.driveForward();
    }
    armyTank.update();
    pinkTank.update();
    requestAnimationFrame(update);
}

update();

document.addEventListener("keydown", (event) => {
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = false;
    }
});