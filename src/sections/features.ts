/**
 * Feature sections.
 */

export function createFeaturesGrid(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-features mui-features--grid';
  el.innerHTML = `
    <h2>Features</h2>
    <div class="mui-grid-3">
      <article class="mui-card"><h4>Fast</h4><p>Hardware-accelerated motion.</p></article>
      <article class="mui-card"><h4>Modular</h4><p>Use one piece or the whole kit.</p></article>
      <article class="mui-card"><h4>Accessible</h4><p>Built with semantic markup.</p></article>
    </div>
  `;
  return el;
}

export function createFeaturesCards(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-features mui-features--cards';
  el.innerHTML = `
    <h2>Why Motion UI Kit?</h2>
    <div class="mui-row">
      <article class="mui-card mui-card--raised"><h4>Components</h4><p>38 ready-made controls.</p></article>
      <article class="mui-card mui-card--raised"><h4>Sections</h4><p>30 landing patterns.</p></article>
    </div>
  `;
  return el;
}

export function createFeaturesSplit(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-features mui-features--split';
  el.innerHTML = `
    <div class="mui-split">
      <div class="mui-split-visual" aria-hidden="true"></div>
      <div class="mui-split-text">
        <h2>Designed for motion</h2>
        <p>Every component ships with entrance and interaction states.</p>
      </div>
    </div>
  `;
  return el;
}
