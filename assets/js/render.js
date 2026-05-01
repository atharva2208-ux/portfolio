/**
 * render.js — DOM rendering for the public portfolio pages
 */

/* ── Stats ── */
function renderStats() {
  document.getElementById('stat-ctf').textContent  = DATA.stats.ctf;
  document.getElementById('stat-proj').textContent = DATA.stats.proj;
  document.getElementById('stat-cve').textContent  = DATA.stats.cve;
}

/* ── About ── */
function renderAbout() {
  const title = document.getElementById('about-section-title');
  const bio   = document.getElementById('about-body-text');
  if (title) title.textContent = DATA.about.subtitle;
  if (bio)   bio.innerHTML     = DATA.about.bio;
}

/* ── Skills ── */
function renderSkills() {
  const c = document.getElementById('skills-container');
  if (!c) return;
  c.innerHTML = DATA.skills.map(s => `
    <div class="skill-row">
      <div class="skill-label">
        <span class="skill-name">${escHtml(s.name)}</span>
        <span class="skill-pct">${s.pct}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" data-width="${s.pct}" style="width:0"></div>
      </div>
    </div>`).join('');
}

function animateSkills() {
  document.querySelectorAll('#page-about .skill-fill').forEach(b => {
    b.style.width = b.dataset.width + '%';
  });
}

/* ── Tag parser ── */
const TAG_COLORS = { c:'tag-c', b:'tag-b', r:'tag-r', a:'tag-a', g:'tag-g' };
function parseTags(str) {
  return (str || '').split(',').map(t => t.trim()).filter(Boolean).map(t => {
    const [prefix, ...rest] = t.split(':');
    const label = rest.length ? rest.join(':') : prefix;
    const cls   = TAG_COLORS[prefix] || 'tag-c';
    return `<span class="tag ${cls}">${escHtml(label)}</span>`;
  }).join('');
}

/* ── Projects ── */
function renderProjects() {
  const g = document.getElementById('projects-grid');
  if (!g) return;
  if (!DATA.projects.length) {
    g.innerHTML = '<p style="color:var(--muted);font-family:var(--mono);font-size:0.8rem;">No projects yet. Add some via the admin panel.</p>';
    return;
  }
  g.innerHTML = DATA.projects.map(p => `
    <div class="project-card">
      <div class="project-top">
        <div class="project-icon">${p.icon || '🔧'}</div>
        <div class="project-tags">${parseTags(p.tags)}</div>
      </div>
      <div class="project-title">${escHtml(p.title)}</div>
      <div class="project-desc">${escHtml(p.desc)}</div>
      <div class="project-footer">
        ${p.gh   ? `<a href="${p.gh}"   class="proj-link" target="_blank" rel="noopener">→ GitHub</a>`  : ''}
        ${p.demo ? `<a href="${p.demo}" class="proj-link" target="_blank" rel="noopener">→ Demo</a>`    : ''}
      </div>
    </div>`).join('');
}

/* ── Tools ── */
function renderTools() {
  const g = document.getElementById('tools-grid');
  if (!g) return;
  g.innerHTML = DATA.tools.map(t => `
    <div class="tool-chip">
      <div class="tool-chip-name">${escHtml(t.name)}</div>
      <div class="tool-chip-cat">${escHtml(t.cat)}</div>
    </div>`).join('');
}

/* ── Certs ── */
const BADGE_MAP = { Active: 'badge-g', Certificate: 'badge-b', Platform: 'badge-a' };
function renderCerts() {
  const l = document.getElementById('certs-list');
  if (!l) return;
  l.innerHTML = DATA.certs.map(c => `
    <div class="cert-row">
      <div>
        <div class="cert-name">${escHtml(c.name)}</div>
        <div class="cert-issuer">${escHtml(c.issuer)}</div>
      </div>
      <div class="cert-year">${escHtml(c.year)}</div>
      <div class="cert-badge">
        <span class="badge ${BADGE_MAP[c.status] || 'badge-b'}">${escHtml(c.status)}</span>
      </div>
    </div>`).join('');
}

/* ── Socials / Contact ── */
function renderContact() {
  const c = document.getElementById('contact-links');
  if (!c) return;
  const links = DATA.socials.filter(s => s.url && s.url.trim() !== '');
  c.innerHTML = links.map(s => `
    <a href="${s.url}" class="contact-link"
       ${s.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
      ${s.icon ? `<span>${s.icon}</span>` : ''} ${escHtml(s.label)}
    </a>`).join('');
}

/* ── Render all ── */
function renderAll() {
  renderStats();
  renderAbout();
  renderSkills();
  renderProjects();
  renderTools();
  renderCerts();
  renderContact();
}

/* ── Utility ── */
function escHtml(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
