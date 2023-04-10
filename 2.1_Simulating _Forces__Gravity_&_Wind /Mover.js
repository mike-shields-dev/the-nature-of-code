class Mover {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 20;
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0, 0);
    }

    show() {
        const hue = floor(degrees(this.vel.heading()) + 360) % 360;
        noStroke();      
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    edges() {
        if(this.pos.y + this.r >= height) {
            this.pos.y = height - this.r;
            this.vel.y *= -1;
        }

        if(this.pos.x + this.r >= width) {
            this.pos.x = width - this.r;
            this.vel.x *= -1;
        }

        if(this.pos.x - this.r < 0) {
            this.pos.x = 0 + this.r;
            this.vel.x *= -1;
        }

        if(this.pos.y - this.r < 0) {
            this.pos.y = 0 + this.r;
            this.vel.y *= -1;
        }
    }
}