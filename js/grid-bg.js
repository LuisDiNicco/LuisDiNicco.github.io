const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');

let width, height;
const gridSize = 40; 
const dots = []; 

function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initDots();
}

function initDots() {
    dots.length = 0; 
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);

    for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
            dots.push({
                x: i * gridSize,
                y: j * gridSize,
                // Ciclo de vida aleatorio
                life: Math.random() * Math.PI * 2, 
                speed: 0.01 + Math.random() * 0.02, 
                maxAlpha: 0.1 + Math.random() * 0.5 
            });
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    // Dibujar líneas tenues
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    
    for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Dibujar puntos vivos
    dots.forEach(dot => {
        dot.life += dot.speed;
        // Efecto de respiración (aparecer/desaparecer)
        let alpha = (Math.sin(dot.life) + 1) / 2 * dot.maxAlpha;
        if (Math.sin(dot.life) < -0.5) alpha = 0;

        if (alpha > 0) {
            ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`; 
            ctx.beginPath();
            const size = 1 + (alpha * 1.5);
            ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();