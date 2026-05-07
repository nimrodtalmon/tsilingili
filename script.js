// tiny bits of life

// smooth scroll for nav anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// random retro tagline rotation in the kicker
const kicker = document.querySelector('.kicker');
if (kicker) {
  const lines = [
    'transmission incoming · channel 88.8 · bring snacks',
    'broadcasting from a sock drawer · est. last tuesday',
    'now buffering · please blink twice to continue',
    'signal: strong · plot: weak · vibes: immaculate',
    'tsili.gili.exe is currently being awesome',
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % lines.length;
    kicker.style.opacity = '0';
    setTimeout(() => {
      kicker.textContent = lines[i];
      kicker.style.opacity = '0.85';
    }, 250);
  }, 4500);
  kicker.style.transition = 'opacity 0.25s';
}

// playful click feedback on cards
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    card.animate(
      [
        { transform: 'translateY(-4px) scale(1)' },
        { transform: 'translateY(-4px) scale(0.98)' },
        { transform: 'translateY(-4px) scale(1)' },
      ],
      { duration: 220, easing: 'ease-out' }
    );
  });
});

// konami-ish: type "tsili" anywhere to invert the universe briefly
let buffer = '';
document.addEventListener('keydown', (e) => {
  if (e.key.length !== 1) return;
  buffer = (buffer + e.key.toLowerCase()).slice(-5);
  if (buffer === 'tsili') {
    document.body.style.transition = 'filter 0.3s';
    document.body.style.filter = 'hue-rotate(180deg) invert(0.05)';
    setTimeout(() => {
      document.body.style.filter = '';
    }, 1400);
  }
});
