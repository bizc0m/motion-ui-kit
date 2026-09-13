/**
 * Form components: inputs, controls and selection.
 */

export function createInput(config: { placeholder?: string } = {}): HTMLElement {
  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'mui-input';
  input.placeholder = config.placeholder ?? 'Type here…';
  return input;
}

export function createTextarea(config: { placeholder?: string } = {}): HTMLElement {
  const el = document.createElement('textarea');
  el.className = 'mui-textarea';
  el.placeholder = config.placeholder ?? 'Enter text…';
  el.rows = 3;
  return el;
}

export function createSelect(config: { label?: string } = {}): HTMLElement {
  const select = document.createElement('select');
  select.className = 'mui-select';
  select.innerHTML = `
    <option value="">${config.label ?? 'Choose an option'}</option>
    <option value="a">Option A</option>
    <option value="b">Option B</option>
  `;
  return select;
}

export function createCheckbox(config: { label?: string } = {}): HTMLElement {
  const label = document.createElement('label');
  label.className = 'mui-checkbox';
  label.innerHTML = `
    <input type="checkbox" checked />
    <span>${config.label ?? 'Checkbox'}</span>
  `;
  return label;
}

export function createRadio(config: { label?: string } = {}): HTMLElement {
  const label = document.createElement('label');
  label.className = 'mui-radio';
  label.innerHTML = `
    <input type="radio" name="demo-radio" />
    <span>${config.label ?? 'Radio'}</span>
  `;
  return label;
}

export function createToggle(config: { label?: string } = {}): HTMLElement {
  const label = document.createElement('label');
  label.className = 'mui-toggle';
  label.innerHTML = `
    <input type="checkbox" checked />
    <span class="mui-toggle-track" aria-hidden="true"></span>
    <span class="mui-toggle-label">${config.label ?? 'Toggle'}</span>
  `;
  return label;
}

export function createSlider(): HTMLElement {
  const input = document.createElement('input');
  input.type = 'range';
  input.className = 'mui-slider';
  input.min = '0';
  input.max = '100';
  input.value = '50';
  return input;
}

export function createRange(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-range';
  wrapper.innerHTML = `
    <input type="range" min="0" max="100" value="25" />
    <input type="range" min="0" max="100" value="75" />
  `;
  return wrapper;
}

export function createFileUpload(config: { label?: string } = {}): HTMLElement {
  const label = document.createElement('label');
  label.className = 'mui-file-upload';
  label.innerHTML = `
    <input type="file" hidden />
    <span>${config.label ?? 'Upload file'}</span>
  `;
  return label;
}

export function createSearchInput(config: { placeholder?: string } = {}): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-search';
  wrapper.innerHTML = `
    <span class="mui-icon">🔎</span>
    <input type="search" placeholder="${config.placeholder ?? 'Search…'}" />
  `;
  return wrapper;
}

export function createPinInput(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-pin-input';
  for (let i = 0; i < 4; i += 1) {
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.className = 'mui-pin-digit';
    wrapper.appendChild(input);
  }
  return wrapper;
}
