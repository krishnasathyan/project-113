function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.hide();

   
}

function draw(){
    image(video,100, 80, 300, 250);
    stroke(50, 168, 82);
    fill(171, 255, 235);
    rect(63, 27, 375, 25);
    rect(63, 350, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
    stroke(168, 10, 10);
    fill(255, 207, 171);
    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40, 360, 50);
    circle(460, 360, 50);

}

function take_snapshot(){
    save('selfie.png');
}

               