/**
 * FORM & SECURITY MODULE
 * Maneja la ofuscación de email, validaciones y envío AJAX.
 */

/* 1. PROTECCIÓN DE EMAIL (Anti-Scraping) */
function revealContactInfo() {
    const user = 'luis.dinicco'; 
    const domain = 'ejemplo.com'; 
    
    const emailLink = document.getElementById('email-link');
    
    if (emailLink) {
        const fullEmail = `${user}@${domain}`;
        emailLink.textContent = fullEmail;
        emailLink.href = `mailto:${fullEmail}`;
        // Quitamos la animación de carga
        const loader = emailLink.querySelector('span');
        if(loader) loader.classList.remove('animate-pulse');
    }
}

/* 2. FEEDBACK VISUAL (Toasts) */
function showStatus(msg, type) {
    const statusDiv = document.getElementById('form-status');
    if (!statusDiv) return;

    statusDiv.classList.remove('hidden');
    statusDiv.textContent = msg;
    
    // Reseteamos clases base
    statusDiv.className = 'mt-4 font-mono text-sm border-l-2 pl-2 transition-all duration-300';

    if (type === 'success') {
        statusDiv.classList.add('text-green-400', 'border-green-500');
    } else {
        statusDiv.classList.add('text-red-400', 'border-red-500');
    }
}

/* 3. MANEJO SEGURO DEL FORMULARIO */
function setupForm() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Evitamos recarga (AJAX)
        
        // --- CAPA DE SEGURIDAD (Frontend) ---
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Patrones peligrosos (XSS básico)
        const dangerousPatterns = /<script\b[^>]*>|javascript:|on\w+=|<iframe/i;
        
        if (dangerousPatterns.test(data.message) || dangerousPatterns.test(data.name)) {
            showStatus('⚠️ Error de seguridad: Caracteres no permitidos detectados.', 'error');
            return;
        }

        // Validación de Email (Regex estándar)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            showStatus('⚠️ Por favor ingresa un email válido.', 'error');
            return;
        }

        // --- ENVÍO ---
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando paquetes...';
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                showStatus('> Mensaje enviado correctamente. Code: 200 [OK]', 'success');
                form.reset();
            } else {
                const resData = await response.json();
                if (resData.errors) {
                    const errorMsg = resData.errors.map(err => err.message).join(", ");
                    showStatus(`> Error: ${errorMsg}`, 'error');
                } else {
                    showStatus('> Error: El servidor rechazó la conexión. Intenta nuevamente.', 'error');
                }
            }
        } catch (error) {
            showStatus('> Error crítico: No se pudo conectar con el servidor.', 'error');
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