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
        this.turnSpeed = opts.turnSpeed;

    }

    driveForward() {
        this.location.x += this.moveSpeed * Math.cos(this.angle);
        this.location.y += this.moveSpeed * Math.sin(this.angle);
    }

    driveBackward() {
        this.location.x -= this.moveSpeed * Math.cos(this.angle);
        this.location.y -= this.moveSpeed * Math.sin(this.angle);
    }

    turnLeft() {
        this.angle -= this.turnSpeed;
    }

    turnRight() {
        this.angle += this.turnSpeed;
    }

    startMovement() {
        const moveAndSpin = () => {
          this.driveBackward(); // Move backward
          this.turnRight(); // Spin clockwise
          this.update(); // Update the tank's position and rotation on the screen
    
          // Continue the loop
          requestAnimationFrame(moveAndSpin);
        };
    
        // Start the loop
        moveAndSpin();
      }    
}