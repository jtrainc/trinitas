export default class Projectile {

    angle;
    x;  y;
    startX;
    startY;
    speed;
    maxDamage;
    maxRange;
    element;

    constructor( options ) {
        this.x = options.x;
        this.y = options.y;
        this.angle = options.angle;

        this.element = document.createElement("div");
        this.element.style.width = "5px";
        this.element.style.height = "5px";
        this.element.style.borderRadius = "50%";
        this.element.style.backgroundColor = "black";
        this.element.style.position = "absolute";
        this.draw();
        document.body.appendChild(this.element);
    }

    move() {

        const newX = this.x + Math.cos(this.angle) * this.speed;
        const newY = this.y + Math.sin(this.angle) * this.speed;

        const isXValid = newX > 0 && newX < innerWidth;
        const isYValid = newY > 0 && newY < innerHeight;
        if ( isXValid && isYValid) {
            this.x = newX;
            this.y = newY;
        } else {
            this.destroy();
        }
    }

    draw() {
        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";
    }

    destroy() {
        console.log("Projectile has been destoyed");
    }
}