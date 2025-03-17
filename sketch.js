let eyes = [
    {
        x:600,
        y:400,
        r:125
    },  
    {
        x:860,
        y:400,
        r:125
    }    
]
//let r = 100;
//let theta = 45;

function setup(){
    createCanvas (windowWidth, windowHeight);
    background (117,185,189);
    noStroke();
    //angleMode(DEGREES);
}

function draw(){
    background (117,185,189);
    for (let eye of eyes){
        fill("white");
        circle(eye.x,eye.y,eye.r * 2)
        fill("blue");
        circle(eye.x,eye.y,eye.r * .75)
    }
    //fill("white");
    //circle(600,400,250)//left eye
    //circle(860,400,250)//right eye
    

    

    //let distance = dist(mouseX, mouseY, 600, 400);


   // circle(x,mouseY,100)




    //circle(mouseX,mouseY,100)
    
    
}