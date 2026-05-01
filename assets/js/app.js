/**
 * app.js — Page navigation & app initialisation
 */

/* ════════════════════════════════════
   PAGE NAVIGATION
════════════════════════════════════ */
let currentPage = 'home';

function navigate(page) {
  if (page === currentPage) return;
  const prev = document.getElementById('page-' + currentPage);
  const next = document.getElementById('page-' + page);
  if (!next) return;

  prev.classList.add('exit');
  prev.classList.remove('active');
  setTimeout(() => prev.classList.remove('exit'), 480);

  next.classList.add('active');
  next.scrollTop = 0;
  currentPage = page;

  // Update nav highlight
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  // Animate skill bars when about page loads
  if (page === 'about') setTimeout(animateSkills, 320);
}

/* ════════════════════════════════════
   MOBILE MENU
════════════════════════════════════ */
function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', e => {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('nav-hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && e.target !== btn) {
    menu.classList.remove('open');
  }
});

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  // Highlight home nav link on load
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === 'home');
  });
  // Console hint for admin
  console.log(
    '%c[AK Portfolio] Press Ctrl+Shift+A to open the admin panel.',
    'color:#00f5d4;font-family:monospace;font-size:13px;background:#050a0f;padding:4px 8px;'
  );
});
