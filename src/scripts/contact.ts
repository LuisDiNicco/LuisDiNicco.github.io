// src/scripts/contact.ts

// 1. Definimos tipos para la respuesta de la API (Sin usar 'any')
interface FormError {
    code?: string;
    field?: string;
    message: string;
}

interface FormspreeResponse {
    next?: string;
    ok: boolean;
    errors?: FormError[];
}

interface FormMessages {
    readonly SENDING: string;
    readonly SUCCESS: string;
    readonly ERR_SECURITY: string;
    readonly ERR_EMAIL: string;
    readonly ERR_CONNECTION: string;
    readonly ERR_CRITICAL: string;
}

// Traducciones de mensajes del formulario
const FORM_MESSAGES: Record<'es' | 'en', FormMessages> = {
    es: {
        SENDING: 'Enviando paquetes...',
        SUCCESS: '> Mensaje enviado correctamente. Code: 200 [OK]',
        ERR_SECURITY: '⚠️ Error de seguridad: Caracteres no permitidos.',
        ERR_EMAIL: '⚠️ Por favor ingresa un email válido.',
        ERR_CONNECTION: '> Error: El servidor rechazó la conexión.',
        ERR_CRITICAL: '> Error crítico: No se pudo conectar con el servidor.'
    },
    en: {
        SENDING: 'Sending packets...',
        SUCCESS: '> Message sent successfully. Code: 200 [OK]',
        ERR_SECURITY: '⚠️ Security error: Forbidden characters.',
        ERR_EMAIL: '⚠️ Please enter a valid email.',
        ERR_CONNECTION: '> Error: Server rejected the connection.',
        ERR_CRITICAL: '> Critical error: Could not connect to server.'
    }
};

// Detectar el idioma actual
function getCurrentLanguage(): 'es' | 'en' {
    // Opción 1: Detectar del pathname
    const path = window.location.pathname;
    if (path.startsWith('/en')) return 'en';
    if (path.startsWith('/es')) return 'es';
    
    // Opción 2: Detectar del atributo lang del HTML
    const htmlLang = document.documentElement.lang;
    if (htmlLang.startsWith('en')) return 'en';
    
    // Default a español
    return 'es';
}

interface ContactConfig {
    readonly EMAIL_USER: string;
    readonly EMAIL_DOMAIN: string;
    readonly SELECTORS: {
        readonly FORM: string;
        readonly EMAIL_LINK: string;
        readonly STATUS_DIV: string;
        readonly SUBMIT_BTN: string;
        readonly LOADER: string;
    };
    readonly UI: {
        readonly HIDDEN_CLASS: string;
        readonly LOADING_CLASS: string;
        readonly BASE_STATUS_CLASS: string;
        readonly SUCCESS_CLASSES: readonly string[];
        readonly ERROR_CLASSES: readonly string[];
        readonly MESSAGES: FormMessages;
    };
    readonly REGEX: {
        readonly DANGEROUS: RegExp;
        readonly EMAIL: RegExp;
    }
}

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
        MESSAGES: FORM_MESSAGES[getCurrentLanguage()]
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
        // Tipado más seguro para los datos del formulario
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string
        };
        
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
                // AQUÍ ESTABA EL ANY: Ahora usamos casting a nuestra interfaz
                const resData = await response.json() as FormspreeResponse;
                
                if (resData.errors && Array.isArray(resData.errors)) {
                    const errorMsg = resData.errors.map(err => err.message).join(", ");
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