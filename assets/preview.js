(() => {
  'use strict';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-animated-preview]').forEach(preview => {
    const img = preview.querySelector('img');
    const button = preview.querySelector('button');
    const path = button.querySelector('path');
    const label = preview.dataset.previewLabel || 'Reliable VIO experimental preview';
    let playing = !reducedMotion.matches;
    const update = () => {
      img.src = playing ? img.dataset.animationSrc : img.dataset.posterSrc;
      button.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${label}`);
      path.setAttribute('d', playing ? 'M8 5v14M16 5v14' : 'm8 5 11 7-11 7z');
    };
    button.hidden = false;
    button.addEventListener('click', () => { playing = !playing; update(); });
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) { playing = false; update(); }
    });
    update();
  });
})();
