(() => {
  const storageKey = 'portfolio-theme';
  const root = document.documentElement;
  let theme = 'light';

  try {
    const savedTheme = localStorage.getItem(storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
  } catch {
    // The switch still works when browser storage is unavailable.
  }
  root.dataset.theme = theme;

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');
    const controls = document.querySelector('.theme-controls');
    if (!button || !controls) return;

    const updateButton = () => {
      const isLight = root.dataset.theme === 'light';
      const isSpanish = root.lang === 'es';
      const label = isSpanish ? (isLight ? 'Modo claro' : 'Modo oscuro') : (isLight ? 'Light mode' : 'Dark mode');
      button.querySelector('.theme-label').textContent = label;
      button.querySelector('.theme-icon').textContent = isLight ? '☀' : '☾';
      button.setAttribute('aria-label', isSpanish
        ? `${label}. Cambiar a modo ${isLight ? 'oscuro' : 'claro'}`
        : `${label}. Switch to ${isLight ? 'dark' : 'light'} mode`);
    };
    document.addEventListener('languagechange', updateButton);
    updateButton();
    controls.hidden = false;

    button.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
      updateButton();
      try {
        localStorage.setItem(storageKey, root.dataset.theme);
      } catch {
        // Keep the selection for this page even if it cannot be persisted.
      }
    });
  });
})();
