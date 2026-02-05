// src/scripts/matrix.ts

// Definimos interfaces para evitar "magic numbers" y errores de tipo
interface GridConfig {
  SIZE: number;
  LINE_COLOR: string;
  LINE_WIDTH: number;
}

interface AnimationConfig {
  PARALLAX_SPEED: number;
  GLOBAL_SPEED: number;
  REFRESH_DELAY: number;
}

interface DotConfig {
  CHANCE: number;
  COLOR_RGB: string;
  MIN_SPEED: number;
  MAX_SPEED: number;
  MIN_GROWTH: number;
  MAX_GROWTH: number;
  BASE_SIZE: number;
  CYCLE_OFFSET: number;
  INTENSITY_MULT: number;
  NOVA_BOOST: number;
}

interface PrngConfig {
  A: number;
  B: number;
  C: number;
}

// Configuración Inmutable
const BG_CONFIG = {
  GRID: {
    SIZE: 40,
    LINE_COLOR: 'rgba(255, 255, 255, 0.05)',
    LINE_WIDTH: 1
  } as GridConfig,
  ANIMATION: {
    PARALLAX_SPEED: 0.4,
    GLOBAL_SPEED: 0.7,
    REFRESH_DELAY: 100
  } as AnimationConfig,
  DOTS: {
    CHANCE: 0.45,
    COLOR_RGB: '74, 222, 128',
    MIN_SPEED: 0.5,
    MAX_SPEED: 2.0,
    MIN_GROWTH: 1.0,
    MAX_GROWTH: 3,
    BASE_SIZE: 1,
    CYCLE_OFFSET: -0.2,
    INTENSITY_MULT: 1.25,
    NOVA_BOOST: 0.8
  } as DotConfig,
  PRNG: { A: 12.9898, B: 78.233, C: 43758.5453123 } as PrngConfig
} as const; // 'as const' hace que sea read-only profundo

// Variables de estado encapsuladas en el módulo
let canvas: HTMLCanvasElement | null = null;
let ctx: CanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let animationFrameId: number;
let resizeTimeout: number;

function pseudoRandom(x: number, y: number): number {
  let n = Math.sin(x * BG_CONFIG.PRNG.A + y * BG_CONFIG.PRNG.B) * BG_CONFIG.PRNG.C;
  return n - Math.floor(n);
}

function resize() {
  if (!canvas) return;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function draw() {
  if (!ctx || !canvas) return;

  ctx.clearRect(0, 0, width, height);

  const scrollY = window.scrollY;
  const offsetY = (scrollY * BG_CONFIG.ANIMATION.PARALLAX_SPEED) % BG_CONFIG.GRID.SIZE;

  // 1. DIBUJAR LÍNEAS
  ctx.strokeStyle = BG_CONFIG.GRID.LINE_COLOR;
  ctx.lineWidth = BG_CONFIG.GRID.LINE_WIDTH;
  ctx.beginPath();

  // Verticales
  for (let x = 0; x <= width; x += BG_CONFIG.GRID.SIZE) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  // Horizontales
  for (let y = -BG_CONFIG.GRID.SIZE; y <= height; y += BG_CONFIG.GRID.SIZE) {
    const drawY = y - offsetY;
    ctx.moveTo(0, drawY);
    ctx.lineTo(width, drawY);
  }
  ctx.stroke();

  // 2. DIBUJAR PUNTOS
  const t = Date.now() / 1000 * BG_CONFIG.ANIMATION.GLOBAL_SPEED;

  for (let x = 0; x <= width; x += BG_CONFIG.GRID.SIZE) {
    for (let y = -BG_CONFIG.GRID.SIZE; y <= height; y += BG_CONFIG.GRID.SIZE) {
      
      const absoluteRowIndex = Math.floor((scrollY * BG_CONFIG.ANIMATION.PARALLAX_SPEED + y) / BG_CONFIG.GRID.SIZE);
      const colIndex = Math.floor(x / BG_CONFIG.GRID.SIZE);

      if (pseudoRandom(colIndex, absoluteRowIndex) > BG_CONFIG.DOTS.CHANCE) {
        
        const speedRand = pseudoRandom(colIndex + 100, absoluteRowIndex + 100);
        const mySpeed = BG_CONFIG.DOTS.MIN_SPEED + (speedRand * (BG_CONFIG.DOTS.MAX_SPEED - BG_CONFIG.DOTS.MIN_SPEED));
        const phase = pseudoRandom(colIndex + 200, absoluteRowIndex + 200) * (Math.PI * 2);
        const growthRand = pseudoRandom(colIndex + 300, absoluteRowIndex + 300);
        const myGrowth = BG_CONFIG.DOTS.MIN_GROWTH + (growthRand * (BG_CONFIG.DOTS.MAX_GROWTH - BG_CONFIG.DOTS.MIN_GROWTH));

        let cycle = Math.sin((t * mySpeed) + phase);
        let activeLevel = cycle + BG_CONFIG.DOTS.CYCLE_OFFSET;

        if (activeLevel > 0) {
          let alpha = activeLevel * BG_CONFIG.DOTS.INTENSITY_MULT;
          const maxAlphaBase = 0.2 + (growthRand * BG_CONFIG.DOTS.NOVA_BOOST);
          alpha *= maxAlphaBase;

          if (alpha > 0.01) {
            ctx.fillStyle = `rgba(${BG_CONFIG.DOTS.COLOR_RGB}, ${alpha})`;
            ctx.beginPath();
            const drawY = y - offsetY;
            const size = BG_CONFIG.DOTS.BASE_SIZE + (alpha * myGrowth);
            
            ctx.arc(x, drawY, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
  }
  
  animationFrameId = requestAnimationFrame(draw);
}

export function initMatrixBg() {
  const canvasEl = document.getElementById('grid-canvas') as HTMLCanvasElement;
  if (!canvasEl) return;

  canvas = canvasEl;
  ctx = canvas.getContext('2d');

  resize();
  draw();

  window.addEventListener('resize', () => {
    resize();
    clearTimeout(resizeTimeout);
    resizeTimeout = window.setTimeout(resize, BG_CONFIG.ANIMATION.REFRESH_DELAY);  });
}