//let eyes = [
    //{
        //x:600,
        //y:400,
        //r:125
    //},  
    //{
        //x:860,
        //y:400,
        //r:125
    //}    
//]
let eyeCenters = [];
let pupilPositions = [];
let lids = [];
let eyeRadius = 125;
let pupilRadius = 55;
let isBlinking = false;


setInterval(blink, 3000)

function blink(){
    isBlinking = true;
    console.log(isBlinking);
    setTimeout(function() {
        isBlinking = false;
        console.log(isBlinking);
    }, 500)
}


function setup(){
    createCanvas (windowWidth, windowHeight);
    background (117,185,189);
    noStroke();

    eyeCenters.push(createVector(width / 2 - eyeRadius, height / 2));
    eyeCenters.push(createVector( width / 2 + eyeRadius, height / 2));
    pupilPositions.push(createVector(width / 2 - eyeRadius, height / 2));
    pupilPositions.push(createVector(width / 2 + eyeRadius, height / 2));
    
       
    for (let center of eyeCenters) {
        let upperLid = {
            x: center.x - eyeRadius,
            y: height/2 - 2*eyeRadius,
            openY: height/2 - 2 * eyeRadius,
            closedY: height/2 - eyeRadius
        }
        let lowerLid = {
            x: center.x - eyeRadius,
            y: height/2 + eyeRadius,
            openY: height/2 + eyeRadius,
            closedY: height/2
        }
        lids.push(upperLid, lowerLid)
      }



    
    
}

function draw(){
    background (117,185,189);
    //for (let eye of eyes){
       // fill("white");
       // circle(eye.x,eye.y,eye.r * 2)
       // fill("blue");
       // circle(eye.x,eye.y,eye.r * .75)
    //}

    //fill(117,185,189);
    //rectangle(50,30,10);

    for (let i = 0; i < eyeCenters.length; i++) {
        let target = createVector(mouseX, mouseY);
        let center = eyeCenters[i];
        let dir = p5.Vector.sub(target, center);
        
        dir.mult(.1)

        if (dir.mag() > eyeRadius - pupilRadius) {
          dir.setMag(eyeRadius - pupilRadius);
        }
        
        pupilPositions[i] = p5.Vector.add(center, dir);
        

    

        
        // Draw large circle
        fill("white");
        noStroke();
        ellipse(center.x, center.y, eyeRadius * 2);
    
        // Draw small circle
        fill("blue");
        noStroke();
        ellipse(pupilPositions[i].x, pupilPositions[i].y, pupilRadius * 2);

        
  }






    fill(117,185,189);
    for(let lid of lids){
        if (isBlinking ){
            lid.y = lid.y + (lid.closedY -lid.y)* .3;
        } else{
            lid.y = lid.y + (lid.openY - lid.y) * .3;
        }
        rect(lid.x, lid.y, eyeRadius * 2, eyeRadius);
    }
    // //let y;
    // if (isBlinking ){
    //     y = height/ 2;
    // } else{
    //     y = height/ 2 + eyeRadius;
    // }
    //rect(width/ 2 - eyeRadius * 2, y, eyeRadius * 2, eyeRadius);
    //rect(width/ 2, height/ 2, eyeRadius * 2, eyeRadius);


    
    //fill("white");
    //circle(600,400,250)//left eye
    //circle(860,400,250)//right eye
    

    

    //let distance = dist(mouseX, mouseY, 600, 400);


   // circle(x,mouseY,100)




    //circle(mouseX,mouseY,100)
    
    
}

