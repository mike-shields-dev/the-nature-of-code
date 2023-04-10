class Walker {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector(1, 0);
    }

    update() {
        this.pos.x += random(-1, 1);
        this.pos.y += random(-1, 1);
    }

    show() {
        stroke(255, 100);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, 10);
    }
}
