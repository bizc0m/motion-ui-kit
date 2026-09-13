/**
 * Pricing sections.
 */

export function createPricingTable(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-pricing mui-pricing--table';
  el.innerHTML = `
    <h2>Pricing</h2>
    <div class="mui-pricing-grid">
      <article class="mui-card mui-pricing-card"><h4>Starter</h4><p class="mui-price">$0</p><button class="mui-button">Choose</button></article>
      <article class="mui-card mui-pricing-card mui-pricing-card--highlight"><h4>Pro</h4><p class="mui-price">$29</p><button class="mui-button">Choose</button></article>
      <article class="mui-card mui-pricing-card"><h4>Team</h4><p class="mui-price">$99</p><button class="mui-button">Choose</button></article>
    </div>
  `;
  return el;
}

export function createPricingToggle(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-pricing mui-pricing--toggle';
  el.innerHTML = `
    <div class="mui-pricing-header">
      <h2>Simple pricing</h2>
      <label class="mui-toggle">
        <input type="checkbox" />
        <span class="mui-toggle-track" aria-hidden="true"></span>
        <span class="mui-toggle-label">Yearly billing</span>
      </label>
    </div>
    <div class="mui-pricing-grid">
      <article class="mui-card mui-pricing-card"><h4>Monthly</h4><p class="mui-price">$12/mo</p></article>
      <article class="mui-card mui-pricing-card mui-pricing-card--highlight"><h4>Yearly</h4><p class="mui-price">$99/yr</p></article>
    </div>
  `;
  return el;
}
