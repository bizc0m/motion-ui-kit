/**
 * Content sections: FAQ, team, gallery, blog.
 */

export function createFAQAccordion(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-faq mui-faq--accordion';
  el.innerHTML = `
    <h2>FAQ</h2>
    <details class="mui-accordion-item"><summary>Is it TypeScript-first?</summary><p>Yes, every module is typed.</p></details>
    <details class="mui-accordion-item"><summary>Can I use it with Vite?</summary><p>Designed for Vite vanilla-ts.</p></details>
  `;
  return el;
}

export function createFAQColumns(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-faq mui-faq--columns';
  el.innerHTML = `
    <h2>Common questions</h2>
    <div class="mui-grid-2">
      <article class="mui-card"><h4>Installation</h4><p>Drop into any Vite TS project.</p></article>
      <article class="mui-card"><h4>Customization</h4><p>CSS custom properties make theming easy.</p></article>
    </div>
  `;
  return el;
}

export function createTeamGrid(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-team mui-team--grid';
  el.innerHTML = `
    <h2>Meet the team</h2>
    <div class="mui-grid-3">
      <div class="mui-card"><div class="mui-avatar">AM</div><h4>Alex M.</h4><p>Engineer</p></div>
      <div class="mui-card"><div class="mui-avatar">BS</div><h4>Bailey S.</h4><p>Designer</p></div>
      <div class="mui-card"><div class="mui-avatar">CL</div><h4>Casey L.</h4><p>PM</p></div>
    </div>
  `;
  return el;
}

export function createTeamCarousel(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-team mui-team--carousel';
  el.innerHTML = `
    <h2>Team carousel</h2>
    <div class="mui-row">
      <div class="mui-card"><div class="mui-avatar">J1</div><h4>Jordan</h4></div>
      <div class="mui-card"><div class="mui-avatar">R2</div><h4>Riley</h4></div>
    </div>
  `;
  return el;
}

export function createGalleryGrid(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-gallery mui-gallery--grid';
  el.innerHTML = `
    <h2>Gallery</h2>
    <div class="mui-gallery-grid">
      <div class="mui-gallery-item" aria-hidden="true"></div>
      <div class="mui-gallery-item" aria-hidden="true"></div>
      <div class="mui-gallery-item" aria-hidden="true"></div>
      <div class="mui-gallery-item" aria-hidden="true"></div>
    </div>
  `;
  return el;
}

export function createGalleryMasonry(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-gallery mui-gallery--masonry';
  el.innerHTML = `
    <h2>Masonry gallery</h2>
    <div class="mui-masonry">
      <div class="mui-gallery-item mui-gallery-item--tall" aria-hidden="true"></div>
      <div class="mui-gallery-item" aria-hidden="true"></div>
      <div class="mui-gallery-item" aria-hidden="true"></div>
    </div>
  `;
  return el;
}

export function createBlogList(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-blog mui-blog--list';
  el.innerHTML = `
    <h2>Latest posts</h2>
    <ul class="mui-list">
      <li class="mui-card"><h4>Designing motion</h4><p>Tips for meaningful animation.</p></li>
      <li class="mui-card"><h4>Accessible transitions</h4><p>Respecting reduced motion.</p></li>
    </ul>
  `;
  return el;
}

export function createBlogFeatured(): HTMLElement {
  const el = document.createElement('section');
  el.className = 'mui-section mui-blog mui-blog--featured';
  el.innerHTML = `
    <h2>Featured post</h2>
    <article class="mui-card mui-card--horizontal">
      <div class="mui-media-thumb" aria-hidden="true"></div>
      <div class="mui-card-content"><h4>The state of UI motion</h4><p>A deep dive.</p></div>
    </article>
  `;
  return el;
}
