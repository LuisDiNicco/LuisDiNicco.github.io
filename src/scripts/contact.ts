// src/scripts/contact.ts

interface ContactConfig {
    EMAIL_USER: string;
    EMAIL_DOMAIN: string;
    SELECTORS: {
        FORM: string;
        EMAIL_LINK: string;
        STATUS_DIV: string;
        SUBMIT_BTN: string;
        LOADER: string;
    };
    UI: {
        HIDDEN_CLASS: string;
        LOADING_CLASS: string;
        BASE_STATUS_CLASS: string;
        SUCCESS_CLASSES: string[];
        ERROR_CLASSES: string[];
        MESSAGES: {
            SENDING: string;
            SUCCESS: string;
            ERR_SECURITY: string;
            ERR_EMAIL: string;
            ERR_CONNECTION: string;
            ERR_CRITICAL: string;
        };
    };
    REGEX: {
        DANGEROUS: RegExp;
        EMAIL: RegExp;
    }
}

// Configuración centralizada
const CONFIG: ContactConfig = {
    EMAIL_USER: 'diniccoluis',
    EMAIL_DOMAIN: 'gmail.com',
    SELECTORS: {
        FORM: 'contact-form',
        EMAIL_LINK: 'email-link',
        STATUS_DIV: 'form-status',
        SUBMIT_BTN: 'submit-btn',
        LOADER: 'span'
    },
    UI: {
        HIDDEN_CLASS: 'hidden',
        LOADING_CLASS: 'animate-pulse',
        BASE_STATUS_CLASS: 'mt-4 font-mono text-sm border-l-2 pl-2 transition-all duration-300',
        SUCCESS_CLASSES: ['text-green-400', 'border-green-500'],
        ERROR_CLASSES: ['text-red-400', 'border-red-500'],
        // Estos mensajes son los "fallback" por defecto
        MESSAGES: {
            SENDING: 'Enviando paquetes...',
            SUCCESS: '> Mensaje enviado correctamente. Code: 200 [OK]',
            ERR_SECURITY: '⚠️ Error de seguridad: Caracteres no permitidos.',
            ERR_EMAIL: '⚠️ Por favor ingresa un email válido.',
            ERR_CONNECTION: '> Error: El servidor rechazó la conexión.',
            ERR_CRITICAL: '> Error crítico: No se pudo conectar con el servidor.'
        }
    },
    REGEX: {
        DANGEROUS: /<script\b[^>]*>|javascript:|on\w+=|<iframe/i,
        EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
};

export function initContactForm() {
    setupEmailProtection();
    setupFormSubmission();
}

function setupEmailProtection() {
    const emailLink = document.getElementById(CONFIG.SELECTORS.EMAIL_LINK) as HTMLAnchorElement;
    
    if (emailLink) {
        const fullEmail = `${CONFIG.EMAIL_USER}@${CONFIG.EMAIL_DOMAIN}`;
        emailLink.textContent = fullEmail;
        emailLink.href = `mailto:${fullEmail}`;
        
        const loader = emailLink.querySelector(CONFIG.SELECTORS.LOADER);
        if(loader) loader.classList.remove(CONFIG.UI.LOADING_CLASS);
    }
}

function setupFormSubmission() {
    const form = document.getElementById(CONFIG.SELECTORS.FORM) as HTMLFormElement;
    const submitBtn = document.getElementById(CONFIG.SELECTORS.SUBMIT_BTN) as HTMLButtonElement;
    
    if (!form || !submitBtn) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()) as { name: string; email: string; message: string };
        
        // 1. Validaciones de Seguridad
        if (CONFIG.REGEX.DANGEROUS.test(data.message) || CONFIG.REGEX.DANGEROUS.test(data.name)) {
            showStatus(CONFIG.UI.MESSAGES.ERR_SECURITY, 'error');
            return;
        }

        if (!CONFIG.REGEX.EMAIL.test(data.email)) {
            showStatus(CONFIG.UI.MESSAGES.ERR_EMAIL, 'error');
            return;
        }

        // 2. Preparar UI para envío
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent || '';
        submitBtn.textContent = CONFIG.UI.MESSAGES.SENDING;
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                showStatus(CONFIG.UI.MESSAGES.SUCCESS, 'success');
                form.reset();
            } else {
                const resData = await response.json();
                if (resData.errors) {
                    const errorMsg = resData.errors.map((err: any) => err.message).join(", ");
                    showStatus(`> Error: ${errorMsg}`, 'error');
                } else {
                    showStatus(CONFIG.UI.MESSAGES.ERR_CONNECTION, 'error');
                }
            }
        } catch (error) {
            showStatus(CONFIG.UI.MESSAGES.ERR_CRITICAL, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
        }
    });
}

function showStatus(msg: string, type: 'success' | 'error') {
    const statusDiv = document.getElementById(CONFIG.SELECTORS.STATUS_DIV);
    if (!statusDiv) return;

    statusDiv.classList.remove(CONFIG.UI.HIDDEN_CLASS);
    statusDiv.textContent = msg;
    statusDiv.className = CONFIG.UI.BASE_STATUS_CLASS;

    if (type === 'success') {
        statusDiv.classList.add(...CONFIG.UI.SUCCESS_CLASSES);
    } else {
        statusDiv.classList.add(...CONFIG.UI.ERROR_CLASSES);
    }
}