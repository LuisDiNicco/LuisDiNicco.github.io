import { test, expect } from '@playwright/test';

test.describe('Portafolio E2E Tests', () => {

  // 1. SMOKE TEST: Carga básica y Título
  test('debe cargar la versión en español y mostrar el título correcto', async ({ page }) => {
    await page.goto('/es');
    
    // Verificamos el título
    await expect(page).toHaveTitle(/Luis Di Nicco | Backend Engineer/i);
    
    // CORRECCIÓN: Buscamos el enlace "~/" ESPECÍFICAMENTE dentro del Navbar
    // Usamos 'exact: true' para que no confunda "~/" con "~/contact"
    const homeLink = page.locator('nav').getByRole('link', { name: '~/', exact: true });
    
    await expect(homeLink).toBeVisible();
  });

  // 2. TEST DE NAVEGACIÓN ENTRE IDIOMAS
  test('debe cambiar de idioma correctamente (ES -> EN)', async ({ page }) => {
    // Paso 1: Ir a Español
    await page.goto('/es');
    
    // Verificamos un texto único del español en el Navbar
    await expect(page.locator('nav')).toContainText('./sobre-mi');

    // Paso 2: Cambiar a Inglés
    // Buscamos el botón "EN" en el Navbar
    const langBtn = page.getByRole('link', { name: 'EN', exact: true });
    await expect(langBtn).toBeVisible();
    await langBtn.click();

    // Paso 3: Verificar cambio
    // La URL debe contener /en
    await expect(page).toHaveURL(/.*\/en/);
    // El texto del Navbar debe cambiar a './about'
    await expect(page.locator('nav')).toContainText('./about');
  });

  // 3. TEST CRÍTICO DEL CV
  test('el botón de CV debe apuntar al archivo correcto y abrir en nueva pestaña', async ({ page }) => {
    // --- CASO ESPAÑOL ---
    await page.goto('/es');
    
    // Buscamos por el texto REAL: "Descargar CV"
    const cvBtnES = page.getByRole('link', { name: 'Descargar CV' });
    
    await expect(cvBtnES).toBeVisible();
    await expect(cvBtnES).toHaveAttribute('href', '/CV_Luis_DiNicco_ES.pdf');
    await expect(cvBtnES).toHaveAttribute('target', '_blank');

    // --- CASO INGLÉS ---
    await page.goto('/en');
    
    // Buscamos por el texto REAL: "Download Resume"
    const cvBtnEN = page.getByRole('link', { name: 'Download Resume' });
    
    await expect(cvBtnEN).toBeVisible();
    await expect(cvBtnEN).toHaveAttribute('href', '/CV_Luis_DiNicco_EN.pdf');
    await expect(cvBtnEN).toHaveAttribute('target', '_blank');
  });

  // 4. TEST DE FORMULARIO
  test('el formulario no debe enviarse si los campos requeridos están vacíos', async ({ page }) => {
    await page.goto('/es');
    
    // Esperamos a que el formulario sea visible
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();

    // Intentamos enviar vacío
    const submitBtn = page.locator('button[type="submit"]');
    await submitBtn.click();

    // Verificamos que el campo nombre sea inválido
    const nameInput = page.locator('input[name="name"]');
    
    const isInvalid = await nameInput.evaluate((input: HTMLInputElement) => {
        return !input.checkValidity();
    });

    expect(isInvalid).toBe(true);
  });

});