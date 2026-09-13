/**
 * Social proof sections.
 */

export function createTestimonialsSlider(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-testimonials mui-testimonials--slider';
  el.innerHTML = `
    <h2>Loved by teams</h2>
    <div class="mui-slider-cards">
      <blockquote class="mui-card mui-testimonial"><p>“Speeds up our workflow.”</p><footer>— C. Engineer</footer></blockquote>
      <blockquote class="mui-card mui-testimonial"><p>“Polished out of the box.”</p><footer>— D. Founder</footer></blockquote>
    </div>
  `;
  return el;
}

export function createTestimonialsGrid(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-testimonials mui-testimonials--grid';
  el.innerHTML = `
    <h2>What people say</h2>
    <div class="mui-grid-3">
      <blockquote class="mui-card mui-testimonial"><p>“Intuitive API.”</p><footer>— E. PM</footer></blockquote>
      <blockquote class="mui-card mui-testimonial"><p>“Clean TypeScript.”</p><footer>— F. Dev</footer></blockquote>
      <blockquote class="mui-card mui-testimonial"><p>“Great motion defaults.”</p><footer>— G. Designer</footer></blockquote>
    </div>
  `;
  return el;
}

export function createLogoCloud(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-logo-cloud';
  el.innerHTML = `
    <p class="mui-section-label">Trusted by</p>
    <div class="mui-logos">
      <span>Acme</span><span>Nebula</span><span>Orbital</span><span>Kanji</span><span>Lumina</span>
    </div>
  `;
  return el;
}

export function createStatsStrip(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-stats mui-stats--strip';
  el.innerHTML = `
    <div class="mui-stats-row">
      <div><strong>10k+</strong><span>Users</span></div>
      <div><strong>99.9%</strong><span>Uptime</span></div>
      <div><strong>4.9</strong><span>Rating</span></div>
    </div>
  `;
  return el;
}

export function createStatsGrid(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-stats mui-stats--grid';
  el.innerHTML = `
    <div class="mui-grid-4">
      <div class="mui-card"><strong>38</strong><span>Components</span></div>
      <div class="mui-card"><strong>30</strong><span>Sections</span></div>
      <div class="mui-card"><strong>15</strong><span>Effects</span></div>
      <div class="mui-card"><strong>3</strong><span>Pillars</span></div>
    </div>
  `;
  return el;
}
