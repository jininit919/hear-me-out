(function () {
  const THEME_KEY = 'hmo_theme';

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'light' ? '☾' : '☀';
  }

  function toggleTheme() {
    const current = document.documentElement.dataset.theme || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Apply saved theme immediately (before paint)
  const saved = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(saved);

  // Expose globally
  window.toggleTheme = toggleTheme;

  // Re-apply icon after DOM ready (in case button wasn't rendered yet)
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = (document.documentElement.dataset.theme === 'light') ? '☾' : '☀';
  });
})();
