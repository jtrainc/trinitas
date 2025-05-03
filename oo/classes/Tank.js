import Automobile from "./Automobile.js";

export default class Tank extends Automobile {
    rounds;

    constructor(options = {}) {

        const defaults = {
            rounds: 100
        };

        const opts = { ...defaults, ...options };

        super(opts);

        this.rounds = opts.rounds;
        console.log("Your tank is alive?");
    }
    fire() {
        if (this.rounds > 0) {
          this.rounds--;
          console.log("Firing a bullet! Rounds left:", this.rounds);
    
          // Simulate the bullet flying through the map
          let distance = 0;
          const interval = setInterval(() => {
            distance += 10; // Bullet travels 10 units per interval
            console.log(`Bullet is at distance: ${distance}`);
    
            // Stop the bullet after it travels 100 units
            if (distance >= 100) {
              clearInterval(interval);
              console.log("Bullet stopped.");
            }
          }, 100); // Update every 100ms
        } else {
          console.log("Out of rounds! Reload your tank.");
        }
      }
    };