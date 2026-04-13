document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

window.ExedraThemeCore = {
  version: '0.1.3'
};

document.addEventListener('click', function (event) {
  const toggle = event.target.closest('[data-mobile-nav-toggle]');
  if (toggle) {
    const targetId = toggle.getAttribute('aria-controls');
    const target = document.getElementById(targetId);
    if (target) {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      target.hidden = isOpen;
    }
  }

  const accordionToggle = event.target.closest('[data-accordion-toggle]');
  if (accordionToggle) {
    const item = accordionToggle.closest('.accordion__item');
    if (!item) return;
    const content = item.querySelector('.accordion__content');
    const isOpen = accordionToggle.getAttribute('aria-expanded') === 'true';
    accordionToggle.setAttribute('aria-expanded', String(!isOpen));
    if (content) content.hidden = isOpen;
  }
});
