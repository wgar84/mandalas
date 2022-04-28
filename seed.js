class Seed {

    constructor(center, radius, n_discs, radii) {
        this.discArray = [];
        this.centerDisc = new Disc(center, radius, 0, TWO_PI, n_discs);
        let phase_offset = 1;//floor(random(1, 5));
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
        }
    }
}