/**
 * Data display components: cards, avatars, badges and tags.
 */

export function createCard(config: { title?: string; body?: string } = {}): HTMLElement {
  const card = document.createElement('article');
  card.className = 'mui-card';
  card.innerHTML = `
    <h4 class="mui-card-title">${config.title ?? 'Card title'}</h4>
    <p class="mui-card-body">${config.body ?? 'Short card description.'}</p>
  `;
  return card;
}

export function createMediaCard(config: { title?: string } = {}): HTMLElement {
  const card = document.createElement('article');
  card.className = 'mui-card mui-media-card';
  card.innerHTML = `
    <div class="mui-media-thumb" aria-hidden="true"></div>
    <div class="mui-card-content">
      <h4>${config.title ?? 'Media card'}</h4>
      <p>With a thumbnail area.</p>
    </div>
  `;
  return card;
}

export function createProductCard(config: { title?: string; price?: string } = {}): HTMLElement {
  const card = document.createElement('article');
  card.className = 'mui-card mui-product-card';
  card.innerHTML = `
    <div class="mui-media-thumb" aria-hidden="true"></div>
    <div class="mui-card-content">
      <h4>${config.title ?? 'Product'}</h4>
      <p class="mui-price">${config.price ?? '$29'}</p>
      <button type="button" class="mui-button">Add to cart</button>
    </div>
  `;
  return card;
}

export function createTestimonialCard(config: { quote?: string; author?: string } = {}): HTMLElement {
  const card = document.createElement('blockquote');
  card.className = 'mui-card mui-testimonial';
  card.innerHTML = `
    <p>“${config.quote ?? 'This kit saved me hours.'}”</p>
    <footer>— ${config.author ?? 'A. Designer'}</footer>
  `;
  return card;
}

export function createAvatar(config: { initials?: string } = {}): HTMLElement {
  const el = document.createElement('div');
  el.className = 'mui-avatar';
  el.textContent = config.initials ?? 'AB';
  return el;
}

export function createBadge(config: { label?: string } = {}): HTMLElement {
  const el = document.createElement('span');
  el.className = 'mui-badge';
  el.textContent = config.label ?? 'New';
  return el;
}

export function createTag(config: { label?: string } = {}): HTMLElement {
  const el = document.createElement('span');
  el.className = 'mui-tag';
  el.textContent = config.label ?? 'tag';
  return el;
}
