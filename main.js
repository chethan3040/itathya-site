// Focus Forge — landing page interactions
// Builds the dashboard mock's burn strip (48 cells) and the 35-day streak heatmap.
// Pure DOM — no framework. Runs on DOMContentLoaded via `defer`.

(function () {
  // Today's burn — 48 fifteen-minute cells, 06:00 → 18:00
  const BURN_PATTERN = [
    'dim', 'dim', 'dim', 'dim', 'dim', 'warm', 'warm', 'warm',
    'lit', 'lit', 'lit', 'lit', 'lit', 'lit', 'dim', 'dim',
    'lit', 'lit', 'lit', 'lit', 'lit', 'lit', 'lit', 'lit',
    'lit', 'now', 'dim', 'dim', 'dim', 'warm', 'warm', 'warm',
    'dim', 'dim', 'dim', 'dim', 'warm', 'warm', 'dim', 'dim',
    'dim', 'dim', 'dim', 'dim', 'dim', 'dim', 'dim', 'dim'
  ];

  const strip = document.getElementById('hsstrip');
  if (strip) {
    const frag = document.createDocumentFragment();
    BURN_PATTERN.forEach(state => {
      const cell = document.createElement('div');
      cell.className = 'hs-cell ' + state;
      frag.appendChild(cell);
    });
    strip.appendChild(frag);
  }

  // 35-day streak heatmap. Today (last cell) pulses.
  const STREAK_INTENSITY = [
    0.6, 0.4, 0.8, 1.0, 0.5, 0,   0.7,
    0.9, 0.6, 0.5, 1.0, 0.4, 0.8, 0.6,
    0.5, 0.7, 1.0, 0.6, 0.4, 0.8, 0.7,
    0.6, 1.0, 0.5, 0.7, 0.8, 0.6, 0.4,
    1.0, 0.7, 0.5, 0.8, 1.0, 0.6, 1.0
  ];

  function intensityColor(v) {
    if (v >= 0.9) return 'var(--ember)';
    if (v >= 0.6) return 'rgba(245, 165, 36, 0.6)';
    if (v >= 0.3) return 'rgba(245, 165, 36, 0.3)';
    return 'rgba(255, 255, 255, 0.04)';
  }

  const streak = document.getElementById('streakcells');
  if (streak) {
    const lastIdx = STREAK_INTENSITY.length - 1;
    const frag = document.createDocumentFragment();
    STREAK_INTENSITY.forEach((v, i) => {
      const cell = document.createElement('div');
      cell.className = 'streak-cell' + (i === lastIdx ? ' now' : '');
      cell.style.background = intensityColor(v);
      frag.appendChild(cell);
    });
    streak.appendChild(frag);
  }
})();
