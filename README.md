# Portfolio | Luis Di Nicco

> **Backend Developer & Future Computer Engineer**

![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
[![View Portfolio](https://img.shields.io/badge/View_Website-Click_Here-2ea44f?style=for-the-badge&logo=github)](https://luisdinicco.github.io)

---

## 🚀 About this Project

This repository contains the source code for my personal portfolio. The goal of this site is to present my experience in **Software Architecture**, **Backend Development**, and **Distributed Systems** in a clear and interactive way.

The design follows a "Terminal/Console" aesthetic, reflecting my daily work environment as an engineer, while prioritizing a fluid and modern user experience.

### 🌐 Live Demo
You can visit the deployed and functional version at the following link:

👉 **[https://luisdinicco.github.io](https://luisdinicco.github.io)**

---

## 🛠️ Engineering & Tech Stack

![Astro](https://img.shields.io/badge/Astro-v5-orange?style=flat&logo=astro)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan?style=flat&logo=tailwindcss)

This project represents a technical evolution from its original version. Initially built with HTML and pure JavaScript, I decided to migrate it to a component-based architecture to improve maintainability, scalability, and type safety.

### Design Decisions
The migration to **Astro** and **TypeScript** responds to the need for managing the project with more robust standards, similar to those I apply in backend software development:

* **Astro:** Selected for its ability to generate high-performance static sites (*Zero-JS by default*), delivering only essential code to the browser.
* **TypeScript:** Implemented to add static typing and reduce development errors, especially within animation logic and data handling.
* **Tailwind CSS:** Used to maintain a clean, consistent, and atomic utility-first stylesheet.
* **GitHub Actions:** A CI/CD pipeline was configured to automate deployment to GitHub Pages upon every update.

---

## 📂 Project Structure

The code is organized in a modular fashion, separating logic, UI, and data to facilitate readability and maintenance.

```text
src/
├── components/
│   ├── layout/       # Structural components (Navbar, Footer)
│   ├── sections/     # Main sections (Hero, About, Skills, Projects)
│   └── ui/           # Reusable atomic components (Cards, Titles)
├── data/             # Typed data definitions (Skills list)
├── i18n/             # Translation dictionary (Spanish / English)
├── layouts/          # Base layout with global Canvas injection
├── pages/            # Static routes and language handling
├── scripts/          # Client-side logic (Matrix Effect, ScrollSpy)
└── styles/           # Global style configuration
```

## ⚡ Installation & Local Development

If you wish to clone and run this project in your local environment:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/LuisDiNicco/luisdinicco.github.io.git](https://github.com/LuisDiNicco/luisdinicco.github.io.git)
    cd luisdinicco.github.io
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:4321`.

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 📫 Contact

I am open to new professional opportunities and technical challenges.

* **Email**: [diniccoluis@gmail.com](mailto:diniccoluis@gmail.com)
* **LinkedIn**: [Luis Demetrio Di Nicco](https://linkedin.com/in/luis-demetrio-di-nicco)
* **GitHub**: [@LuisDiNicco](https://github.com/LuisDiNicco)

---

© 2026 Luis Di Nicco.
