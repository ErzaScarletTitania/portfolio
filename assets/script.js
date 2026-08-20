/* ============================================
   Liliet de la Caridad González Polanco — Portfolio script
   Language toggle (EN/ES), theme toggle, year
   ============================================ */

const I18N = {
  en: {
    "nav.about": "About",
    "nav.impact": "Impact",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.publications": "Publications",
    "nav.contact": "Contact",

    "hero.eyebrow": "Quality & delivery leadership · Remote · Lima, Peru (UTC-5) · Full US business-hours overlap",
    "hero.title": "Quality Engineering Leader for AI-Enabled Software Delivery",
    "hero.lead": "I build quality strategy, release discipline, and evidence-based delivery systems for distributed software teams. 9 years across 30+ web, mobile, desktop, and software-delivery initiatives.",
    "hero.ctaHire": "Hire me",
    "hero.ctaCv": "Download CV (EN)",
    "hero.b1": "ISTQB Certified",
    "hero.b2": "30+ Products",
    "hero.b3": "QA Strategy & Release Readiness",
    "hero.b4": "AI-Enabled Delivery",
    "hero.b5": "UTC-5 · Full US Hours Overlap",

    "about.title": "About",
    "about.p1": "ISTQB-certified <strong>quality engineering leader</strong> with 9 years across 30+ products. I design quality strategy, strengthen release readiness, and create structured workflows that improve execution and stakeholder visibility.",
    "about.p2": "I currently lead QA at ecoPortal (New Zealand), a 6-person team supporting 9 product squads, alongside a contract engagement as Project Manager — bridging engineering, stakeholders, and quality. My work combines evidence-based QA operations, delivery discipline, and AI-enabled workflow design.",
    "about.factsTitle": "Facts",
    "about.f1k": "Location", "about.f1v": "Lima, Peru",
    "about.ftzk": "Time zone", "about.ftzv": "UTC-5 · Full US business-hours overlap",
    "about.f2k": "Collaboration", "about.f2v": "Global remote · US & international teams",
    "about.f3k": "Engagement", "about.f3v": "Contract · Full-time · Remote",
    "about.f4k": "Languages", "about.f4v": "English C1 · Spanish Native · German A1",
    "about.f5k": "Certifications",

    "impact.title": "Recent Impact",
    "impact.m1": "Post-release defects across a 30+ product portfolio",
    "impact.m2": "High-impact incident resolution time",
    "impact.m3": "Bugs caught pre-UAT through risk-based testing",
    "impact.m4": "On-time deliverable approval rate",
    "impact.m5": "Testers led across 9 delivery squads at ecoPortal",
    "impact.v6": "9 years",
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
    "skills.s5d": "Sprint planning, risk tracking, stakeholder reporting, and tiered escalation frameworks across engineering, product, and executive stakeholders.",
    "skills.s6t": "Platforms & Environments",
    "skills.s6d": "Web, .NET 8 desktop, Flutter mobile, Playwright, Python, PowerShell, C#, SQL, GitHub Actions, and Azure DevOps.",

    "projects.title": "Featured Projects",
    "projects.p1": "AI-enabled quality operating model with phased execution, persistent session state, and machine-readable reporting. I designed the workflow structure, evidence model, and reporting logic.",
    "projects.p2": "Reusable framework for turning product ideas into specs, implementation milestones, and validated deliverables. I designed it to strengthen delivery traceability and execution discipline.",
    "projects.p3": "Microsoft Graph workflow that turned browser-only shared access into a reusable automation path under tenant constraints.",
    "projects.p4": "Windows-first account-isolation workflow for Codex CLI, designed to improve repeatability and reduce friction in multi-account use.",
    "projects.s1": "Operating Model · QA Strategy · Evidence Design",
    "projects.s2": "Requirements · Delivery Structure · Traceability",
    "projects.s3": "Enterprise Debugging · Workflow Design · Python CLI",
    "projects.s4": "Workflow Reliability · Windows CLI · Operations",
    "projects.cta": "View on GitHub ↗",

    "exp.title": "Experience",
    "exp.c1": "ecoPortal · New Zealand · Remote",
    "exp.c1d": "Jul 2026 — Present",
    "exp.c2": "Cuban Engineer · Contract · Remote",
    "exp.c2d": "Sep 2021 — Present",
    "exp.c3": "Universidad de Ciencias Informáticas (UCI)",
    "exp.c3d": "Sep 2017 — Aug 2021",
    "exp.h0r": "QA Lead",
    "exp.h1r": "Project Manager",
    "exp.h1d": "Sep 2025 — Present",
    "exp.h2r": "QA Lead",
    "exp.h2d": "Sep 2021 — Aug 2025",
    "exp.h3r": "B2B Sales Representative",
    "exp.h3d": "Sep 2020 — Aug 2021",
    "exp.h4r": "Technical Sales Specialist",
    "exp.h4d": "Apr 2019 — Aug 2020",
    "exp.h5r": "University Lecturer (Part-Time)",
    "exp.h5d": "Sep 2017 — Aug 2021",
    "exp.h6r": "SEO Specialist",
    "exp.h6d": "Sep 2017 — Mar 2019",
    "exp.r0": "Lead a 6-person QA team supporting all 9 active product squads, owning department strategy, testing standards, and QA representation with engineering and executive stakeholders. I delivered the department's first documented QA status assessment within 2 weeks of joining by running 14 structured interviews across 5 stakeholder groups, and set the technical direction for QA automation and AI-assisted testing — shaping the Playwright and Claude-based roadmap that extends the team beyond frontend-only E2E testing.",
    "exp.r1": "Lead delivery for a top-priority software program across a multi-stream roadmap, coordinating a cross-functional team of 3 engineers and owning planning, risk tracking, and stakeholder communication. I designed a tiered escalation framework that reduced high-impact incident resolution time by 40%, instituted milestone demos that increased on-time deliverable approval to 90%, and standardized weekly financial and burn-rate reporting across every delivery milestone.",
    "exp.r2": "Built and led the QA function for a 30+ product portfolio spanning web, mobile, desktop, and software delivery initiatives. I defined a unified QA strategy aligned with ISTQB, Scrum, and CMMI; led risk-based test planning that reduced post-release defects by 20%; directed cross-platform testing that raised pre-UAT defect detection to 60%; and cut manual regression effort by ~30% per release cycle.",
    "exp.r3": "Generated 15 new B2B contracts supporting $1.5M+ in annual revenue in Cuba's Mariel Special Economic Zone. 90% client retention over 100+ accounts.",
    "exp.r4": "Owned technical discovery and customer-facing solution alignment, contributing to a 95% customer-satisfaction score. Aligned sales, engineering, and marketing around a clearer discovery-to-handoff model, accelerating solution-delivery cycles by 30% and reducing complex-issue resolution time by 40%.",
    "exp.r5": "Taught Discrete Mathematics, Probability, and Statistics to 100+ undergraduates; lifted cohort promotion rates 15%.",
    "exp.r6": "Executed 2,000+ technical SEO audits across 600+ websites; contributed to SEOWebMas, a national diagnostic tool.",

    "pub.title": "Publications",
    "pub.p1": "Territory stratification method based on geographic information systems and geometric similarity measures",
    "pub.v1": "Cuban Journal of Medical Informatics · 2021",
    "pub.p2": "Vulnerability Information Management Android App",
    "pub.v2": "SIGESTIC · 2019",
    "pub.p3": "Internal configurations for strengthening security in Joomla",
    "pub.v3": "SIGESTIC · 2019",

    "contact.title": "Let's work together",
    "contact.lead": "I partner with distributed software teams on quality engineering leadership and AI-enabled delivery — as an embedded contract lead or remote full-time. Based in Lima, Peru (UTC-5), I work a full overlap with US business hours.",

    "footer.tag": "Quality Engineering Leader · AI-Enabled Delivery Systems",
    "footer.built": "Built static · Uses Google Analytics · Deploys to GitHub Pages, Netlify, or Cloudflare Pages out of the box."
  },

  es: {
    "nav.about": "Acerca",
    "nav.impact": "Impacto",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.publications": "Publicaciones",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Liderazgo de calidad y entrega · Remoto · Lima, Perú (UTC-5) · Solapamiento total con el horario laboral de EE. UU.",
    "hero.title": "Líder de Ingeniería de Calidad para Entrega de Software Potenciada por IA",
    "hero.lead": "Construyo estrategia de calidad, disciplina de liberación y sistemas de entrega basados en evidencia para equipos distribuidos de software. 9 años en 30+ iniciativas web, móviles, de escritorio y de entrega de software.",
    "hero.ctaHire": "Contrátame",
    "hero.ctaCv": "Descargar CV (ES)",
    "hero.b1": "Certificación ISTQB",
    "hero.b2": "30+ productos",
    "hero.b3": "Estrategia de QA y Preparación para Liberación",
    "hero.b4": "Entrega Potenciada por IA",
    "hero.b5": "UTC-5 · Solapamiento con horario de EE. UU.",

    "about.title": "Acerca de mí",
    "about.p1": "Certificada ISTQB como <strong>líder de ingeniería de calidad</strong> con 9 años en 30+ productos. Diseño la estrategia de calidad, fortalezco la preparación para liberación y creo flujos estructurados que mejoran la ejecución y la visibilidad para las partes interesadas.",
    "about.p2": "Actualmente lidero QA en ecoPortal (Nueva Zelanda), un equipo de 6 personas que da soporte a 9 squads de producto, en paralelo a un contrato como Gerente de Proyecto — puente entre ingeniería, partes interesadas y calidad. Mi trabajo combina operaciones de QA basadas en evidencia, disciplina de entrega y diseño de flujos potenciados por IA.",
    "about.factsTitle": "Datos",
    "about.f1k": "Ubicación", "about.f1v": "Lima, Perú",
    "about.ftzk": "Zona horaria", "about.ftzv": "UTC-5 · Solapamiento total con el horario de EE. UU.",
    "about.f2k": "Colaboración", "about.f2v": "Remota global · Equipos de EE. UU. e internacionales",
    "about.f3k": "Contratación", "about.f3v": "Contrato · Tiempo completo · Remoto",
    "about.f4k": "Idiomas", "about.f4v": "Inglés C1 · Español Nativo · Alemán A1",
    "about.f5k": "Certificaciones",

    "impact.title": "Impacto Reciente",
    "impact.m1": "Defectos posteriores a liberación en portafolio de 30+ productos",
    "impact.m2": "Tiempo de resolución de incidentes críticos",
    "impact.m3": "Bugs detectados antes de UAT con pruebas basadas en riesgo",
    "impact.m4": "Tasa de aprobación de entregables en tiempo",
    "impact.m5": "Testers liderados en 9 squads de entrega en ecoPortal",
    "impact.v6": "9 años",
    "impact.m6": "Liderando calidad y entrega",

    "skills.title": "Lo que hago",
    "skills.s1t": "Liderazgo y Estrategia de QA",
    "skills.s1d": "Estrategia basada en riesgo, preparación para liberación, alineación ISTQB / Scrum / CMMI, liderazgo de equipos distribuidos y mentoría.",
    "skills.s2t": "Sistemas de Entrega Potenciados por IA",
    "skills.s2d": "Diseño flujos estructurados, captura de evidencia y salidas legibles por máquina que hacen la ejecución más repetible y auditable.",
    "skills.s3t": "Operaciones de QA Basadas en Evidencia",
    "skills.s3d": "QA orientada a liberación, visibilidad de defectos, estándares de evidencia y reportería lista para decisión en equipos distribuidos.",
    "skills.s4t": "Diseño de Flujos y Tooling",
    "skills.s4d": "Utilidades de línea de comandos con prioridad en Windows, soporte de evidencia con OpenCV, artefactos estructurados y patrones operativos reutilizables.",
    "skills.s5t": "Entrega Multifuncional",
    "skills.s5d": "Planificación de sprints, gestión de riesgos, reportería para partes interesadas y marcos de escalamiento por niveles entre ingeniería, producto y dirección.",
    "skills.s6t": "Plataformas y Entornos",
    "skills.s6d": "Web, escritorio .NET 8, móvil Flutter, Playwright, Python, PowerShell, C#, SQL, GitHub Actions y Azure DevOps.",

    "projects.title": "Proyectos Destacados",
    "projects.p1": "Modelo operativo de calidad potenciado por IA con ejecución por fases, estado persistente y reportería legible por máquina. Diseñé la estructura del flujo, el modelo de evidencia y la lógica de reportería.",
    "projects.p2": "Marco reutilizable para convertir ideas de producto en especificaciones, hitos de implementación y entregables validados. Lo diseñé para fortalecer la trazabilidad y la disciplina de ejecución.",
    "projects.p3": "Flujo con Microsoft Graph que convirtió acceso compartido solo visible en navegador en una ruta reutilizable de automatización bajo restricciones del tenant.",
    "projects.p4": "Flujo con prioridad en Windows para aislamiento de cuentas en Codex CLI, diseñado para mejorar la repetibilidad y reducir la fricción en el uso multicuenta.",
    "projects.s1": "Modelo Operativo · Estrategia de QA · Diseño de Evidencia",
    "projects.s2": "Requerimientos · Estructura de Entrega · Trazabilidad",
    "projects.s3": "Depuración Empresarial · Diseño de Flujos · Línea de comandos en Python",
    "projects.s4": "Confiabilidad de Flujos · Línea de comandos en Windows · Operaciones",
    "projects.cta": "Ver en GitHub ↗",

    "exp.title": "Experiencia",
    "exp.c1": "ecoPortal · Nueva Zelanda · Remoto",
    "exp.c1d": "Jul 2026 — Presente",
    "exp.c2": "Cuban Engineer · Contrato · Remoto",
    "exp.c2d": "Sep 2021 — Presente",
    "exp.c3": "Universidad de Ciencias Informáticas (UCI)",
    "exp.c3d": "Sep 2017 — Ago 2021",
    "exp.h0r": "Líder de QA",
    "exp.h1r": "Gerente de Proyecto",
    "exp.h1d": "Sep 2025 — Presente",
    "exp.h2r": "Líder de QA",
    "exp.h2d": "Sep 2021 — Ago 2025",
    "exp.h3r": "Representante de Ventas B2B",
    "exp.h3d": "Sep 2020 — Ago 2021",
    "exp.h4r": "Especialista de Ventas Técnicas",
    "exp.h4d": "Abr 2019 — Ago 2020",
    "exp.h5r": "Docente Universitaria (Tiempo Parcial)",
    "exp.h5d": "Sep 2017 — Ago 2021",
    "exp.h6r": "Especialista SEO",
    "exp.h6d": "Sep 2017 — Mar 2019",
    "exp.r0": "Lidero un equipo de QA de 6 personas que da soporte a los 9 squads de producto activos, asumiendo la estrategia del departamento, los estándares de prueba y la representación de QA ante ingeniería y la dirección. Entregué la primera evaluación documentada del estado de QA del departamento en las primeras 2 semanas, mediante 14 entrevistas estructuradas a 5 grupos de interés, y definí la dirección técnica de la automatización de QA y las pruebas asistidas por IA — dando forma a la hoja de ruta con Playwright y Claude que lleva al equipo más allá de las pruebas E2E solo de frontend.",
    "exp.r1": "Lidero la entrega de un programa de software de alta prioridad en una hoja de ruta de múltiples frentes, coordinando un equipo multifuncional de 3 ingenieros y asumiendo planificación, seguimiento de riesgos y comunicación con las partes interesadas. Diseñé un marco de escalación por niveles que redujo en 40% el tiempo de resolución de incidentes críticos, instituí demos de hitos que elevaron a 90% la aprobación puntual de entregables y estandaricé la reportería semanal financiera y de consumo presupuestal en cada hito de entrega.",
    "exp.r2": "Construí y lideré la función de QA para un portafolio de 30+ productos que abarcó iniciativas web, móviles, de escritorio y de entrega de software. Definí una estrategia unificada de QA alineada con ISTQB, Scrum y CMMI; lideré planificación basada en riesgo que redujo en 20% los defectos posteriores a liberación; dirigí pruebas multiplataforma que elevaron a 60% la detección de defectos antes de UAT; y reduje ~30% el esfuerzo de regresión manual por ciclo de liberación.",
    "exp.r3": "Generé 15 nuevos contratos B2B respaldando US$1.5M+ en ingresos anuales en la Zona Económica Especial del Mariel, Cuba. 90% de retención sobre 100+ cuentas.",
    "exp.r4": "Lideré el descubrimiento técnico y la alineación de soluciones frente al cliente, contribuyendo a un índice de satisfacción de 95%. Alineé ventas, ingeniería y marketing alrededor de un traspaso más claro, acelerando en 30% los ciclos de entrega y reduciendo en 40% el tiempo de resolución de incidencias complejas.",
    "exp.r5": "Impartí Matemática Discreta, Probabilidades y Estadística a 100+ estudiantes de pregrado; elevé la tasa de promoción un 15%.",
    "exp.r6": "Ejecuté 2,000+ auditorías técnicas SEO en 600+ sitios web; contribuí a SEOWebMas, herramienta nacional de diagnóstico.",

    "pub.title": "Publicaciones",
    "pub.p1": "Método de estratificación de territorios basado en sistemas de información geográfica y medidas de similitud geométrica",
    "pub.v1": "Revista Cubana de Informática Médica · 2021",
    "pub.p2": "Aplicación Android para la gestión de información de vulnerabilidades",
    "pub.v2": "SIGESTIC · 2019",
    "pub.p3": "Configuraciones internas para fortalecer la seguridad en Joomla",
    "pub.v3": "SIGESTIC · 2019",

    "contact.title": "Trabajemos juntos",
    "contact.lead": "Colaboro con equipos distribuidos de software en liderazgo de ingeniería de calidad y entrega potenciada por IA — como líder de contrato integrada en el equipo o en remoto a tiempo completo. Con base en Lima, Perú (UTC-5), trabajo en solapamiento total con el horario laboral de EE. UU.",

    "footer.tag": "Líder de Ingeniería de Calidad · Sistemas de Entrega Potenciados por IA",
    "footer.built": "Sitio estático · Usa Google Analytics · Despliega en GitHub Pages, Netlify o Cloudflare Pages sin configuración."
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
    const storedLang = localStorage.getItem('lang');
    if (storedLang) {
      lang = storedLang;
    } else if ((navigator.language || 'en').toLowerCase().startsWith('es')) {
      lang = 'es';
    }
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) theme = storedTheme;
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) theme = 'dark';
  } catch (e) {}
  applyLang(lang);
  applyTheme(theme);
})();
