class Seed {

    constructor(center, radius, n_discs, radii) {
        this.discArray = [];
        this.centerDisc = new Disc(center, radius, 0, TWO_PI, n_discs);
        let phase_offset = floor(random(1, 5));
        console.log(phase_offset);
        for (let i = 0; i < n_discs; i++) {
            let newCenter = this.centerDisc.image[i];
            let newPhase = this.centerDisc.domain[i] * phase_offset;
            // console.log(newPhase / TWO_PI);
            this.discArray.push(new Disc(newCenter, radii, newPhase))
        }
    }

    display() {
        for (let i = 0; i < this.discArray.length; i++) {
            let current = this.discArray[i];
            current.display();
    //         for(let j = 0; j < this.discArray.length; j++) {
    //             let other = this.discArray[j];
    //             if (current != other) {
    //                 let points = current.intersect(other);
    //                 if (points != null) {
    //                     for (let k = 0; k < points.length; k++) {
    //                         strokeWeight(5);
    //                         point(points[k].x, points[k].y);
    //                     }
    //                 }
    //             }
    //         }
        }
    }
}