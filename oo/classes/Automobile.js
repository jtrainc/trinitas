import Machine from "./Machine.js";

export default class Automobile extends Machine {
    fuel;
    moveSpeed;
    turnSpeed;

    constructor(options = {}) {

        const defaults = {
            fuel: 100,
            moveSpeed: 5,
            turnSpeed: 0.15,
        };

        const opts = { ...defaults, ...options };

        super(opts);

        this.moveSpeed = opts.moveSpeed;
        this.fuel = opts.fuel;
        this.turnSpeed = opts.moveSpeed;

    }

    driveForward() {
        this.location.x = this.location.x + this.moveSpeed;
    }

    driveBackward() {
        this.location.x = this.location.x - this.moveSpeed;
    }

    turnLeft() {
        this.angle = this.angle - this.turnSpeed;
    }

    turnRight() {
        this.angle = this.angle + this.turnSpeed;
    }

}