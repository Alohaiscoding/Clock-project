var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
drawcClock();

function drawcClock() {
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "White";
  ctx.fill();
}
