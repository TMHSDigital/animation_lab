# Animations Testing Lab

Welcome to the **Animations Testing Lab**! This repository is designed to provide an interactive and fun environment to test various animations using HTML5 Canvas and **Three.js**. The animations are displayed on different web pages and serve as a canvas for experimenting with creative animation techniques.

This project is hosted on **GitHub Pages**, allowing users to explore the animations directly from the browser.

## Project Overview

### Features

- **Multiple Animation Pages**: Test a variety of animations on dedicated HTML pages, each using the canvas element and showcasing unique animations.
- **Interactive Animations**: All animations are driven by JavaScript, offering real-time, interactive animations including:
  - A spinning tetrahedron with color shifts.
  - A pulsating circle that expands and contracts.
  - Randomly exploding squares that fade away over time.
  - A homepage with a 3D spinning cube using **Three.js**.
- **Separation of Concerns**: The JavaScript logic for animations is separated into individual files for easier management and customization.

### Technology Stack

- **HTML5 Canvas**: The animations are rendered using the canvas element, making it easy to manipulate and animate elements in real-time.
- **JavaScript**: Core logic for the animations, including dynamic color changes, expanding shapes, and object movement.
- **Three.js**: A powerful JavaScript library that helps render 3D graphics in the browser. It’s used for the 3D spinning cube on the homepage.
- **CSS**: Styles are handled using site-wide styles in `global.css` and page-specific styles in `home.css`.

## Table of Contents

- [Project Overview](#project-overview)
- [Repository Structure](#repository-structure)
- [Setup and Usage](#setup-and-usage)

## Repository Structure

Here’s a breakdown of the folder and file structure in this repository:

```plaintext
/
├── .github/workflows
│   └── deploy.yml                # GitHub Actions deployment script for GitHub Pages
├── canvas1.html                  # HTML for Animation 1: Spinning Tetrahedron
├── canvas2.html                  # HTML for Animation 2: Pulsating Circle
├── canvas3.html                  # HTML for Animation 3: Random Exploding Squares
├── global.css                    # Global styles applied across all animation pages
├── home.css                      # Homepage-specific styles
├── index.html                    # Homepage with a 3D rotating cube using Three.js
├── testing1.js                   # JavaScript for Animation 1 (Tetrahedron)
├── testing2.js                   # JavaScript for Animation 2 (Pulsating Circle)
├── testing3.js                   # JavaScript for Animation 3 (Exploding Squares)
├── threejs-animation.js          # JavaScript for the Three.js cube animation on the homepage
└── README.md                     # Documentation for the repository (this file)
```

### Key Files

- **`index.html`**: The homepage of the site, which contains links to the animation pages and displays a 3D spinning cube (powered by **Three.js**).
- **`global.css`**: Global styles that are applied to the animation pages (like `canvas1.html`, `canvas2.html`, etc.).
- **`home.css`**: Specific styles for the homepage (where the 3D cube is rendered).
- **`testing1.js`, `testing2.js`, `testing3.js`**: JavaScript files that power the unique animations on the respective pages.
- **`threejs-animation.js`**: Contains the logic for the **Three.js** cube animation that is shown on the homepage.

### Animations Overview

1. **Animation 1 (Spinning Tetrahedron)**:
   - File: `canvas1.html` + `testing1.js`
   - A colorful spinning tetrahedron (a 3-sided pyramid) that shifts colors over time.

2. **Animation 2 (Pulsating Circle)**:
   - File: `canvas2.html` + `testing2.js`
   - A dynamic circle that expands and contracts with pulsating color changes.

3. **Animation 3 (Random Exploding Squares)**:
   - File: `canvas3.html` + `testing3.js`
   - Randomly generated squares explode on the canvas and slowly fade away.

4. **Homepage (3D Spinning Cube)**:
   - File: `index.html` + `threejs-animation.js`
   - A 3D cube that rotates continuously, powered by **Three.js**. The cube’s "electrified" effect makes it glow, and its speed increases as it becomes more energized.

## Setup and Usage

### Prerequisites

Before you begin, ensure you have the following tools installed:
- **Git**: Version control for cloning the repository.
- **Modern Web Browser**: Supports HTML5 and JavaScript for running the animations (e.g., Chrome, Firefox).

### Cloning the Repository

To clone this repository locally, use the following command:

```bash
git clone https://github.com/TMHSDigital/animation-lab.git
```

### Running Locally

Once you’ve cloned the repository, you can open the `index.html` file in a browser to view the homepage. From there, you can navigate to the various animations. Each HTML page references its corresponding JavaScript file to handle the canvas animations.

1. **Opening the Homepage**:
   - Open `index.html` in any modern browser.
   - You’ll see a 3D spinning cube on the homepage, along with links to the other animation pages.

2. **Navigating to Other Animations**:
   - Click any of the links on the homepage to view animations:
     - [View Animation 1](canvas1.html)
     - [View Animation 2](canvas2.html)
     - [View Animation 3](canvas3.html)

## Deploying to GitHub Pages

This project is set up to automatically deploy to **GitHub Pages** using **GitHub Actions**. The deployment workflow is defined in `.github/workflows/deploy.yml`.


---

This project is a great starting point for experimenting with canvas animations and **Three.js**. Feel free to modify the animations, add new ones, or experiment with advanced techniques.

For any questions, issues, or suggestions, feel free to open an issue in this repository!

