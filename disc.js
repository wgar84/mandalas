// RESOLUTION = 200;

class Disc {
    
    constructor(center, radius, phase=0, size=TWO_PI, n_points=RESOLUTION) {
        this.center = center;
        this.radius = radius;
        this.phase = phase;
        this.size = size;
        this.length = n_points;
        this.domain = [];
        this.image = []; 
        this.traverse();
    }
    
    traverse(phase=this.phase, size=this.size) {
        this.image = [];
        this.domain = [];
        let step = size / this.length;

        for(let theta = 0; theta <= size; theta += step) {
            this.domain.push(theta);
            let x = this.radius * cos(-theta);
            let y = this.radius * sin(-theta);
            let p = createVector(x, y);
            p.rotate(phase);
            p.add(this.center);
            this.image.push(p);
        }
    }

    intersect(other) {
        let points = [];
        let betweenCenters = dist(this.center.x, this.center.y, other.center.x, other.center.y);
        if (betweenCenters <= this.radius + other.radius) {
            for(let i = 0; i < this.image.length; i++) {
                let p = this.image[i];
                let d = dist(p.x, p.y, other.center.x, other.center.y);
                if (abs(d - other.radius) < (this.radius * PI) / RESOLUTION) {
                    points.push(p)
               }
           }
        }
        return points;
    }

    display() {
        // beginShape();
        noFill();
        strokeWeight(2);
        for(let i = 0; i < this.image.length; i++) {
            let alpha = map(this.domain[i], 0, TWO_PI, 200, 0);
            stroke(255, alpha);
            point(this.image[i].x, this.image[i].y);
        }
        // endShape();
    }    
}