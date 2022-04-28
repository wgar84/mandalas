const RESOLUTION = 20;

let seed;
let intersect;
let phase;

function setup() {
  createCanvas(570, 500);
  let center = createVector(width/2, height/2);
  phase = 0;
  // seed = new Disc(center, 100, 0, PI);
  seed = new Seed(center, 80, 80, 160);
  // intersect = new Intersection(seed.discArray);
}

function draw() {
  background(0);
  for(let i = 0; i < seed.discArray.length; i++) {
    seed.discArray[i].traverse(seed.discArray[i].phase + phase, PI);
  }
  seed.display();
  phase += PI / 100;
  phase = phase % TWO_PI;
  // console.log(phase);
  // intersect.display();
}