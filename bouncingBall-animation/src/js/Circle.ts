import AnimatedValue from "./AnimatedValue";
import Shape from "./Shape";
import Vector from "./Vector";

const PI2 = Math.PI * 2;

function createRandomColor(): string {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}


export default class Circle extends Shape {
    radius: number;
    radiusAnmatedValue: AnimatedValue;
    angle: number;
    speed: number;
    color: string;
    diameter: number;
    vx: number;
    vy: number;

    constructor(position: Vector, radius: number) {
        super(position);
        this.radius = Math.floor((Math.random() * (10 - 4)) + 4);
        this.angle = PI2 * Math.random();
        this.speed = (Math.random() * (10 - 2)) + 2;
        this.color = createRandomColor();
        this.vx = Math.cos(this.angle) * this.speed;
        this.vy = Math.sin(this.angle) * this.speed;
        this.radiusAnmatedValue = new AnimatedValue(0, 1, 300, this.speed * 10);
    }

    update(delta: number) {
        this.position.x += this.vx;
        this.position.y += this.vy;

        this.radiusAnmatedValue.update(delta);
    }

    render(context: CanvasRenderingContext2D) {
        this.bounceWindow(this.position);
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        context.fill();
    }

    bounceWindow(position: Vector) {
        const minX = this.radius;
        const maxX = window.innerWidth - this.radius;
        const minY = this.radius;
        const maxY = window.innerHeight - this.radius;
        if (this.position.x <= minX || this.position.x >= maxX) {
            this.vx *= -1;
            this.position.x += this.vx
        } else if (this.position.y <= minY || this.position.y >= maxY) {
            this.vy *= -1;
            this.position.x += this.vy
        }

    }
}


