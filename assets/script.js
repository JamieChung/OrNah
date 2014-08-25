$(document).ready(function(){
  drawRouletteWheel();
})

var colors = ["#d16205", "#d15420", "#d1473a", "#d13a54",
                 "#d12d6f", "#d12089", "#d113a3", "#d106be"];

var startAngle = 0;
var ctx;
var numberOfSlices = 10;
var arc = (2 * Math.PI) / numberOfSlices;

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var insideRadius = 125;
    var textRadius = 155;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Based on the size of the canvas, let's get the origin coordinate
    var origin = Math.floor(canvas.width / 2);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.font = '20px Helvetica, Arial';

    for(var i = 0; i < numberOfSlices; i++) {
      var angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];

      ctx.beginPath();

      // 250 is center of the 500x500 square
      ctx.arc(origin, origin, outsideRadius, angle, angle + arc, false);
      ctx.arc(origin, origin, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      // Let's begin to draw the labels on the slices
      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius,
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = "Nah";
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    }
  }
}
