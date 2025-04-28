//Machine class is our base class is our base class; it doesn't extend anything. It provides the basis of all other machine_type objects and classes.
class Machine {
    weight;
    coords = [0, 0];
    constructor(in_weight = 100, x_coord = 10, y_coord = 10) {
        console.log("Creating machine with wieght of " + in_weight + " pounds");
        console.log("Oh, and it has coords of " + [x_coord, y_coord]);
        this.weight = in_weight;
        this.coords = [x_coord, y_coord];
    }
}

class Automobile extends Machine {
    constructor(in_fuel, in_weight = 2000) {
        super(in_weight);
        console.log("you've created an automobile with a tank that is " + in_fuel + "% full");
        this.fuel = in_fuel;
    }
}

class Tank extends Automobile {
    weight;
    fuel;
    color = "gray";
    constructor (color) {
        super( 1, 10_000);
        this.color = color;
        console.log("Your tank is alive?");
    }
}

const armyTank = new Tank("green");
const vehicle = new Automobile(0.5);

const printer = new Machine(500, 32, 55);