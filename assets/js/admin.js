/**
 * admin.js — Admin panel: auth, tabs, CRUD for all sections
 */

/* ════════════════════════════════════
   AUTH
════════════════════════════════════ */
let isLoggedIn = false;

// Secret key: Ctrl + Shift + A
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'A') openLogin();
});

function openLogin() {
  document.getElementById('admin-overlay').classList.add('show');
  setTimeout(() => document.getElementById('login-user').focus(), 120);
}
function closeLogin() {
  document.getElementById('admin-overlay').classList.remove('show');
  document.getElementById('login-err').classList.remove('show');
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
}
function doLogin() {
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  if (u === CONFIG.admin.username && p === CONFIG.admin.password) {
    isLoggedIn = true;
    closeLogin();
    openDash();
  } else {
    document.getElementById('login-err').classList.add('show');
    document.getElementById('login-pass').value = '';
  }
}
function logout() {
  isLoggedIn = false;
  document.getElementById('admin-dash').classList.remove('show');
  showToast('Logged out.');
}

/* ════════════════════════════════════
   DASHBOARD
════════════════════════════════════ */
function openDash() {
  if (!isLoggedIn) { openLogin(); return; }
  document.getElementById('admin-dash').classList.add('show');
  populateAdminForms();
}

function populateAdminForms() {
  // About
  document.getElementById('a-ctf').value      = DATA.stats.ctf;
  document.getElementById('a-proj').value     = DATA.stats.proj;
  document.getElementById('a-cve').value      = DATA.stats.cve;
  document.getElementById('a-subtitle').value = DATA.about.subtitle;
  document.getElementById('a-bio').value      = DATA.about.bio.trim();
  renderAdminProjects();
  renderAdminSkills();
  renderAdminTools();
  renderAdminCerts();
  renderSocialsEditor();
}

/* ── TABS ── */
function switchTab(id) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.admin-panel').forEach(p => p.classList.remove('active'));
  const panels = document.querySelectorAll('.admin-panel');
  const tabs   = document.querySelectorAll('.admin-tab');
  const idx    = [...panels].findIndex(p => p.id === id);
  if (idx > -1) {
    panels[idx].classList.add('active');
    tabs[idx]  && tabs[idx].classList.add('active');
  }
}

/* ════════════════════════════════════
   ABOUT
════════════════════════════════════ */
function saveAbout() {
  DATA.stats = {
    ctf:  document.getElementById('a-ctf').value.trim()  || DATA.stats.ctf,
    proj: document.getElementById('a-proj').value.trim() || DATA.stats.proj,
    cve:  document.getElementById('a-cve').value.trim()  || DATA.stats.cve
  };
  DATA.about = {
    subtitle: document.getElementById('a-subtitle').value.trim() || DATA.about.subtitle,
    bio:      document.getElementById('a-bio').value             || DATA.about.bio
  };
  renderStats(); renderAbout();
  showToast('About section saved!');
}

/* ════════════════════════════════════
   PROJECTS
════════════════════════════════════ */
let editingProjectId = null;

function renderAdminProjects() {
  const l = document.getElementById('admin-projects-list');
  if (!l) return;
  l.innerHTML = DATA.projects.map(p => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-title">${p.icon} ${escHtml(p.title)}</div>
        <div class="admin-item-sub">${escHtml(p.desc.substring(0, 90))}…</div>
      </div>
      <div class="admin-item-actions">
        <button class="btn-edit" onclick="editProject(${p.id})">Edit</button>
        <button class="btn-del btn-sm" onclick="deleteProject(${p.id})">Delete</button>
      </div>
    </div>`).join('') || '<p style="color:var(--muted);font-size:0.82rem;">No projects yet.</p>';
}

function saveProject() {
  const title = document.getElementById('p-title').value.trim();
  if (!title) { showToast('Title is required!', true); return; }
  const proj = {
    id:   editingProjectId || Date.now(),
    icon: document.getElementById('p-icon').value.trim()  || '🔧',
    title,
    desc: document.getElementById('p-desc').value.trim(),
    tags: document.getElementById('p-tags').value.trim(),
    gh:   document.getElementById('p-gh').value.trim(),
    demo: document.getElementById('p-demo').value.trim()
  };
  if (editingProjectId) {
    const idx = DATA.projects.findIndex(p => p.id === editingProjectId);
    if (idx > -1) DATA.projects[idx] = proj;
    editingProjectId = null;
  } else {
    DATA.projects.push(proj);
  }
  cancelEditProject();
  renderAdminProjects(); renderProjects();
  showToast('Project saved!');
}

function editProject(id) {
  const p = DATA.projects.find(x => x.id === id);
  if (!p) return;
  editingProjectId = id;
  document.getElementById('p-icon').value  = p.icon;
  document.getElementById('p-title').value = p.title;
  document.getElementById('p-desc').value  = p.desc;
  document.getElementById('p-tags').value  = p.tags;
  document.getElementById('p-gh').value    = p.gh;
  document.getElementById('p-demo').value  = p.demo;
  document.getElementById('proj-form-title').textContent = 'Edit Project';
  document.getElementById('tab-projects').scrollTop = 0;
}

function deleteProject(id) {
  if (!confirm('Delete this project?')) return;
  DATA.projects = DATA.projects.filter(p => p.id !== id);
  renderAdminProjects(); renderProjects();
  showToast('Project deleted.');
}

function cancelEditProject() {
  editingProjectId = null;
  ['p-icon','p-title','p-desc','p-tags','p-gh','p-demo'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('proj-form-title').textContent = 'Add New Project';
}

/* ════════════════════════════════════
   SKILLS
════════════════════════════════════ */
function renderAdminSkills() {
  const c = document.getElementById('admin-skills-list');
  if (!c) return;
  c.innerHTML = DATA.skills.map((s, i) => `
    <div class="skill-edit-item">
      <div class="skill-edit-name">${escHtml(s.name)}</div>
      <input class="skill-num-input" type="number" value="${s.pct}" min="0" max="100"
        onchange="DATA.skills[${i}].pct = Math.min(100,Math.max(0,+this.value)); renderSkills();" />
      <button class="btn-del btn-sm" onclick="deleteSkill(${i})">✕</button>
    </div>`).join('') || '<p style="color:var(--muted);font-size:0.82rem;">No skills yet.</p>';
}

function addSkill() {
  const name = document.getElementById('s-name').value.trim();
  const pct  = Math.min(100, Math.max(0, parseInt(document.getElementById('s-pct').value) || 75));
  if (!name) { showToast('Skill name required!', true); return; }
  DATA.skills.push({ name, pct });
  document.getElementById('s-name').value = '';
  document.getElementById('s-pct').value  = '';
  renderAdminSkills(); renderSkills();
  showToast('Skill added!');
}

function deleteSkill(i) {
  DATA.skills.splice(i, 1);
  renderAdminSkills(); renderSkills();
  showToast('Skill removed.');
}

/* ════════════════════════════════════
   TOOLS
════════════════════════════════════ */
function renderAdminTools() {
  const l = document.getElementById('admin-tools-list');
  if (!l) return;
  l.innerHTML = DATA.tools.map((t, i) => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-title">${escHtml(t.name)}</div>
        <div class="admin-item-sub">${escHtml(t.cat)}</div>
      </div>
      <div class="admin-item-actions">
        <button class="btn-del btn-sm" onclick="deleteTool(${i})">Delete</button>
      </div>
    </div>`).join('') || '<p style="color:var(--muted);font-size:0.82rem;">No tools yet.</p>';
}

function addTool() {
  const name = document.getElementById('t-name').value.trim();
  const cat  = document.getElementById('t-cat').value.trim();
  if (!name) { showToast('Tool name required!', true); return; }
  DATA.tools.push({ name, cat: cat || 'Other' });
  document.getElementById('t-name').value = '';
  document.getElementById('t-cat').value  = '';
  renderAdminTools(); renderTools();
  showToast('Tool added!');
}

function deleteTool(i) {
  DATA.tools.splice(i, 1);
  renderAdminTools(); renderTools();
  showToast('Tool removed.');
}

/* ════════════════════════════════════
   CERTS
════════════════════════════════════ */
function renderAdminCerts() {
  const l = document.getElementById('admin-certs-list');
  if (!l) return;
  l.innerHTML = DATA.certs.map(c => `
    <div class="admin-item">
      <div class="admin-item-info">
        <div class="admin-item-title">${escHtml(c.name)}</div>
        <div class="admin-item-sub">${escHtml(c.issuer)} · ${escHtml(c.year)} · ${escHtml(c.status)}</div>
      </div>
      <div class="admin-item-actions">
        <button class="btn-del btn-sm" onclick="deleteCert(${c.id})">Delete</button>
      </div>
    </div>`).join('') || '<p style="color:var(--muted);font-size:0.82rem;">No certs yet.</p>';
}

function addCert() {
  const name = document.getElementById('c-name').value.trim();
  if (!name) { showToast('Cert name required!', true); return; }
  DATA.certs.push({
    id: Date.now(),
    name,
    issuer: document.getElementById('c-issuer').value.trim(),
    year:   document.getElementById('c-year').value.trim()   || new Date().getFullYear().toString(),
    status: document.getElementById('c-status').value
  });
  ['c-name','c-issuer','c-year'].forEach(id => document.getElementById(id).value = '');
  renderAdminCerts(); renderCerts();
  showToast('Certification added!');
}

function deleteCert(id) {
  DATA.certs = DATA.certs.filter(c => c.id !== id);
  renderAdminCerts(); renderCerts();
  showToast('Cert removed.');
}

/* ════════════════════════════════════
   SOCIALS EDITOR
════════════════════════════════════ */
function renderSocialsEditor() {
  const c = document.getElementById('socials-editor');
  if (!c) return;
  c.innerHTML = `
    <div style="display:grid;grid-template-columns:100px 1fr auto;gap:0.5rem;align-items:center;margin-bottom:0.8rem;padding-bottom:0.6rem;border-bottom:1px solid var(--border);">
      <span style="font-family:var(--mono);font-size:0.6rem;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;">Label</span>
      <span style="font-family:var(--mono);font-size:0.6rem;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase;">URL</span>
      <span></span>
    </div>
    ${DATA.socials.map((s, i) => `
      <div class="social-row" id="srow-${i}">
        <input style="background:var(--panel);border:1px solid var(--border);border-radius:2px;padding:6px 8px;color:var(--cyan);font-family:var(--mono);font-size:0.72rem;outline:none;width:100%;"
          value="${escHtml(s.label)}" onchange="DATA.socials[${i}].label=this.value" placeholder="Label" />
        <input style="background:var(--panel);border:1px solid var(--border);border-radius:2px;padding:6px 8px;color:var(--text);font-family:var(--mono);font-size:0.72rem;outline:none;width:100%;"
          value="${escHtml(s.url)}" onchange="DATA.socials[${i}].url=this.value" placeholder="https://... or mailto:..." />
        <button class="btn-del btn-sm" onclick="deleteSocial(${i})">✕</button>
      </div>`).join('')}`;
}

function addCustomSocial() {
  DATA.socials.push({ id: 'custom_' + Date.now(), label: 'New Link', icon: '🔗', url: '' });
  renderSocialsEditor();
}

function deleteSocial(i) {
  DATA.socials.splice(i, 1);
  renderSocialsEditor();
  showToast('Link removed.');
}

function saveSocials() {
  renderContact();
  showToast('Social links updated! Click Save All to persist.');
}

/* ════════════════════════════════════
   TOAST
════════════════════════════════════ */
let _toastTimer;
function showToast(msg, isErr = false) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className   = 'toast show' + (isErr ? ' toast-err' : '');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}
