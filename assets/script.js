$(document).ready(function(){
  drawRouletteWheel();
})

var colors = ["#B8D430", "#3AB745", "#029990", "#3501CB",
                 "#2E2C75", "#673A7E", "#CC0071", "#F80120",
                 "#F35B20", "#FB9A00", "#FFCC00", "#FEF200"];

var startAngle = 0;
var ctx;
var numberOfSlices = 12;
var arc = (2 * Math.PI) / numberOfSlices;

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 200;
    var insideRadius = 125;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var origin = Math.floor(canvas.width / 2);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    for(var i = 0; i < numberOfSlices; i++) {
      var angle = startAngle + i * arc;
      ctx.fillStyle = colors[i];

      ctx.beginPath();

      // 250 is center of the 500x500 square
      ctx.arc(origin, origin, outsideRadius, angle, angle + arc, false);
      ctx.arc(origin, origin, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();
    }
  }
}
