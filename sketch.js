const RESOLUTION = 100;

let seed;
let intersect;
let phase;

function setup() {
  createCanvas(570, 500);
  let center = createVector(width/2, height/2);
  phase = 0;
  // seed = new Disc(center, 100, 0, TWO_PI);
  seed = new Seed(center, 80, 12, 80);
  // intersect = new Intersection(seed.discArray);
}

function draw() {
  background(0);
  for(let i = 0; i < seed.discArray.length; i++) {
    seed.discArray[i].traverse(seed.discArray[i].phase + phase);
  }
  seed.display();
  phase += PI / 200;
  phase = phase % TWO_PI;
  // console.log(phase);
  // intersect.display();
}