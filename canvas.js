var pen = document.getElementById("artboard")


var context  = pen.getContext("2d")
//draw the line
context.moveTo(0,0)
context.lineTo(640, 480)
context.stroke()

//draw the circle
context.beginPath()
context.arc(100, 100, 50, 270, 0, false)
context.stroke()


//draw the smiley
context.beginPath();
context.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
context.moveTo(110, 75);
context.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
context.moveTo(65, 65);
context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
context.moveTo(95, 65);
context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
context.stroke();


//draw text

context.font = '48px serif';
context.strokeText('Hello world', 150, 100);