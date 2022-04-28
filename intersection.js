class Intersection {
    constructor(discArray) {
        this.belongs = [];
        for (let i = 0; i < discArray.length; i++) {
            let current = discArray[i];
            for (let j = 0; j < discArray.length; j++) {
                let other = discArray[j];
                if (current != other) {
                    for (let k = 0; k < current.points.length; k++) {
                        let p = current.points[k];
                        let d = dist(p.x, p.y, other.center.x, other.center.y) 
                        if (d < other.radius) {
                            this.belongs.push(p)
                        }
                    }
                }
            }
        }
    }

    display() {
        beginShape();
        noFill();
        stroke(255);
        strokeWeight(2);
        for(let i = 0; i < this.belongs.length; i++) {
            vertex(this.belongs[i].x, this.belongs[i].y)
        }
        endShape();
    }
}