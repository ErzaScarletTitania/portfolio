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

    "hero.eyebrow": "Available · Remote · LATAM → US (EST / CST) · AI-native QA",
    "hero.title": "AI-Enabled QA Strategist & Quality Engineering Architect",
    "hero.lead": "I design risk-based QA strategy and orchestrate AI agents to execute it. I validate every output, package the evidence, and keep delivery auditable. 8+ years across 20+ web, mobile, desktop, and API products.",
    "hero.ctaHire": "Hire me",
    "hero.ctaCv": "Download CV (EN)",

    "about.title": "About",
    "about.p1": "ISTQB-certified <strong>AI-Enabled QA Strategist</strong> with 8+ years across 20+ web, mobile, desktop, and API products. I design the QA strategy, direct AI to build the tooling, and validate the output before it reaches stakeholders.",
    "about.p2": "I currently lead delivery as a Project Manager — bridging engineering, stakeholders, and quality. I turn repetitive testing work into <em>systems</em>: multi-agent QA workflows, evidence pipelines, and Windows-first CLI tooling that ship with logs, validation, and reporting baked in.",
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
    "skills.s2d": "I direct AI to build and maintain Selenium, Playwright, and Postman / Newman workflows, then validate the results before release.",
    "skills.s3t": "Multi-Agent QA Systems",
    "skills.s3d": "Phased execution, persistent session state, machine-readable reporting, and AI-assisted delivery patterns.",
    "skills.s4t": "Evidence & Tooling",
    "skills.s4d": "OpenCV (C# / OpenCvSharp) and PowerShell utilities for timestamped, audit-ready test evidence.",
    "skills.s5t": "Cross-Functional Delivery",
    "skills.s5d": "Project Manager today; sprint planning, risk tracking, stakeholder reporting, escalation frameworks.",
    "skills.s6t": "Platforms & Languages",
    "skills.s6d": "Web, .NET 8 desktop, Flutter mobile, REST APIs. Python · PowerShell · C# · SQL.",

    "projects.title": "Featured Projects",
    "projects.p1": "Multi-agent QA framework with phased execution, persistent session state, and machine-readable reporting. I designed the structure and directed AI to build the deliverable.",
    "projects.p2": "Playwright audit scope for SEO, security, accessibility, performance, and e-commerce core checks. AI built the suite; I defined scope and validated the output.",
    "projects.p3": "C# + OpenCvSharp utility for timestamped PNG evidence capture. I designed the evidence pipeline and directed AI to build the extractor.",
    "projects.p4": "Lightweight PowerShell counterpart for fast, on-demand evidence-frame capture from session recordings.",

    "exp.title": "Experience",
    "exp.r1": "Lead delivery for a top-priority software program using AI-assisted sprint planning, risk tracking, and stakeholder reporting. I direct a cross-functional team of 3 engineers to produce status reports, budget analyses, sprint retrospectives, and milestone documentation. The result: 40% faster high-impact incident resolution, 90% on-time deliverable approval, and stronger transparency across delivery milestones.",
    "exp.r2": "Designed and directed the QA strategy for a 20+ product portfolio, orchestrating AI agents to execute test automation, API validation, and cross-platform testing. I defined a unified strategy aligned with ISTQB, Scrum, and CMMI; reduced post-release defects by 20%; cut manual regression effort on 3 production websites; and raised pre-UAT defect detection to 60% across desktop, mobile, and web coverage.",
    "exp.r3": "Generated 15 new B2B contracts supporting $1.5M+ in annual revenue in Cuba's Mariel Special Economic Zone. 90% client retention over 100+ accounts.",
    "exp.r4": "95% customer-satisfaction score; accelerated solution-delivery cycles 30% by aligning sales, engineering, and marketing; cut complex-issue resolution time 40%.",
    "exp.r5": "Taught Discrete Mathematics, Probability, and Statistics to 100+ undergraduates; lifted cohort promotion rates 15%.",
    "exp.r6": "Executed 2,000+ technical SEO audits across 600+ websites; contributed to SEOWebMas, a national diagnostic tool.",

    "contact.title": "Let's work together",
    "contact.lead": "I'm available for embedded QA leadership and AI-orchestrated test-automation engagements with US software teams — B2B contract or remote full-time. Fully time-zone aligned with EST and CST.",

    "footer.tag": "AI-Enabled QA Strategist · Quality Engineering Architect",
    "footer.built": "Built static · No tracking · Deploys to GitHub Pages, Netlify, or Cloudflare Pages out of the box."
  },

  es: {
    "nav.about": "Acerca",
    "nav.impact": "Impacto",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Disponible · Remoto · LATAM → EE.UU. (EST / CST) · QA nativo de IA",
    "hero.title": "Estratega de QA Potenciado por IA y Arquitecta de Ingeniería de Calidad",
    "hero.lead": "Diseño estrategias de QA basadas en riesgo y orquesto agentes de IA para ejecutarlas. Valido cada output, empaqueto la evidencia y mantengo la entrega auditable. 8+ años en 20+ productos web, móviles, de escritorio y APIs.",
    "hero.ctaHire": "Contrátame",
    "hero.ctaCv": "Descargar CV (ES)",

    "about.title": "Acerca de mí",
    "about.p1": "Certificada ISTQB como <strong>Estratega de QA Potenciado por IA</strong> con 8+ años en 20+ productos web, móviles, de escritorio y APIs. Diseño la estrategia de QA, dirijo a la IA para construir el tooling y valido el output antes de que llegue a los stakeholders.",
    "about.p2": "Actualmente lidero la entrega como Project Manager — puente entre ingeniería, stakeholders y calidad. Transformo trabajo de testing repetitivo en <em>sistemas</em>: flujos multiagente de QA, pipelines de evidencia y tooling Windows-first con logs, validación y reporte integrados.",
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
    "skills.s2d": "Dirijo a la IA para construir y mantener flujos con Selenium, Playwright y Postman / Newman, y luego valido los resultados antes del release.",
    "skills.s3t": "Sistemas de QA Multiagente",
    "skills.s3d": "Ejecución por fases, estado persistente de sesión, reportes legibles por máquina y patrones de entrega asistidos por IA.",
    "skills.s4t": "Evidencia y Tooling",
    "skills.s4d": "Utilitarios OpenCV (C# / OpenCvSharp) y PowerShell para evidencia auditada con marca de tiempo.",
    "skills.s5t": "Entrega Multifuncional",
    "skills.s5d": "Project Manager hoy; planificación de sprints, gestión de riesgos, reporte a stakeholders, marcos de escalamiento.",
    "skills.s6t": "Plataformas y Lenguajes",
    "skills.s6d": "Web, escritorio .NET 8, móvil Flutter, APIs REST. Python · PowerShell · C# · SQL.",

    "projects.title": "Proyectos Destacados",
    "projects.p1": "Framework multiagente de QA con ejecución por fases, estado persistente y reportes legibles por máquina. Yo diseñé la estructura y dirigí a la IA para construir el entregable.",
    "projects.p2": "Alcance de auditoría en Playwright para SEO, seguridad, accesibilidad, performance y validaciones core de e-commerce. La IA construyó la suite; yo definí el alcance y validé el output.",
    "projects.p3": "Utilitario en C# + OpenCvSharp para captura de evidencia PNG con marca de tiempo. Yo diseñé el pipeline de evidencia y dirigí a la IA para construir el extractor.",
    "projects.p4": "Contraparte ligera en PowerShell para captura rápida y bajo demanda de evidencia desde grabaciones de sesión.",

    "exp.title": "Experiencia",
    "exp.r1": "Lidero la entrega de uno de los programas de software de mayor prioridad usando planificación de sprints, seguimiento de riesgos y reportes a stakeholders asistidos por IA. Dirijo un equipo multifuncional de 3 ingenieros para producir reportes de estado, análisis presupuestarios, retrospectivas de sprint y documentación de hitos. El resultado: 40% menos tiempo de resolución de incidentes críticos, 90% de aprobación de entregables a tiempo y mayor transparencia a lo largo de los hitos de entrega.",
    "exp.r2": "Diseñé y dirigí la estrategia de QA para un portafolio de 20+ productos, orquestando agentes de IA para ejecutar automatización de pruebas, validación de API y pruebas cross-platform. Definí una estrategia unificada alineada con ISTQB, Scrum y CMMI; reduje defectos post-release en un 20%; reduje el esfuerzo de regresión manual en 3 sitios web en producción; y elevé la detección pre-UAT al 60% en cobertura de escritorio, móvil y web.",
    "exp.r3": "Generé 15 nuevos contratos B2B respaldando US$1.5M+ en ingresos anuales en la Zona Económica Especial del Mariel, Cuba. 90% de retención sobre 100+ cuentas.",
    "exp.r4": "Índice de satisfacción del 95%; aceleré los ciclos de entrega un 30% alineando ventas, ingeniería y marketing; reduje el tiempo de resolución de incidencias complejas un 40%.",
    "exp.r5": "Impartí Matemática Discreta, Probabilidades y Estadística a 100+ estudiantes de pregrado; elevé la tasa de promoción un 15%.",
    "exp.r6": "Ejecuté 2,000+ auditorías técnicas SEO en 600+ sitios web; contribuí a SEOWebMas, herramienta nacional de diagnóstico.",

    "contact.title": "Trabajemos juntos",
    "contact.lead": "Estoy disponible para liderazgo embebido de QA y automatización orquestada por IA con equipos de software de EE.UU. y LATAM — contrato B2B o remoto full-time. Total solapamiento horario con EST y CST.",

    "footer.tag": "Estratega de QA Potenciado por IA · Arquitecta de Ingeniería de Calidad",
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
