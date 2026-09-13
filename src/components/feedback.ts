/**
 * Feedback components: loading and progress indicators.
 */

export function createProgressBar(config: { value?: number } = {}): HTMLElement {
  const value = config.value ?? 60;
  const el = document.createElement('div');
  el.className = 'mui-progress';
  el.setAttribute('role', 'progressbar');
  el.setAttribute('aria-valuenow', String(value));
  el.setAttribute('aria-valuemin', '0');
  el.setAttribute('aria-valuemax', '100');
  el.innerHTML = `<div class="mui-progress-bar" style="width: ${value}%"></div>`;
  return el;
}

export function createSpinner(config: { label?: string } = {}): HTMLElement {
  const el = document.createElement('div');
  el.className = 'mui-spinner';
  el.setAttribute('role', 'status');
  el.setAttribute('aria-label', config.label ?? 'Loading');
  return el;
}

export function createSkeleton(): HTMLElement {
  const el = document.createElement('div');
  el.className = 'mui-skeleton';
  el.innerHTML = `<div class="mui-skeleton-line"></div><div class="mui-skeleton-line mui-skeleton-line--short"></div>`;
  return el;
}
