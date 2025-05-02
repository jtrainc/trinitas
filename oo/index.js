import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green"});
const pinkTank = new Tank({ color: "pink" })

armyTank.render();
pinkTank.render();
//const vehicle = new Automobile(0.5);
//const printer = new Machine(500, 32, 55);

function setupKeyBinding () {

    function handleKeyUp (event) {
        console.log(event.code);
    }
    function handleKeyDown (event) {
        console.log(event.code);
        if (event.code == "KeyW"){
            armyTank.driveForward();
            armyTank.update();
        }
    }
    function handleKeyDown (event) {
        if (event.code == "KeyS") {
            armyTank.driveBackward();
            armyTank.update();
        }
    }

    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);
}

setupKeyBinding();