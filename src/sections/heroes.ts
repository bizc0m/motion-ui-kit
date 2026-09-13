/**
 * Hero sections.
 */

export function createHeroCenter(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-hero mui-hero--center';
  el.innerHTML = `
    <h1>Build motion, faster</h1>
    <p>A production-ready UI kit engineered for animation.</p>
    <button type="button" class="mui-button">Get started</button>
  `;
  return el;
}

export function createHeroSplit(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-hero mui-hero--split';
  el.innerHTML = `
    <div class="mui-hero-text">
      <h1>Motion for product teams</h1>
      <p>Ship polished interfaces with pre-built components and sections.</p>
      <button type="button" class="mui-button">Explore</button>
    </div>
    <div class="mui-hero-visual" aria-hidden="true"></div>
  `;
  return el;
}

export function createHeroFullBleed(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-hero mui-hero--full-bleed';
  el.innerHTML = `
    <div class="mui-hero-content">
      <h1>Full-bleed hero</h1>
      <p>Immersive backgrounds and bold typography.</p>
    </div>
  `;
  return el;
}
