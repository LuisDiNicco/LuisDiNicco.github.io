/**
 * FORM & SECURITY MODULE
 * Maneja la ofuscación de email, validaciones y envío AJAX.
 * Refactorizado: Constantes centralizadas en FM_CONFIG.
 */

// --- FM_CONFIGURACIÓN CENTRALIZADA ---
const FM_CONFIG = Object.freeze({
    CONTACT: {
        USER: 'luis.dinicco',
        DOMAIN: 'ejemplo.com'
    },
    SELECTORS: {
        FORM: 'contact-form',
        EMAIL_LINK: 'email-link',
        STATUS_DIV: 'form-status',
        SUBMIT_BTN: 'submit-btn',
        LOADER_SPAN: 'span'
    },
    UI: {
        CLASSES: {
            HIDDEN: 'hidden',
            LOADING_ANIM: 'animate-pulse',
            // Clases base para el mensaje de estado (reset)
            STATUS_BASE: 'mt-4 font-mono text-sm border-l-2 pl-2 transition-all duration-300',
            STATUS_SUCCESS: ['text-green-400', 'border-green-500'],
            STATUS_ERROR: ['text-red-400', 'border-red-500']
        },
        MESSAGES: {
            BTN_SENDING: 'Enviando paquetes...',
            SUCCESS: '> Mensaje enviado correctamente. Code: 200 [OK]',
            ERR_SECURITY: '⚠️ Error de seguridad: Caracteres no permitidos detectados.',
            ERR_EMAIL: '⚠️ Por favor ingresa un email válido.',
            ERR_CONNECTION: '> Error: El servidor rechazó la conexión. Intenta nuevamente.',
            ERR_NETWORK: '> Error crítico: No se pudo conectar con el servidor.'
        }
    },
    REGEX: {
        // XSS Básico: Detecta scripts, iframes y handlers inline
        DANGEROUS: /<script\b[^>]*>|javascript:|on\w+=|<iframe/i,
        // Validación estándar de email
        EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
});

/* 1. PROTECCIÓN DE EMAIL (Anti-Scraping) */
function revealContactInfo() {
    // Usamos FM_CONFIG para construir el email
    const user = FM_CONFIG.CONTACT.USER; 
    const domain = FM_CONFIG.CONTACT.DOMAIN; 
    
    const emailLink = document.getElementById(FM_CONFIG.SELECTORS.EMAIL_LINK);
    
    if (emailLink) {
        const fullEmail = `${user}@${domain}`;
        emailLink.textContent = fullEmail;
        emailLink.href = `mailto:${fullEmail}`;
        
        // Quitamos la animación de carga
        const loader = emailLink.querySelector(FM_CONFIG.SELECTORS.LOADER_SPAN);
        if(loader) loader.classList.remove(FM_CONFIG.UI.CLASSES.LOADING_ANIM);
    }
}

/* 2. FEEDBACK VISUAL (Toasts) */
function showStatus(msg, type) {
    const statusDiv = document.getElementById(FM_CONFIG.SELECTORS.STATUS_DIV);
    if (!statusDiv) return;

    statusDiv.classList.remove(FM_CONFIG.UI.CLASSES.HIDDEN);
    statusDiv.textContent = msg;
    
    // Reseteamos clases base desde FM_CONFIG
    statusDiv.className = FM_CONFIG.UI.CLASSES.STATUS_BASE;

    if (type === 'success') {
        // Spread operator (...) para agregar múltiples clases del array
        statusDiv.classList.add(...FM_CONFIG.UI.CLASSES.STATUS_SUCCESS);
    } else {
        statusDiv.classList.add(...FM_CONFIG.UI.CLASSES.STATUS_ERROR);
    }
}

/* 3. MANEJO SEGURO DEL FORMULARIO */
function setupForm() {
    const form = document.getElementById(FM_CONFIG.SELECTORS.FORM);
    const submitBtn = document.getElementById(FM_CONFIG.SELECTORS.SUBMIT_BTN);
    
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Evitamos recarga (AJAX)
        
        // --- CAPA DE SEGURIDAD (Frontend) ---
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Validación de Patrones Peligrosos
        if (FM_CONFIG.REGEX.DANGEROUS.test(data.message) || FM_CONFIG.REGEX.DANGEROUS.test(data.name)) {
            showStatus(FM_CONFIG.UI.MESSAGES.ERR_SECURITY, 'error');
            return;
        }

        // Validación de Email
        if (!FM_CONFIG.REGEX.EMAIL.test(data.email)) {
            showStatus(FM_CONFIG.UI.MESSAGES.ERR_EMAIL, 'error');
            return;
        }

        // --- ENVÍO ---
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = FM_CONFIG.UI.MESSAGES.BTN_SENDING;
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                showStatus(FM_CONFIG.UI.MESSAGES.SUCCESS, 'success');
                form.reset();
            } else {
                const resData = await response.json();
                if (resData.errors) {
                    const errorMsg = resData.errors.map(err => err.message).join(", ");
                    showStatus(`> Error: ${errorMsg}`, 'error');
                } else {
                    showStatus(FM_CONFIG.UI.MESSAGES.ERR_CONNECTION, 'error');
                }
            }
        } catch (error) {
            showStatus(FM_CONFIG.UI.MESSAGES.ERR_NETWORK, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

// Inicialización de Lógica
window.addEventListener('load', () => {
    revealContactInfo();
    setupForm();
});