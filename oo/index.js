import Projectile from "./classes/Projectile.js";
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
        pinkTank.driveBackward();
    }
    if (pressedKeys.KeyA || pressedKeys.ArrowLeft) {
        armyTank.turnLeft();
        pinkTank.turnLeft();
    }
    else if (pressedKeys.KeyD || pressedKeys.ArrowRight) {
        armyTank.turnRight();
        pinkTank.turnRight();
    }
    armyTank.update();
    pinkTank.update();
    requestAnimationFrame(update);
}

update();

document.addEventListener("keydown", (event) => {
    
    if ( event.code == "Space" ) {
        // armyTank.shoot();
        new Projectile({
             x: Math.random() * innerWidth,
             y: Math.random() * innerHeight,
        });
    }
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code in pressedKeys) {
        pressedKeys[event.code] = false;
    }
});