(function initRazmehrBirthdayTheme(){
  'use strict';

  const features = window.RAZMEHR_FEATURES || {};
  const endAt = features.birthdayThemeEndsAt
    ? Date.parse(features.birthdayThemeEndsAt)
    : null;
  const hasValidEnd = Number.isFinite(endAt);

  if(
    !features.birthdayTheme ||
    (features.birthdayThemeEndsAt && !hasValidEnd) ||
    (hasValidEnd && Date.now() >= endAt) ||
    document.querySelector('[data-rz-birthday-theme]')
  ) return;

  const mountTheme = () => {
    if(!document.body || document.querySelector('[data-rz-birthday-theme]')) return;

    const host = document.createElement('div');
    host.className = 'rz-birthday';
    host.dataset.rzBirthdayTheme = '';
    host.setAttribute('aria-hidden', 'true');
    host.innerHTML = `
      <div class="rz-birthday__confetti" aria-hidden="true"></div>
      <div class="rz-birthday__wish">
        <span class="rz-birthday__wish-icon">🎂</span>
        <strong>تولدت مبارک</strong>
        <span class="rz-birthday__wish-sparkle">✨</span>
      </div>
      <span class="rz-birthday__sticker rz-birthday__sticker--cake">🎂</span>
      <span class="rz-birthday__sticker rz-birthday__sticker--party">🎉</span>
      <span class="rz-birthday__sticker rz-birthday__sticker--sparkler">🎇</span>
      <span class="rz-birthday__sticker rz-birthday__sticker--balloon">🎈</span>
      <span class="rz-birthday__sticker rz-birthday__sticker--stars">✨</span>
    `;

    const confetti = host.querySelector('.rz-birthday__confetti');
    const palette = ['#D14A6E','#A8459A','#6E5DBE','#3E8ABF','#46B394','#C2A35E'];
    const shapes = ['square','round','ribbon'];

    for(let i = 0; i < 30; i += 1){
      const piece = document.createElement('i');
      piece.className = `rz-birthday__confetti-piece rz-birthday__confetti-piece--${shapes[i % shapes.length]}`;
      piece.style.setProperty('--rz-x', `${(i * 37) % 101}vw`);
      piece.style.setProperty('--rz-drift', `${((i % 7) - 3) * 17}px`);
      piece.style.setProperty('--rz-delay', `${(i % 10) * 0.12}s`);
      piece.style.setProperty('--rz-duration', `${3.8 + (i % 6) * 0.32}s`);
      piece.style.setProperty('--rz-color', palette[i % palette.length]);
      piece.style.setProperty('--rz-size', `${6 + (i % 4) * 2}px`);
      piece.style.setProperty('--rz-spin', `${180 + (i % 5) * 90}deg`);
      confetti.appendChild(piece);
    }

    document.body.classList.add('birthday-theme-on');
    document.body.appendChild(host);

    if(hasValidEnd){
      window.setTimeout(() => {
        host.classList.add('is-ending');
        document.body.classList.remove('birthday-theme-on');
        window.setTimeout(() => host.remove(), 500);
      }, Math.max(0, endAt - Date.now()));
    }

    window.setTimeout(() => host.querySelector('.rz-birthday__wish')?.classList.add('is-calm'), 7500);
    window.setTimeout(() => confetti?.remove(), 7200);
  };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', mountTheme, {once:true});
  } else {
    mountTheme();
  }
})();
