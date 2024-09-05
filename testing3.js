// Setup the canvas
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create an array to hold square particles
let squares = [];

// Function to generate random integers
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to generate new squares
function createSquare() {
    const size = randomIntFromRange(10, 50);
    const x = randomIntFromRange(0, canvas.width);
    const y = randomIntFromRange(0, canvas.height);
    const colorShift = randomIntFromRange(0, 360);
    const color = `hsl(${colorShift}, 100%, 50%)`;

    return {
        x: x,
        y: y,
        size: size,
        color: color,
        alpha: 1, // opacity of square
        fade: 0.02 // speed of fading
    };
}

// Animation function
function animate() {
    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new squares at a random interval
    if (Math.random() < 0.1) {
        squares.push(createSquare());
    }

    // Loop over squares and draw them
    squares.forEach((square, index) => {
        // Set the square color with its opacity
        ctx.fillStyle = `rgba(${parseInt(square.color.slice(4, 7))},${square.alpha})`;
        ctx.fillRect(square.x, square.y, square.size, square.size);

        // Reduce opacity to create fade-out effect
        square.alpha -= square.fade;

        // Remove square if it's fully faded
        if (square.alpha <= 0) {
            squares.splice(index, 1);
        }
    });

    // Loop the animation
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();
