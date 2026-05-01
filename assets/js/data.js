/**
 * data.js — Runtime data store
 * Merges CONFIG defaults with any saved localStorage overrides.
 * Admin panel writes to DATA; saveAllData() persists to localStorage.
 */

function lsGet(key) {
  try { const v = localStorage.getItem('ak_' + key); return v ? JSON.parse(v) : null; }
  catch { return null; }
}
function lsSave(key, val) {
  try { localStorage.setItem('ak_' + key, JSON.stringify(val)); } catch {}
}

/* Deep-merge saved data over CONFIG defaults */
const DATA = {
  stats:    lsGet('stats')    || { ...CONFIG.stats },
  about:    lsGet('about')    || { ...CONFIG.about },
  skills:   lsGet('skills')   || CONFIG.skills.map(s => ({ ...s })),
  projects: lsGet('projects') || CONFIG.projects.map(p => ({ ...p })),
  tools:    lsGet('tools')    || CONFIG.tools.map(t => ({ ...t })),
  certs:    lsGet('certs')    || CONFIG.certs.map(c => ({ ...c })),
  socials:  lsGet('socials')  || CONFIG.socials.map(s => ({ ...s }))
};

function saveAllData() {
  lsSave('stats',    DATA.stats);
  lsSave('about',    DATA.about);
  lsSave('skills',   DATA.skills);
  lsSave('projects', DATA.projects);
  lsSave('tools',    DATA.tools);
  lsSave('certs',    DATA.certs);
  lsSave('socials',  DATA.socials);
  showToast('✓ All data saved!');
}
