/* ============================================
   Liliet Gonzalez Polanco — Portfolio script
   Language toggle (EN/ES), theme toggle, year
   ============================================ */

const I18N = {
  en: {
    "nav.about": "About",
    "nav.impact": "Impact",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.eyebrow": "Available · Remote · LATAM → US (EST / CST)",
    "hero.title": "Senior QA Manager & Test Automation Lead",
    "hero.lead": "I help US software teams ship faster and with fewer escaped defects by combining hands-on QA leadership, test automation, and AI-enabled quality workflows. 8+ years scaling quality across 20+ web, mobile, desktop, and API products.",
    "hero.ctaHire": "Hire me",
    "hero.ctaCv": "Download CV (EN)",

    "about.title": "About",
    "about.p1": "ISTQB-certified <strong>QA Manager and Test Automation Lead</strong> with 8+ years scaling quality engineering across 20+ web, mobile, desktop, and API products. I lead distributed QA teams, design risk-based test strategies, and build the AI-assisted tooling that makes modern QA faster, more auditable, and easier to hand off.",
    "about.p2": "I currently lead delivery as a Project Manager — bridging engineering, stakeholders, and quality. I turn fragile, repetitive testing work into <em>systems</em>: multi-agent QA workflows, evidence pipelines, and Windows-first CLI tooling that ship with logs, validation, and reporting baked in.",
    "about.factsTitle": "Facts",
    "about.f1k": "Location", "about.f1v": "Lima, Peru",
    "about.f2k": "Time zone", "about.f2v": "EST / CST (full overlap)",
    "about.f3k": "Engagement", "about.f3v": "Contract · B2B",
    "about.f4k": "Languages", "about.f4v": "English C1 · Spanish Native · German A1",
    "about.f5k": "Certifications",

    "impact.title": "Recent Impact",
    "impact.m1": "Post-release defects across a 20+ product portfolio",
    "impact.m2": "High-impact incident resolution time",
    "impact.m3": "Bugs caught pre-UAT through risk-based testing",
    "impact.m4": "On-time deliverable approval rate",
    "impact.m5": "Products under unified QA strategy",
    "impact.m6": "Leading QA, automation & delivery",

    "skills.title": "What I do",
    "skills.s1t": "QA Leadership & Strategy",
    "skills.s1d": "Risk-based test strategy, release readiness, ISTQB / Scrum / CMMI alignment, distributed-team leadership, mentoring.",
    "skills.s2t": "Test Automation",
    "skills.s2d": "Selenium WebDriver, Postman / Newman, Python, PowerShell. CI on GitHub Actions and Azure DevOps.",
    "skills.s3t": "AI-Enabled QA",
    "skills.s3d": "Multi-agent testing frameworks, persistent session state, machine-readable reporting, Copilot / Codex-assisted analysis.",
    "skills.s4t": "Evidence & Tooling",
    "skills.s4d": "OpenCV (C# / OpenCvSharp) and PowerShell utilities for timestamped, audit-ready test evidence.",
    "skills.s5t": "Cross-Functional Delivery",
    "skills.s5d": "Project Manager today; sprint planning, risk tracking, stakeholder reporting, escalation frameworks.",
    "skills.s6t": "Platforms & Languages",
    "skills.s6d": "Web, .NET 8 desktop, Flutter mobile, REST APIs. Python · PowerShell · C# · SQL.",

    "projects.title": "Featured Projects",
    "projects.p1": "Multi-agent QA testing framework with phased execution, persistent session state, and machine-readable reporting artifacts. Demonstrates production-style AI-assisted QA delivery patterns.",
    "projects.p2": "C# + OpenCvSharp utility that extracts timestamped PNG evidence frames from recorded test-session videos. Cuts manual evidence-capture effort for QA reports.",
    "projects.p3": "Windows launcher for isolated Codex CLI account profiles with reliable setup and tested startup flows. Enables safer multi-account AI developer workflows.",
    "projects.p4": "Lightweight PowerShell counterpart for fast, on-demand evidence-frame capture from session recordings.",

    "exp.title": "Experience",
    "exp.r1": "Lead a cross-functional team of 3 engineers on a top-priority software program. Cut high-impact incident resolution time 40% via a tiered escalation framework; lifted on-time deliverable approval to 90% with continuous stakeholder feedback loops.",
    "exp.r2": "Defined and scaled a unified QA strategy across 20+ products (web, mobile, desktop, APIs). Reduced post-release defects 20% leading a 3-person QA team; owned end-to-end Selenium WebDriver automation and Postman / Newman API coverage; raised pre-UAT defect detection to 60%.",
    "exp.r3": "Generated 15 new B2B contracts supporting $1.5M+ in annual revenue in Cuba's Mariel Special Economic Zone. 90% client retention over 100+ accounts.",
    "exp.r4": "95% customer-satisfaction score; accelerated solution-delivery cycles 30% by aligning sales, engineering, and marketing; cut complex-issue resolution time 40%.",
    "exp.r5": "Taught Discrete Mathematics, Probability, and Statistics to 100+ undergraduates; lifted cohort promotion rates 15%.",
    "exp.r6": "Executed 2,000+ technical SEO audits across 600+ websites; contributed to SEOWebMas, a national diagnostic tool.",

    "contact.title": "Let's work together",
    "contact.lead": "I'm available for embedded QA leadership and test-automation engagements with US software teams — B2B contract or remote full-time. Fully time-zone aligned with EST and CST.",

    "footer.tag": "Senior QA Manager · AI-Enabled Quality Engineering",
    "footer.built": "Built static · No tracking · Deploys to GitHub Pages, Netlify, or Cloudflare Pages out of the box."
  },

  es: {
    "nav.about": "Acerca",
    "nav.impact": "Impacto",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Disponible · Remoto · LATAM → EE.UU. (EST / CST)",
    "hero.title": "Gerente Senior de QA y Líder de Automatización",
    "hero.lead": "Ayudo a equipos de software de EE.UU. y LATAM a entregar más rápido y con menos defectos en producción, combinando liderazgo práctico de QA, automatización de pruebas y flujos de calidad asistidos por IA. 8+ años escalando calidad en 20+ productos web, móviles, de escritorio y APIs.",
    "hero.ctaHire": "Contrátame",
    "hero.ctaCv": "Descargar CV (ES)",

    "about.title": "Acerca de mí",
    "about.p1": "Certificada ISTQB como <strong>Gerente de QA y Líder de Automatización</strong> con 8+ años escalando ingeniería de calidad en 20+ productos web, móviles, de escritorio y APIs. Lidero equipos distribuidos de QA, diseño estrategias basadas en riesgo y construyo el tooling asistido por IA que hace el QA moderno más rápido, auditable y fácil de transferir.",
    "about.p2": "Actualmente lidero la entrega como Project Manager — puente entre ingeniería, stakeholders y calidad. Transformo trabajo de testing repetitivo y frágil en <em>sistemas</em>: flujos multiagente de QA, pipelines de evidencia y herramientas CLI Windows-first con logs, validación y reporte integrados.",
    "about.factsTitle": "Datos",
    "about.f1k": "Ubicación", "about.f1v": "Lima, Perú",
    "about.f2k": "Zona horaria", "about.f2v": "EST / CST (total solapamiento)",
    "about.f3k": "Contratación", "about.f3v": "Contrato · B2B",
    "about.f4k": "Idiomas", "about.f4v": "Inglés C1 · Español Nativo · Alemán A1",
    "about.f5k": "Certificaciones",

    "impact.title": "Impacto Reciente",
    "impact.m1": "Defectos post-release en portafolio de 20+ productos",
    "impact.m2": "Tiempo de resolución de incidentes críticos",
    "impact.m3": "Bugs detectados antes de UAT con pruebas basadas en riesgo",
    "impact.m4": "Tasa de aprobación de entregables en tiempo",
    "impact.m5": "Productos bajo estrategia unificada de QA",
    "impact.m6": "Liderando QA, automatización y entrega",

    "skills.title": "Lo que hago",
    "skills.s1t": "Liderazgo y Estrategia de QA",
    "skills.s1d": "Estrategia basada en riesgo, preparación para release, alineación ISTQB / Scrum / CMMI, liderazgo de equipos distribuidos, mentoría.",
    "skills.s2t": "Automatización de Pruebas",
    "skills.s2d": "Selenium WebDriver, Postman / Newman, Python, PowerShell. CI sobre GitHub Actions y Azure DevOps.",
    "skills.s3t": "QA Asistido por IA",
    "skills.s3d": "Frameworks multiagente de testing, estado persistente de sesión, reporte legible por máquina, análisis asistido con Copilot / Codex.",
    "skills.s4t": "Evidencia y Tooling",
    "skills.s4d": "Utilitarios OpenCV (C# / OpenCvSharp) y PowerShell para evidencia auditada con marca de tiempo.",
    "skills.s5t": "Entrega Multifuncional",
    "skills.s5d": "Project Manager hoy; planificación de sprints, gestión de riesgos, reporte a stakeholders, marcos de escalamiento.",
    "skills.s6t": "Plataformas y Lenguajes",
    "skills.s6d": "Web, escritorio .NET 8, móvil Flutter, APIs REST. Python · PowerShell · C# · SQL.",

    "projects.title": "Proyectos Destacados",
    "projects.p1": "Framework multiagente de QA con ejecución por fases, estado persistente y artefactos de reporte legibles por máquina. Demuestra patrones de entrega de QA asistida por IA en estilo productivo.",
    "projects.p2": "Utilitario en C# + OpenCvSharp que extrae fotogramas PNG con marca de tiempo desde videos de sesiones de prueba grabadas. Reduce el esfuerzo manual de captura de evidencia para reportes de QA.",
    "projects.p3": "Lanzador Windows para perfiles aislados de Codex CLI con setup confiable y flujos de arranque probados. Habilita flujos seguros multi-cuenta para desarrolladores con IA.",
    "projects.p4": "Contraparte ligera en PowerShell para captura rápida y bajo demanda de evidencia desde grabaciones de sesión.",

    "exp.title": "Experiencia",
    "exp.r1": "Lidero un equipo multifuncional de 3 ingenieros en un programa de software prioritario. Reduje el tiempo de resolución de incidentes críticos un 40% con un marco de escalamiento por niveles; elevé la aprobación de entregables en tiempo al 90% con ciclos continuos de feedback.",
    "exp.r2": "Definí y escalé una estrategia unificada de QA en 20+ productos (web, móvil, escritorio, APIs). Reduje defectos post-release un 20% liderando un equipo de 3 analistas; dueña end-to-end de automatización con Selenium WebDriver y cobertura de APIs con Postman / Newman; elevé la detección pre-UAT al 60%.",
    "exp.r3": "Generé 15 nuevos contratos B2B respaldando US$1.5M+ en ingresos anuales en la Zona Económica Especial del Mariel, Cuba. 90% de retención sobre 100+ cuentas.",
    "exp.r4": "Índice de satisfacción del 95%; aceleré los ciclos de entrega un 30% alineando ventas, ingeniería y marketing; reduje el tiempo de resolución de incidencias complejas un 40%.",
    "exp.r5": "Impartí Matemática Discreta, Probabilidades y Estadística a 100+ estudiantes de pregrado; elevé la tasa de promoción un 15%.",
    "exp.r6": "Ejecuté 2,000+ auditorías técnicas SEO en 600+ sitios web; contribuí a SEOWebMas, herramienta nacional de diagnóstico.",

    "contact.title": "Trabajemos juntos",
    "contact.lead": "Estoy disponible para liderazgo embebido de QA y proyectos de automatización con equipos de software de EE.UU. y LATAM — contrato B2B o remoto full-time. Total solapamiento horario con EST y CST.",

    "footer.tag": "Gerente Senior de QA · Calidad Asistida por IA",
    "footer.built": "Sitio estático · Sin tracking · Despliega en GitHub Pages, Netlify o Cloudflare Pages sin configuración."
  }
};

/* ===== Language toggle ===== */
function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = I18N[lang] && I18N[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  // Update CV download link + title hint
  const cv = document.getElementById('cvDownload');
  if (cv) cv.href = lang === 'es' ? 'assets/cv-es.pdf' : 'assets/cv-en.pdf';
  // Persist
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.getElementById('langToggle').addEventListener('click', () => {
  const next = document.documentElement.lang === 'es' ? 'en' : 'es';
  applyLang(next);
});

/* ===== Theme toggle ===== */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

document.getElementById('themeToggle').addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
});

/* ===== Init ===== */
(function init() {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
  // Restore prefs
  let lang = 'en';
  let theme = 'light';
  try {
    lang = localStorage.getItem('lang') || (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
    const storedLang = localStorage.getItem('lang');
    if (storedLang) lang = storedLang;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) theme = storedTheme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch (e) {}
  applyLang(lang);
  applyTheme(theme);
})();
