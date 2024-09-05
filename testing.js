// Select the canvas element and set up the context for 2D drawing
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define variables for a simple animation (moving circle)
let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 30;
let dx = 2; // Change in x (speed)
let dy = 2; // Change in y (speed)

// Function to animate the circle
function animate() {
    // Clear the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();

    // Move the circle
    x += dx;
    y += dy;

    // Check for collisions with the edges of the canvas
    if (x + radius > canvas.width || x - radius < 0) {
        dx = -dx; // Reverse direction on the x axis
    }
    if (y + radius > canvas.height || y - radius < 0) {
        dy = -dy; // Reverse direction on the y axis
    }

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
