const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let radius = 30;
let maxRadius = 100;
let minRadius = 30;
let dr = 1; // Change in radius

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    radius += dr;

    if (radius >= maxRadius || radius <= minRadius) {
        dr = -dr; // Reverse the expansion and contraction
    }

    requestAnimationFrame(animate);
}

animate();
