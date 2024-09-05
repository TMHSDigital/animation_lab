const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function animate() {
    ctx.fillStyle = `rgba(${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)}, ${randomIntFromRange(0, 255)}, 0.5)`;
    ctx.fillRect(randomIntFromRange(0, canvas.width), randomIntFromRange(0, canvas.height), randomIntFromRange(20, 100), randomIntFromRange(20, 100));

    requestAnimationFrame(animate);
}

animate();
