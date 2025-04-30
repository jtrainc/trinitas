export default class Machine {
    weight;
    location;
    color;
    element;
    angle;
    constructor( options = {}) {
        const defaults = {
            weight: 1,
            location: { x: 0, y: 0 },
            element: null,
            color: "gray",
            angle: 0,
        };
        const opts = { ...defaults, ...options};
        this.weight = opts.weight;
        this.location = opts.location;
        this.color = opts.color;
        this.element = opts.element;
        this.angle = opts.angle;
    }

    render() {
        if (this.element) {
            return;
        }

        this.element = document.createElement("div");
        this.element.style.backgroundColor = this.color;
        this.element.style.width = "30px";
        this.element.style.height = "10px";
        this.element.style.transform = "rotate(" + this.angle + "rad)";


        document.body.appendChild(this.element);
    }
}