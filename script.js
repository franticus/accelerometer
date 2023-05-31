const sphere1 = document.getElementById('sphere1');

let x1 = 1000;
let y1 = 1000;
let vx1 = 0;
let vy1 = 0;
let ax1 = 0;
let ay1 = 0;

if (window.DeviceMotionEvent != undefined) {
  window.ondevicemotion = function (e) {
    ax1 = e.accelerationIncludingGravity.x * 5;
    ay1 = e.accelerationIncludingGravity.y * 5;
  };
  setInterval(function () {
    const landscapeOrientation = window.innerWidth / window.innerHeight > 1;
    if (landscapeOrientation) {
      vx1 = vx1 + ay1;
      vy1 = vy1 + ax1;
    } else {
      vy1 = vy1 - ay1;
      vx1 = vx1 + ax1;
    }
    vx1 = vx1 * 0.98;
    vy1 = vy1 * 0.98;
    y1 = parseInt(y1 + vy1 / 50);
    x1 = parseInt(x1 + vx1 / 50);

    boundingBoxCheck();

    sphere1.style.top = y1 + 'px';
    sphere1.style.left = x1 + 'px';
  }, 1000);
}
function boundingBoxCheck() {
  if (x1 < 0) {
    x1 = 0;
    vx1 = -vx1;
  }
  if (y1 < 0) {
    y1 = 0;
    vy1 = -vy1;
  }
  if (x1 > document.documentElement.clientWidth - 50) {
    x1 = document.documentElement.clientWidth - 50;
    vx1 = -vx1;
  }
  if (y1 > document.documentElement.clientHeight - 50) {
    y1 = document.documentElement.clientHeight - 50;
    vy1 = -vy1;
  }
}