/**
 * BACKGROUND MODULE
 * Maneja la grilla animada, los puntos y el efecto parallax.
 */

const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');

let width, height;
const gridSize = 40; 
const speedFactor = 0.3; 

// Función pseudo-aleatoria determinista
function pseudoRandom(x, y) {
    let n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123;
    return n - Math.floor(n);
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    const scrollY = window.scrollY;
    const offsetY = (scrollY * speedFactor) % gridSize;

    // Líneas tenues
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    // Verticales
    for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    // Horizontales (con parallax)
    for (let y = -gridSize; y <= height; y += gridSize) {
        const drawY = y - offsetY;
        ctx.moveTo(0, drawY);
        ctx.lineTo(width, drawY);
    }
    ctx.stroke();

    // Puntos (con parallax y ciclo de vida)
    const time = Date.now() / 500;
    
    for (let x = 0; x <= width; x += gridSize) {
        for (let y = -gridSize; y <= height; y += gridSize) {
            
            // Calculamos fila absoluta para consistencia visual
            const absoluteRowIndex = Math.floor((scrollY * speedFactor + y) / gridSize);
            const colIndex = Math.floor(x / gridSize);

            const hasDot = pseudoRandom(colIndex, absoluteRowIndex) > 0.5;

            if (hasDot) {
                const phase = pseudoRandom(colIndex + 100, absoluteRowIndex + 100) * Math.PI * 2;
                const maxAlpha = 0.1 + pseudoRandom(colIndex, absoluteRowIndex) * 0.5;
                
                let alpha = (Math.sin(time + phase) + 1) / 2 * maxAlpha;
                if (Math.sin(time + phase) < -0.5) alpha = 0;

                if (alpha > 0) {
                    ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`; 
                    ctx.beginPath();
                    const drawY = y - offsetY;
                    const size = 1 + (alpha * 3);
                    ctx.arc(x, drawY, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
    }
    requestAnimationFrame(draw);
}

// Inicialización del Background
window.addEventListener('resize', resize);
// Iniciamos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    resize();
    draw();
});