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
}