/**
 * BACKGROUND MODULE
 * Grilla Perfecta + Puntos Orgánicos (Caos Determinista)
 * Refactorizado: Sin números mágicos, todo en BG_CONFIG.
 */

const BG_CONFIG = Object.freeze({
    GRID: {
        SIZE: 40,               // Tamaño de la celda (px) - NO CAMBIAR para mantener geometría
        LINE_COLOR: 'rgba(255, 255, 255, 0.05)',
        LINE_WIDTH: 1
    },
    ANIMATION: {
        PARALLAX_SPEED: 0.4,    // Velocidad del desplazamiento vertical (0.3 = 30%)
        GLOBAL_SPEED: 0.7,        // Multiplicador de velocidad del tiempo
        REFRESH_DELAY: 100      // ms de espera al redimensionar
    },
    DOTS: {
        CHANCE: 0.45,           // Probabilidad de existencia (0.0 a 1.0)
        COLOR_RGB: '74, 222, 128', // Color base (Tailwind green-400)
        
        // BG_CONFIGuración de "Vida" (Aleatoriedad)
        MIN_SPEED: 0.5,         // Velocidad mínima de parpadeo
        MAX_SPEED: 2.0,         // Velocidad máxima (para desincronizar)
        
        MIN_GROWTH: 1.0,        // Crecimiento extra mínimo
        MAX_GROWTH: 3,        // Crecimiento extra máximo (Puntos "Nova")
        
        BASE_SIZE: 1,         // Tamaño base del punto en px
        
        // BG_CONFIGuración de ciclo (Seno)
        CYCLE_OFFSET: -0.2,     // Recorte de onda (negativo = pasa más tiempo apagado)
        INTENSITY_MULT: 1.25,   // Multiplicador para recuperar brillo tras el recorte
        NOVA_BOOST: 0.8         // Cuanto brillo extra ganan los puntos grandes
    },
    PRNG: { A: 12.9898, B: 78.233, C: 43758.5453123 }
});

const canvas = document.getElementById('grid-canvas');
const ctx = canvas.getContext('2d');

let width, height;

// Función pseudo-aleatoria determinista
function pseudoRandom(x, y) {
    let n = Math.sin(x * BG_CONFIG.PRNG.A + y * BG_CONFIG.PRNG.B) * BG_CONFIG.PRNG.C;
    return n - Math.floor(n);
}

function resize() {
    width = window.innerWidth;
    // CRÍTICO: Usar window.innerHeight mantiene la relación de aspecto 1:1 con la pantalla.
    // Usar scrollHeight aquí es lo que causaba el achatamiento.
    height = window.innerHeight; 
    
    canvas.width = width;
    canvas.height = height;
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    
    const scrollY = window.scrollY;
    const offsetY = (scrollY * BG_CONFIG.ANIMATION.PARALLAX_SPEED) % BG_CONFIG.GRID.SIZE;

    // ==========================================
    // 1. DIBUJAR LÍNEAS (Estructura Fija)
    // ==========================================
    ctx.strokeStyle = BG_CONFIG.GRID.LINE_COLOR;
    ctx.lineWidth = BG_CONFIG.GRID.LINE_WIDTH;
    ctx.beginPath();
    
    // Verticales
    for (let x = 0; x <= width; x += BG_CONFIG.GRID.SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    // Horizontales (con parallax)
    for (let y = -BG_CONFIG.GRID.SIZE; y <= height; y += BG_CONFIG.GRID.SIZE) {
        const drawY = y - offsetY;
        ctx.moveTo(0, drawY);
        ctx.lineTo(width, drawY);
    }
    ctx.stroke();

    // ==========================================
    // 2. DIBUJAR PUNTOS (Lógica Orgánica)
    // ==========================================
    
    // Tiempo en segundos
    const t = Date.now() / 1000 * BG_CONFIG.ANIMATION.GLOBAL_SPEED;
    
    for (let x = 0; x <= width; x += BG_CONFIG.GRID.SIZE) {
        for (let y = -BG_CONFIG.GRID.SIZE; y <= height; y += BG_CONFIG.GRID.SIZE) {
            
            // Índices para mantener identidad visual al scrollear
            const absoluteRowIndex = Math.floor((scrollY * BG_CONFIG.ANIMATION.PARALLAX_SPEED + y) / BG_CONFIG.GRID.SIZE);
            const colIndex = Math.floor(x / BG_CONFIG.GRID.SIZE);

            // Filtro de existencia
            if (pseudoRandom(colIndex, absoluteRowIndex) > BG_CONFIG.DOTS.CHANCE) {
                
                // --- Generación de atributos aleatorios únicos ---
                // Usamos diferentes "offsets" (+100, +200, +300) para obtener números distintos de la misma semilla
                
                // 1. Velocidad única (Rompe el efecto GIF)
                const speedRand = pseudoRandom(colIndex + 100, absoluteRowIndex + 100);
                const mySpeed = BG_CONFIG.DOTS.MIN_SPEED + (speedRand * (BG_CONFIG.DOTS.MAX_SPEED - BG_CONFIG.DOTS.MIN_SPEED));

                // 2. Fase única (Desincronización)
                const phase = pseudoRandom(colIndex + 200, absoluteRowIndex + 200) * (Math.PI * 2);
                
                // 3. Potencial de crecimiento (Algunos crecen mucho, otros poco)
                const growthRand = pseudoRandom(colIndex + 300, absoluteRowIndex + 300);
                const myGrowth = BG_CONFIG.DOTS.MIN_GROWTH + (growthRand * (BG_CONFIG.DOTS.MAX_GROWTH - BG_CONFIG.DOTS.MIN_GROWTH));

                // --- Cálculo del Ciclo ---
                // Onda senoidal basada en el tiempo y la velocidad propia
                let cycle = Math.sin((t * mySpeed) + phase);

                // Recorte para generar pausas (estar apagado)
                let activeLevel = cycle + BG_CONFIG.DOTS.CYCLE_OFFSET; 

                if (activeLevel > 0) {
                    // Normalizamos y recuperamos intensidad
                    let alpha = activeLevel * BG_CONFIG.DOTS.INTENSITY_MULT; 
                    
                    // Ajuste de brillo máximo: Los que crecen más, brillan más
                    const maxAlphaBase = 0.2 + (growthRand * BG_CONFIG.DOTS.NOVA_BOOST); 
                    alpha *= maxAlphaBase;

                    if (alpha > 0.01) {
                        ctx.fillStyle = `rgba(${BG_CONFIG.DOTS.COLOR_RGB}, ${alpha})`; 
                        ctx.beginPath();
                        const drawY = y - offsetY;
                        
                        // Tamaño final = Base + (Intensidad actual * Potencial de crecimiento propio)
                        const size = BG_CONFIG.DOTS.BASE_SIZE + (alpha * myGrowth);
                        
                        ctx.arc(x, drawY, size, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }
        }
    }
    requestAnimationFrame(draw);
}

// Inicialización
window.addEventListener('resize', resize);
window.addEventListener('load', () => {
    resize();
    setTimeout(resize, BG_CONFIG.ANIMATION.REFRESH_DELAY);
});
draw();