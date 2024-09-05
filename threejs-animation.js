// Scene setup
const width = window.innerWidth;
const height = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, width / height, 0.01, 10);
camera.position.z = 1;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

// Create a powerful-looking material
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00, // Neon green color
    emissive: 0x0a0a0a, // Slight emission for a glow effect
    emissiveIntensity: 1.5, // Higher intensity for a powerful effect
    metalness: 0.7, // Make it metallic
    roughness: 0.3 // Keep some roughness
});

// Cube geometry
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Lighting to emphasize the "electric" look
const pointLight = new THREE.PointLight(0x00ff00, 2, 50); // Intense green light
pointLight.position.set(1, 1, 1);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040); // Subtle ambient light
scene.add(ambientLight);

// Variable for energy level (affects speed and intensity)
let energyLevel = 0.5; // Start at a mid-level energy

// Animation loop with increasing energy and speed
function animate(time) {
    energyLevel += 0.002; // Increase energy over time
    if (energyLevel > 5) energyLevel = 0.5; // Reset after a certain point

    // Make the cube rotate faster the more energized it gets
    mesh.rotation.x = time / (1000 / energyLevel);
    mesh.rotation.y = time / (500 / energyLevel);

    // Increase glow effect with energy level
    material.emissiveIntensity = 0.5 + energyLevel * 0.3; // Make the glow more intense

    // Render the scene
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// Handle window resize to adjust canvas size
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});
