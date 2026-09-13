/**
 * Engagement sections: newsletter, contact, search, comparison, steps.
 */

export function createNewsletterInline(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-newsletter mui-newsletter--inline';
  el.innerHTML = `
    <h2>Stay in the loop</h2>
    <form class="mui-inline-form" onsubmit="event.preventDefault()">
      <input type="email" class="mui-input" placeholder="you@example.com" />
      <button type="submit" class="mui-button">Subscribe</button>
    </form>
  `;
  return el;
}

export function createNewsletterCard(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-newsletter mui-newsletter--card';
  el.innerHTML = `
    <div class="mui-card mui-card--raised">
      <h2>Newsletter</h2>
      <p>Get updates once a month.</p>
      <form class="mui-inline-form" onsubmit="event.preventDefault()">
        <input type="email" class="mui-input" placeholder="you@example.com" />
        <button type="submit" class="mui-button">Subscribe</button>
      </form>
    </div>
  `;
  return el;
}

export function createContactSplit(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-contact mui-contact--split';
  el.innerHTML = `
    <div class="mui-split">
      <div class="mui-split-text"><h2>Contact us</h2><p>We would love to hear from you.</p></div>
      <form class="mui-stack" onsubmit="event.preventDefault()">
        <input type="text" class="mui-input" placeholder="Name" />
        <input type="email" class="mui-input" placeholder="Email" />
        <textarea class="mui-textarea" placeholder="Message"></textarea>
        <button type="submit" class="mui-button">Send</button>
      </form>
    </div>
  `;
  return el;
}

export function createSearchSection(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-search-section';
  el.innerHTML = `
    <h2>Find what you need</h2>
    <div class="mui-search"><span class="mui-icon">🔎</span><input type="search" placeholder="Search components…" /></div>
  `;
  return el;
}

export function createComparisonTable(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-comparison';
  el.innerHTML = `
    <h2>Compare plans</h2>
    <table class="mui-table">
      <thead><tr><th>Feature</th><th>Starter</th><th>Pro</th></tr></thead>
      <tbody><tr><td>Components</td><td>✓</td><td>✓</td></tr><tr><td>Sections</td><td>—</td><td>✓</td></tr></tbody>
    </table>
  `;
  return el;
}

export function createStepsHorizontal(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-steps mui-steps--horizontal';
  el.innerHTML = `
    <h2>How it works</h2>
    <ol class="mui-stepper">
      <li class="mui-step mui-step--complete"><span>Install</span></li>
      <li class="mui-step mui-step--active"><span>Import</span></li>
      <li class="mui-step"><span>Ship</span></li>
    </ol>
  `;
  return el;
}
