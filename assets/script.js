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

    "hero.eyebrow": "Available · Remote · Global collaboration · Quality & delivery leadership",
    "hero.title": "Quality Engineering Leader for AI-Enabled Software Delivery",
    "hero.lead": "I build quality strategy, release discipline, and evidence-based delivery systems for distributed software teams. 9 years across 30+ web, mobile, desktop, and software-delivery initiatives.",
    "hero.ctaHire": "Hire me",
    "hero.ctaCv": "Download CV (EN)",

    "about.title": "About",
    "about.p1": "ISTQB-certified <strong>quality engineering leader</strong> with 9 years across 30+ products. I design quality strategy, strengthen release readiness, and create structured workflows that improve execution and stakeholder visibility.",
    "about.p2": "I currently lead delivery as a Project Manager after four years as QA Lead — bridging engineering, stakeholders, and quality. My work combines evidence-based QA operations, delivery discipline, and AI-enabled workflow design.",
    "about.factsTitle": "Facts",
    "about.f1k": "Location", "about.f1v": "Lima, Peru",
    "about.f2k": "Collaboration", "about.f2v": "Global remote",
    "about.f3k": "Engagement", "about.f3v": "Contract · Full-time · Remote",
    "about.f4k": "Languages", "about.f4v": "English C1 · Spanish Native · German A1",
    "about.f5k": "Certifications",

    "impact.title": "Recent Impact",
    "impact.m1": "Post-release defects across a 30+ product portfolio",
    "impact.m2": "High-impact incident resolution time",
    "impact.m3": "Bugs caught pre-UAT through risk-based testing",
    "impact.m4": "On-time deliverable approval rate",
    "impact.m5": "Products under unified QA strategy",
    "impact.m6": "Leading quality & delivery",

    "skills.title": "What I do",
    "skills.s1t": "QA Leadership & Strategy",
    "skills.s1d": "Risk-based test strategy, release readiness, ISTQB / Scrum / CMMI alignment, distributed-team leadership, mentoring.",
    "skills.s2t": "AI-Enabled Delivery Systems",
    "skills.s2d": "I design structured workflows, evidence capture, and machine-readable outputs that make execution more repeatable and auditable.",
    "skills.s3t": "Evidence-Based QA Operations",
    "skills.s3d": "Release-facing QA, defect visibility, evidence standards, and decision-ready reporting across distributed teams.",
    "skills.s4t": "Workflow Design & Tooling",
    "skills.s4d": "Windows-first CLI utilities, OpenCV evidence support, schema-aware artifacts, and reusable operating patterns.",
    "skills.s5t": "Cross-Functional Delivery",
    "skills.s5d": "Project Manager today; sprint planning, risk tracking, stakeholder reporting, escalation frameworks.",
    "skills.s6t": "Platforms & Environments",
    "skills.s6d": "Web, .NET 8 desktop, Flutter mobile, Python, PowerShell, C#, SQL, GitHub Actions, and Azure DevOps.",

    "projects.title": "Featured Projects",
    "projects.p1": "AI-enabled quality operating model with phased execution, persistent session state, and machine-readable reporting. I designed the workflow structure, evidence model, and reporting logic.",
    "projects.p2": "Reusable framework for turning product ideas into specs, implementation milestones, and validated deliverables. I designed it to strengthen delivery traceability and execution discipline.",
    "projects.p3": "Microsoft Graph workflow that turned browser-only shared access into a reusable automation path under tenant constraints.",
    "projects.p4": "Windows-first account-isolation workflow for Codex CLI, designed to improve repeatability and reduce friction in multi-account use.",

    "exp.title": "Experience",
    "exp.r1": "Lead delivery for a top-priority software program across a multi-stream roadmap, coordinating a cross-functional team of 3 engineers and owning planning, risk tracking, and stakeholder communication. I designed a tiered escalation framework that reduced high-impact incident resolution time by 40% and instituted milestone demos that increased on-time deliverable approval to 90%.",
    "exp.r2": "Built and led the QA function for a 30+ product portfolio spanning web, mobile, desktop, and software delivery initiatives. I defined a unified QA strategy aligned with ISTQB, Scrum, and CMMI; led risk-based test planning that reduced post-release defects by 20%; and directed cross-platform testing that raised pre-UAT defect detection to 60%.",
    "exp.r3": "Generated 15 new B2B contracts supporting $1.5M+ in annual revenue in Cuba's Mariel Special Economic Zone. 90% client retention over 100+ accounts.",
    "exp.r4": "Owned technical discovery and customer-facing solution alignment, contributing to a 95% customer-satisfaction score. Aligned sales, engineering, and marketing around a clearer discovery-to-handoff model, accelerating solution-delivery cycles by 30% and reducing complex-issue resolution time by 40%.",
    "exp.r5": "Taught Discrete Mathematics, Probability, and Statistics to 100+ undergraduates; lifted cohort promotion rates 15%.",
    "exp.r6": "Executed 2,000+ technical SEO audits across 600+ websites; contributed to SEOWebMas, a national diagnostic tool.",

    "contact.title": "Let's work together",
    "contact.lead": "I'm available for quality engineering leadership and AI-enabled delivery work with distributed software teams — contract or remote full-time.",

    "footer.tag": "Quality Engineering Leader · AI-Enabled Delivery Systems",
    "footer.built": "Built static · No tracking · Deploys to GitHub Pages, Netlify, or Cloudflare Pages out of the box."
  },

  es: {
    "nav.about": "Acerca",
    "nav.impact": "Impacto",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Disponible · Remoto · Colaboración global · Liderazgo de calidad y entrega",
    "hero.title": "Líder de Ingeniería de Calidad para Entrega de Software Potenciada por IA",
    "hero.lead": "Construyo estrategia de calidad, disciplina de release y sistemas de entrega basados en evidencia para equipos distribuidos de software. 9 años en 30+ iniciativas web, móviles, de escritorio y de entrega de software.",
    "hero.ctaHire": "Contrátame",
    "hero.ctaCv": "Descargar CV (ES)",

    "about.title": "Acerca de mí",
    "about.p1": "Certificada ISTQB como <strong>líder de ingeniería de calidad</strong> con 9 años en 30+ productos. Diseño la estrategia de calidad, fortalezco el release readiness y creo flujos estructurados que mejoran la ejecución y la visibilidad para stakeholders.",
    "about.p2": "Actualmente lidero la entrega como Project Manager después de cuatro años como QA Lead — puente entre ingeniería, stakeholders y calidad. Mi trabajo combina operaciones de QA basadas en evidencia, disciplina de entrega y diseño de flujos potenciados por IA.",
    "about.factsTitle": "Datos",
    "about.f1k": "Ubicación", "about.f1v": "Lima, Perú",
    "about.f2k": "Colaboración", "about.f2v": "Remota global",
    "about.f3k": "Contratación", "about.f3v": "Contrato · Full-time · Remoto",
    "about.f4k": "Idiomas", "about.f4v": "Inglés C1 · Español Nativo · Alemán A1",
    "about.f5k": "Certificaciones",

    "impact.title": "Impacto Reciente",
    "impact.m1": "Defectos post-release en portafolio de 30+ productos",
    "impact.m2": "Tiempo de resolución de incidentes críticos",
    "impact.m3": "Bugs detectados antes de UAT con pruebas basadas en riesgo",
    "impact.m4": "Tasa de aprobación de entregables en tiempo",
    "impact.m5": "Productos bajo estrategia unificada de QA",
    "impact.m6": "Liderando calidad y entrega",

    "skills.title": "Lo que hago",
    "skills.s1t": "Liderazgo y Estrategia de QA",
    "skills.s1d": "Estrategia basada en riesgo, preparación para release, alineación ISTQB / Scrum / CMMI, liderazgo de equipos distribuidos, mentoría.",
    "skills.s2t": "Sistemas de Entrega Potenciados por IA",
    "skills.s2d": "Diseño flujos estructurados, captura de evidencia y outputs legibles por máquina que hacen la ejecución más repetible y auditable.",
    "skills.s3t": "Operaciones de QA Basadas en Evidencia",
    "skills.s3d": "QA orientada a release, visibilidad de defectos, estándares de evidencia y reportería lista para decisión en equipos distribuidos.",
    "skills.s4t": "Diseño de Flujos y Tooling",
    "skills.s4d": "Utilidades CLI Windows-first, soporte de evidencia con OpenCV, artefactos estructurados y patrones operativos reutilizables.",
    "skills.s5t": "Entrega Multifuncional",
    "skills.s5d": "Project Manager hoy; planificación de sprints, gestión de riesgos, reporte a stakeholders, marcos de escalamiento.",
    "skills.s6t": "Plataformas y Entornos",
    "skills.s6d": "Web, escritorio .NET 8, móvil Flutter, Python, PowerShell, C#, SQL, GitHub Actions y Azure DevOps.",

    "projects.title": "Proyectos Destacados",
    "projects.p1": "Modelo operativo de calidad potenciado por IA con ejecución por fases, estado persistente y reportería legible por máquina. Diseñé la estructura del flujo, el modelo de evidencia y la lógica de reportería.",
    "projects.p2": "Marco reutilizable para convertir ideas de producto en especificaciones, hitos de implementación y entregables validados. Lo diseñé para fortalecer la trazabilidad y la disciplina de ejecución.",
    "projects.p3": "Flujo con Microsoft Graph que convirtió acceso compartido solo visible en navegador en una ruta reutilizable de automatización bajo restricciones de tenant.",
    "projects.p4": "Flujo Windows-first de aislamiento de cuentas para Codex CLI, diseñado para mejorar la repetibilidad y reducir la fricción en el uso multicuenta.",

    "exp.title": "Experiencia",
    "exp.r1": "Lidero la entrega de un programa de software de alta prioridad en una hoja de ruta de múltiples frentes, coordinando un equipo multifuncional de 3 ingenieros y asumiendo planificación, seguimiento de riesgos y comunicación con stakeholders. Diseñé un marco de escalación por niveles que redujo en 40% el tiempo de resolución de incidentes críticos e instituí demos de hitos que elevaron a 90% la aprobación puntual de entregables.",
    "exp.r2": "Construí y lideré la función de QA para un portafolio de 30+ productos que abarcó iniciativas web, móviles, de escritorio y de entrega de software. Definí una estrategia unificada de QA alineada con ISTQB, Scrum y CMMI; lideré planificación basada en riesgo que redujo en 20% los defectos post-release; y dirigí pruebas cross-platform que elevaron a 60% la detección de defectos antes de UAT.",
    "exp.r3": "Generé 15 nuevos contratos B2B respaldando US$1.5M+ en ingresos anuales en la Zona Económica Especial del Mariel, Cuba. 90% de retención sobre 100+ cuentas.",
    "exp.r4": "Lideré el discovery técnico y la alineación de soluciones frente al cliente, contribuyendo a un índice de satisfacción de 95%. Alineé ventas, ingeniería y marketing alrededor de un handoff más claro, acelerando en 30% los ciclos de entrega y reduciendo en 40% el tiempo de resolución de incidencias complejas.",
    "exp.r5": "Impartí Matemática Discreta, Probabilidades y Estadística a 100+ estudiantes de pregrado; elevé la tasa de promoción un 15%.",
    "exp.r6": "Ejecuté 2,000+ auditorías técnicas SEO en 600+ sitios web; contribuí a SEOWebMas, herramienta nacional de diagnóstico.",

    "contact.title": "Trabajemos juntos",
    "contact.lead": "Estoy disponible para trabajo de liderazgo en ingeniería de calidad y entrega potenciada por IA con equipos distribuidos de software — contrato o remoto full-time.",

    "footer.tag": "Líder de Ingeniería de Calidad · Sistemas de Entrega Potenciados por IA",
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
