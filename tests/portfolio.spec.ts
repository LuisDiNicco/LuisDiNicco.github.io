import { test, expect } from '@playwright/test';

test.describe('Portafolio E2E Tests', () => {

  // 1. SMOKE TEST: Carga básica y Título
  test('debe cargar la versión en español y mostrar el título correcto', async ({ page }) => {
    await page.goto('/es');
    
    // Verificamos el título
    await expect(page).toHaveTitle(/Luis Di Nicco | Backend Engineer/i);
    
    // CORRECCIÓN: Buscamos el enlace "~/" ESPECÍFICAMENTE dentro del Navbar
    // Usamos 'exact: true' para que no confunda
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

  // 5. TEST DE SECCIÓN EXPERIENCIA
  test('debe mostrar la sección de experiencia correctamente', async ({ page }) => {
    await page.goto('/es');
    
    const expSection = page.locator('#experience');
    await expSection.scrollIntoViewIfNeeded();
    
    await expect(expSection).toBeVisible();
    await expect(page.locator('text=Procontacto')).toBeVisible();
    await expect(page.locator('text=Backend Developer')).toBeVisible();
  });

  // 6. TEST DE FILTROS DE SKILLS
  test('los filtros de skills deben funcionar correctamente', async ({ page }) => {
    await page.goto('/es');
    
    const skillsSection = page.locator('#skills');
    await skillsSection.scrollIntoViewIfNeeded();
    
    // Verificar que todos los skills están visibles inicialmente
    const allSkills = page.locator('.skill-card');
    const initialCount = await allSkills.count();
    expect(initialCount).toBeGreaterThan(0);
    
    // Hacer clic en el filtro de Backend
    const backendFilter = page.locator('button[data-filter="backend"]');
    await backendFilter.click();
    
    // Esperar a que la animación termine (AutoAnimate)
    await page.waitForTimeout(500);
    
    // Verificar que solo se muestran los skills de backend
    const visibleSkills = page.locator('.skill-card:visible');
    const newCount = await visibleSkills.count();
    expect(newCount).toBeLessThan(initialCount);
    expect(newCount).toBeGreaterThan(0);
  });

  // 7. TEST DE PROYECTOS
  test('debe mostrar los proyectos con sus enlaces', async ({ page }) => {
    await page.goto('/es');
    
    const projectsSection = page.locator('#projects');
    await projectsSection.scrollIntoViewIfNeeded();
    
    // Verificar que hay al menos un proyecto en la lista
    const projectBtns = page.locator('#project-list .project-btn');
    expect(await projectBtns.count()).toBeGreaterThan(0);
    
    // Verificar que el primer proyecto tiene título y enlaces
    const firstProject = page.locator('.project-content').first();
    await expect(firstProject.locator('h3')).toBeVisible();
    await expect(firstProject.locator('a').first()).toBeVisible();
  });

});