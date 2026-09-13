/**
 * Call-to-action sections.
 */

export function createCTAStandard(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-cta';
  el.innerHTML = `
    <h2>Ready to start?</h2>
    <p>Install the kit and build your first screen in minutes.</p>
    <button type="button" class="mui-button">Get Motion UI Kit</button>
  `;
  return el;
}

export function createCTABanner(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-cta mui-cta--banner';
  el.innerHTML = `
    <div class="mui-cta-content">
      <h2>Ship faster with motion</h2>
      <button type="button" class="mui-button">Start free</button>
    </div>
  `;
  return el;
}
