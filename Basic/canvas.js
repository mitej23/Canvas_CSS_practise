var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

c.beginPath();
c.arc(200, 200, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

function animate() {
  requestAnimationFrame(animate);
  c.beginPath();
  c.arc(200, 200, 30, 0, Math.PI * 2, false);
  c.strokeStyle = "blue";
  c.stroke();
  // c.clearRect(0, 0, innerWidth, innerHeight);
  // c.beginPath();
  // c.arc(200, 200, 30, 0, Math.PI * 2, false);
  // c.strokeStyle = "blue";
  // c.stroke();
}

animate();

window.onresize = function () {
  canvas.width = window.innerWidth - 100;
  canvas.height = window.innerHeight - 100;
};
