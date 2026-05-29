const CONTENT_URL = 'content/site-content.json';

const state = {
  lang: 'en',
  theme: 'light',
  content: null,
};

function byId(id) {
  return document.getElementById(id);
}

function pickText(node, lang) {
  return node?.[lang] ?? node?.en ?? '';
}

function setText(id, value) {
  const el = byId(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = byId(id);
  if (el) el.innerHTML = value;
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = byId('themeToggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch {}
}

function applyLang(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  const content = state.content;
  if (!content) return;

  setText('brandName', content.brand.name);
  setText('brandMark', content.brand.mark);
  setText('heroEyebrow', pickText(content.hero.eyebrow, lang));
  setText('heroTitle', pickText(content.hero.title, lang));
  setText('heroLead', pickText(content.hero.lead, lang));
  setText('aboutTitle', pickText(content.about.title, lang));
  setHtml('aboutP1', pickText(content.about.p1, lang));
  setHtml('aboutP2', pickText(content.about.p2, lang));
  setText('factsTitle', pickText(content.about.factsTitle, lang));
  setText('impactTitle', pickText(content.impact.title, lang));
  setText('skillsTitle', pickText(content.skills.title, lang));
  setText('projectsTitle', pickText(content.projects.title, lang));
  setText('experienceTitle', pickText(content.experience.title, lang));
  setText('contactTitle', pickText(content.contact.title, lang));
  setText('contactLead', pickText(content.contact.lead, lang));
  setText('footerTag', pickText(content.footer.tag, lang));
  setText('footerBuilt', pickText(content.footer.built, lang));

  renderNav();
  renderBadges();
  renderCtas();
  renderFacts();
  renderMetrics();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderContactCtas();

  const cv = byId('cvDownload');
  if (cv) cv.href = lang === 'es' ? content.assets.cv.es : content.assets.cv.en;

  try { localStorage.setItem('lang', lang); } catch {}
}

function renderNav() {
  const nav = byId('navLinks');
  nav.innerHTML = state.content.nav.items.map(item =>
    `<a href="${item.href}">${pickText(item.label, state.lang)}</a>`
  ).join('');
}

function renderBadges() {
  const host = byId('heroBadges');
  host.innerHTML = state.content.hero.badges.map(text => `<span class="badge">${text}</span>`).join('');
}

function renderCtas() {
  const host = byId('heroCtas');
  host.innerHTML = state.content.hero.ctas.map((cta, index) => {
    const cls = ['btn', cta.variant || 'btn-ghost'].join(' ');
    const attrs = cta.external ? ' target="_blank" rel="noopener"' : '';
    const id = cta.id ? ` id="${cta.id}"` : '';
    const download = cta.download ? ' download' : '';
    return `<a${id} class="${cls}" href="${cta.href}"${attrs}${download}>${pickText(cta.label, state.lang)}</a>`;
  }).join('');
}

function renderFacts() {
  const host = byId('factsList');
  host.innerHTML = state.content.about.facts.map(item =>
    `<li><strong>${pickText(item.key, state.lang)}</strong><span>${pickText(item.value, state.lang)}</span></li>`
  ).join('');
}

function renderMetrics() {
  const host = byId('metricsList');
  host.innerHTML = state.content.impact.items.map(item =>
    `<div class="metric"><span class="metric-value">${item.value}</span><span class="metric-label">${pickText(item.label, state.lang)}</span></div>`
  ).join('');
}

function renderSkills() {
  const host = byId('skillsGrid');
  host.innerHTML = state.content.skills.items.map(item =>
    `<div class="skill-card"><h3>${pickText(item.title, state.lang)}</h3><p>${pickText(item.description, state.lang)}</p></div>`
  ).join('');
}

function renderProjects() {
  const host = byId('projectsGrid');
  host.innerHTML = state.content.projects.items.map(item =>
    `<article class="project"><h3>${pickText(item.title, state.lang)}</h3><p>${pickText(item.description, state.lang)}</p><p class="stack">${item.stack}</p><a class="btn btn-ghost" href="${item.href}" target="_blank" rel="noopener">${pickText(item.cta, state.lang)}</a></article>`
  ).join('');
}

function renderTimeline() {
  const host = byId('timelineList');
  host.innerHTML = state.content.experience.items.map(item =>
    `<li><div class="t-header"><span class="t-role">${pickText(item.role, state.lang)}</span><span class="t-company">${pickText(item.company, state.lang)}</span><span class="t-date">${item.date}</span></div><p>${pickText(item.description, state.lang)}</p></li>`
  ).join('');
}

function renderContactCtas() {
  const host = byId('contactCtas');
  host.innerHTML = state.content.contact.ctas.map(cta => {
    const cls = ['btn', cta.variant || 'btn-ghost'].join(' ');
    const attrs = cta.external ? ' target="_blank" rel="noopener"' : '';
    return `<a class="${cls}" href="${cta.href}"${attrs}>${pickText(cta.label, state.lang)}</a>`;
  }).join('');
}

async function init() {
  const response = await fetch(CONTENT_URL, { cache: 'no-store' });
  state.content = await response.json();

  document.title = pickText(state.content.meta.title, state.lang);
  setText('footerYear', new Date().getFullYear());
  setText('footerName', state.content.brand.name);
  setText('brandName', state.content.brand.name);
  setText('brandMark', state.content.brand.mark);

  try {
    state.lang = localStorage.getItem('lang') || ((navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en');
    state.theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  } catch {}

  byId('langToggle').addEventListener('click', () => applyLang(state.lang === 'es' ? 'en' : 'es'));
  byId('themeToggle').addEventListener('click', () => applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  applyLang(state.lang);
  document.title = pickText(state.content.meta.title, state.lang);
  applyTheme(state.theme);
}

init().catch(error => {
  console.error(error);
  setText('brandName', 'Content failed to load');
});
