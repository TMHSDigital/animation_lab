// Setup the canvas
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Tetrahedron rotation and color variables
let rotation = 0;
let colorShift = 0;

// Animation function
function animate() {
    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate color shift for the animation
    colorShift += 2;
    if (colorShift > 360) colorShift = 0;
    const color = `hsl(${colorShift}, 100%, 50%)`;

    // Set the center of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const size = 100; // Size of the tetrahedron

    // Start drawing the tetrahedron
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);

    // Draw each side of the tetrahedron
    ctx.beginPath();
    ctx.moveTo(-size, -size);
    ctx.lineTo(size, -size);
    ctx.lineTo(0, size);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-size, -size);
    ctx.lineTo(0, size);
    ctx.lineTo(-size, size);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();

    // Increment the rotation for the next frame
    rotation += 0.01;

    // Loop the animation
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
