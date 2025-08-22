// public/scripts/no-flash.js
// IIFE - To avoid flash of default theme: light
(function () {
  const darkMode = localStorage.getItem('darkMode');
  // Default to dark mode if no preference is stored
  if (darkMode === null || darkMode === 'true') {
    document.documentElement.classList.add('dark');
  }
})();
