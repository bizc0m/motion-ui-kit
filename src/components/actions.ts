/**
 * Action components: buttons and button groups.
 */

export function createButton(config: { label?: string } = {}): HTMLElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mui-button';
  btn.textContent = config.label ?? 'Button';
  return btn;
}

export function createIconButton(config: { label?: string } = {}): HTMLElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mui-button mui-icon-button';
  btn.setAttribute('aria-label', config.label ?? 'Icon button');
  btn.innerHTML = `<span class="mui-icon">★</span>`;
  return btn;
}

export function createSplitButton(config: { label?: string } = {}): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-split-button';
  wrapper.innerHTML = `
    <button type="button" class="mui-button">${config.label ?? 'Action'}</button>
    <button type="button" class="mui-button mui-caret" aria-label="More options">▼</button>
  `;
  return wrapper;
}

export function createButtonGroup(): HTMLElement {
  const group = document.createElement('div');
  group.className = 'mui-button-group';
  group.innerHTML = `
    <button type="button" class="mui-button">One</button>
    <button type="button" class="mui-button">Two</button>
    <button type="button" class="mui-button">Three</button>
  `;
  return group;
}

export function createFloatingActionButton(config: { label?: string } = {}): HTMLElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'mui-fab';
  btn.setAttribute('aria-label', config.label ?? 'Create');
  btn.innerHTML = `<span class="mui-icon">＋</span>`;
  return btn;
}
