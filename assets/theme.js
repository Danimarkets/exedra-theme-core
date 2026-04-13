document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

window.ExedraThemeCore = {
  version: '0.1.2'
};

document.addEventListener('click', function (event) {
  const toggle = event.target.closest('[data-mobile-nav-toggle]');
  if (!toggle) return;

  const targetId = toggle.getAttribute('aria-controls');
  const target = document.getElementById(targetId);
  if (!target) return;

  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  target.hidden = isOpen;
});
