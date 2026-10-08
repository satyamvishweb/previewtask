document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;

  // 1. WCAG Fixed 3-Stage Font Resizer
  // A- -> 14px (Chhota)
  // A  -> 16px (Normal Default)
  // A+ -> 18px (Bada - Fixed limit, bar-bar bada nahi hoga)
  const btnDecrease = document.getElementById('btn-decrease');
  const btnReset = document.getElementById('btn-reset');
  const btnIncrease = document.getElementById('btn-increase');

  btnDecrease?.addEventListener('click', () => {
    root.style.fontSize = '14px';
  });

  btnReset?.addEventListener('click', () => {
    root.style.fontSize = '16px';
  });

  btnIncrease?.addEventListener('click', () => {
    root.style.fontSize = '18px';
  });

  // 2. WCAG High Contrast Toggle
  const btnContrast = document.getElementById('btn-contrast');
  btnContrast?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  // 3. Mobile Navigation Menu Toggle
  const toggleBtn = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  toggleBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  // 4. Tab Switching Logic (Active Tenders / Circulars / Recruitment)
  const tabButtons = document.querySelectorAll('.tenders-section .tab-btn');
  const tabPanes = document.querySelectorAll('.tenders-section .tab-pane-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Sabhi tabs aur content se active class hatayein
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Clicked button aur uske respective pane ko activate karein
      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
});

// Tab Switching Logic for Tenders & Circulars
  const tabButtons = document.querySelectorAll('.tenders-section .tab-btn');
  const tabPanes = document.querySelectorAll('.tenders-section .tab-pane-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      // Remove active from all buttons & panes
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      // Activate current button & targeted pane
      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });