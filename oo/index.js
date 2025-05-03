import Tank from "./classes/Tank.js";

const armyTank = new Tank({ rounds: 5, color: "green"});
const pinkTank = new Tank({ color: "pink" })

armyTank.render();

function setupKeyBinding () {

    // function handleKeyUp (event) {
    //     console.log(event.code);
    // }
    function handleKeyDown (event) {
        console.log(event.code);
        if (event.code == "KeyW"){
            armyTank.driveForward();
            armyTank.update();
            console.log(armyTank.location.x);
        }
        else (event.code == "KeyD") 
            armyTank.turnRight();
            armyTank.update();
            console.log(armyTank.location.x);
        }
    }
    function handleKeyDown (event) {
        console.log(event.code);
        if (event.code === "KeyS") {
            armyTank.driveBackward();
            armyTank.update();
            console.log(armyTank.location.x);
        }
        else if (event.code == "KeyA") {
            armyTank.turnLeft();
            armyTank.update();
            console.log(armyTank.location.x); 
    }
    }
    // document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

setupKeyBinding();