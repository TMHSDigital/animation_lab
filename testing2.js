// Setup the canvas
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables for circle animation
let radius = 50;
let expanding = true;
let colorShift = 0;

// Animation function
function animate() {
    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Calculate color shift
    colorShift += 2;
    if (colorShift > 360) colorShift = 0;
    const color = `hsl(${colorShift}, 100%, 50%)`;

    // Draw the circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    // Adjust radius for expanding and contracting effect
    if (expanding) {
        radius += 1;
        if (radius > 150) expanding = false;
    } else {
        radius -= 1;
        if (radius < 50) expanding = true;
    }

    // Loop the animation
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
