/**
 * Navigation components: accordion, tabs, breadcrumbs, pagination, stepper and dropdown.
 */

export function createAccordion(): HTMLElement {
  const el = document.createElement('div');
  el.className = 'mui-accordion';
  el.innerHTML = `
    <details class="mui-accordion-item" open>
      <summary>Accordion item one</summary>
      <p>Details for the first item.</p>
    </details>
    <details class="mui-accordion-item">
      <summary>Accordion item two</summary>
      <p>Details for the second item.</p>
    </details>
  `;
  return el;
}

export function createTabs(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-tabs';
  wrapper.innerHTML = `
    <div class="mui-tab-list" role="tablist">
      <button type="button" class="mui-tab mui-tab--active" data-tab="1" role="tab" aria-selected="true">Tab 1</button>
      <button type="button" class="mui-tab" data-tab="2" role="tab" aria-selected="false">Tab 2</button>
      <button type="button" class="mui-tab" data-tab="3" role="tab" aria-selected="false">Tab 3</button>
    </div>
    <div class="mui-tab-panel" data-panel="1">Panel one content.</div>
    <div class="mui-tab-panel" data-panel="2" hidden>Panel two content.</div>
    <div class="mui-tab-panel" data-panel="3" hidden>Panel three content.</div>
  `;
  const buttons = wrapper.querySelectorAll('[data-tab]');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = (btn as HTMLElement).dataset.tab;
      buttons.forEach((b) => {
        const tab = b as HTMLElement;
        const active = tab.dataset.tab === id;
        tab.classList.toggle('mui-tab--active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      wrapper.querySelectorAll('[data-panel]').forEach((panel) => {
        const p = panel as HTMLElement;
        p.hidden = p.dataset.panel !== id;
      });
    });
  });
  return wrapper;
}

export function createBreadcrumb(): HTMLElement {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Breadcrumb');
  nav.className = 'mui-breadcrumb';
  nav.innerHTML = `
    <ol>
      <li><a href="#">Home</a></li>
      <li><a href="#">Library</a></li>
      <li aria-current="page">Data</li>
    </ol>
  `;
  return nav;
}

export function createPagination(): HTMLElement {
  const nav = document.createElement('nav');
  nav.setAttribute('aria-label', 'Pagination');
  nav.className = 'mui-pagination';
  nav.innerHTML = `
    <button type="button" class="mui-button" aria-label="Previous">‹</button>
    <button type="button" class="mui-button mui-page mui-page--active">1</button>
    <button type="button" class="mui-button mui-page">2</button>
    <button type="button" class="mui-button mui-page">3</button>
    <button type="button" class="mui-button" aria-label="Next">›</button>
  `;
  return nav;
}

export function createStepper(): HTMLElement {
  const el = document.createElement('ol');
  el.className = 'mui-stepper';
  el.innerHTML = `
    <li class="mui-step mui-step--complete"><span>Cart</span></li>
    <li class="mui-step mui-step--active"><span>Shipping</span></li>
    <li class="mui-step"><span>Payment</span></li>
  `;
  return el;
}

export function createDropdown(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-dropdown';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-dropdown-trigger>Options ▾</button>
    <ul class="mui-dropdown-menu" hidden>
      <li><a href="#">Edit</a></li>
      <li><a href="#">Duplicate</a></li>
      <li><a href="#">Delete</a></li>
    </ul>
  `;
  const trigger = wrapper.querySelector('[data-dropdown-trigger]') as HTMLButtonElement;
  const menu = wrapper.querySelector('.mui-dropdown-menu') as HTMLElement;
  trigger.addEventListener('click', () => {
    menu.hidden = !menu.hidden;
  });
  return wrapper;
}
