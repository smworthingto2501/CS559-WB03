// we do enable typescript type checking - see
// https://graphics.cs.wisc.edu/Courses/559-sp2020/pages/typed-js/
// and
// https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
// @ts-check
/* Set options for jshint (my preferred linter)
 * disable the warning about using bracket rather than dot
 * even though dot is better
 * https://stackoverflow.com/questions/13192466/how-to-suppress-variable-is-better-written-in-dot-notation
 */
/* jshint -W069, -W141, esversion:6 */
export {};
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
const ctx = canvas.getContext("2d");
/**
 * the animation loop gets a timestamp from requestAnimationFrame
 * 
 * @param {DOMHighResTimeStamp} timestamp 
 */
function init() {
  window.requestAnimationFrame(loop);
}
init();

function loop(timestamp) {
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 600, 600); // clear canvas
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  ctx.translate(300, 300);

  //Copter
  var time = new Date();
  ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
  ctx.translate(95, 0);
  draw();
  ctx.restore();

  //Path
  ctx.beginPath();
  ctx.arc(300, 300, 105, 0, Math.PI * 2, false);

  window.requestAnimationFrame(loop);
}
  
function draw(){
    //propellors
        prop1.rotate += 0.01;
        ctx.save();
        ctx.fillStyle = "salmon";
        ctx.translate(prop1.xPosition, prop1.yPosition);
        ctx.rotate(prop1.rotate);
        ctx.fillRect(-prop1.width/2, -prop1.height/2, prop1.width, prop1.height);
        ctx.restore();
    
        prop2.rotate += 0.05;
        ctx.save();
        ctx.fillStyle = "salmon";
        ctx.translate(prop2.xPosition, prop2.yPosition);
        ctx.rotate(prop2.rotate);
        ctx.fillRect(-prop2.width/2, -prop2.height/2, prop2.width, prop2.height);
        ctx.restore();
    
        prop3.rotate += 0.005;
        ctx.save();
        ctx.fillStyle = "salmon";
        ctx.translate(prop3.xPosition, prop3.yPosition);
        ctx.rotate(prop3.rotate);
        ctx.fillRect(-prop3.width/2, -prop3.height/2, prop3.width, prop3.height);
        ctx.restore();
    
        prop4.rotate += 0.025;
        ctx.save();
        ctx.fillStyle = "salmon";
        ctx.translate(prop4.xPosition, prop4.yPosition);
        ctx.rotate(prop4.rotate);
        ctx.fillRect(-prop4.width/2, -prop4.height/2, prop4.width, prop4.height);
        ctx.restore();

    //body
        ctx.beginPath();
        ctx.moveTo(150, 60);
        ctx.lineTo(100, 75);
        ctx.lineTo(120, 25);
        ctx.fillStyle= '#EFA60F';
        ctx.fill();

    //arms
        ctx.rect(120, 60, 10, 50);
        var cx     = 100 + 0.5 * 10;   // x of shape center
        var cy     = 60 + 0.5 * 50;  // y of shape center
        ctx.translate(cx, cy);              //translate to center of shape
        ctx.rotate( (Math.PI / 180) * 90);  //rotate 25 degrees.
        ctx.translate(-cx, -cy);    
        ctx.rect(70, 70, 10, 50);
        ctx.rect(70, 10, 10, 50);
        var cx     = 100 + 0.5 * 10;   // x of shape center
        var cy     = 60 + 0.5 * 50;  // y of shape center
        ctx.translate(cx, cy);              //translate to center of shape
        ctx.rotate( (Math.PI / 180) * 90);  //rotate 25 degrees.
        ctx.translate(-cx, -cy);    
        ctx.rect(80, 125, 10, 50);
        ctx.fillStyle= '#EF5E0F';
        ctx.fill();
}

class Prop {
    constructor({
      width,
      height,
      rotate = 0,
      xPosition = canvas.width / 2,
      yPosition = canvas.height / 2
    }) {
      this.width = width;
      this.height = height;
      this.rotate = rotate;
      this.xPosition = xPosition;
      this.yPosition = yPosition;
    }
}
const prop1 = new Prop({ width: 10, height: 30, xPosition: 70, yPosition: 55});
const prop2 = new Prop({ width: 10, height: 30,xPosition: 125, yPosition: 110});
const prop3 = new Prop({ width: 10, height: 30,xPosition: 125, yPosition: -5});
const prop4 = new Prop({ width: 10, height: 30,xPosition: 180, yPosition: 55});
  

// and then you would start the loop with:
window.requestAnimationFrame(loop);