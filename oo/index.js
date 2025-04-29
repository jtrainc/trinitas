//Machine class is our base class is our base class; it doesn't extend anything. It provides the basis of all other machine_type objects and classes.
class Machine {
    weight;
    location;
    color;
    element;
    angle;
    constructor(in_weight = 100, x_coord = 10, y_coord = 10, color = "gray") {
        console.log("Creating machine with wieght of " + in_weight + " pounds");
        console.log("Oh, and it has coords of " + [x_coord, y_coord]);
        this.weight = in_weight;
        this.location = [x_coord, y_coord];
        this.color = color;
        this.element = null;
        this.angle = angle;
    }

    render() {
        if (this.element) {
            return;
        }

        this.element = document.createElement("div");
        this.element.style.backgroundColor = this.color;
        this.element.style.width = "30px";
        this.element.style.height = "10px";
        this.element.style.transforms = "rotate(" + this.angle + "rad)";


        document.body.appendChild(this.element);
    }
}
class Automobile extends Machine {
    fuel;
    moveSpeed;
    constructor(in_fuel = 1, in_weight = 2000, color = "gray", moveSpeed = 10) {
        super(in_weight, 10, 10, color);
        this.moveSpeed = moveSpeed;
        console.log("you've created an automobile with a tank that is " + in_fuel + "% full");
        this.fuel = in_fuel;
    }
}

class Tank extends Automobile {
    rounds;
    constructor(rounds = 1_000, color = "green") {
        super(1, 10_000, color);
        this.rounds = rounds;
        console.log("Your tank is alive?");
    }
}

const armyTank = new Tank(1000, "green");

armyTank.render();
//const vehicle = new Automobile(0.5);
//const printer = new Machine(500, 32, 55);