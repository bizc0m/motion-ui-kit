/**
 * Overlay components: tooltips, popovers, modals, drawers, toasts and alerts.
 */

export function createTooltip(config: { text?: string } = {}): HTMLElement {
  const wrapper = document.createElement('span');
  wrapper.className = 'mui-tooltip-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button">Hover me</button>
    <span class="mui-tooltip" role="tooltip">${config.text ?? 'I am a tooltip'}</span>
  `;
  return wrapper;
}

export function createPopover(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-popover-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-popover-trigger>Open popover</button>
    <div class="mui-popover" hidden>
      <p>Popover body with helpful info.</p>
    </div>
  `;
  const trigger = wrapper.querySelector('[data-popover-trigger]') as HTMLButtonElement;
  const popover = wrapper.querySelector('.mui-popover') as HTMLElement;
  trigger.addEventListener('click', () => {
    popover.hidden = !popover.hidden;
  });
  return wrapper;
}

export function createModal(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-modal-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-modal-open>Open modal</button>
    <dialog class="mui-modal">
      <form method="dialog">
        <h3>Modal title</h3>
        <p>Modal content goes here.</p>
        <button class="mui-button" value="close">Close</button>
      </form>
    </dialog>
  `;
  const openBtn = wrapper.querySelector('[data-modal-open]') as HTMLButtonElement;
  const dialog = wrapper.querySelector('dialog') as HTMLDialogElement;
  openBtn.addEventListener('click', () => dialog.showModal());
  return wrapper;
}

export function createDrawer(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-drawer-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-drawer-open>Open drawer</button>
    <aside class="mui-drawer" hidden>
      <div class="mui-drawer-header">
        <strong>Drawer</strong>
        <button type="button" class="mui-icon-button" data-drawer-close aria-label="Close">✕</button>
      </div>
      <nav class="mui-drawer-nav">
        <a href="#">Item one</a>
        <a href="#">Item two</a>
        <a href="#">Item three</a>
      </nav>
    </aside>
  `;
  const openBtn = wrapper.querySelector('[data-drawer-open]') as HTMLButtonElement;
  const drawer = wrapper.querySelector('.mui-drawer') as HTMLElement;
  const closeBtn = wrapper.querySelector('[data-drawer-close]') as HTMLButtonElement;
  openBtn.addEventListener('click', () => {
    drawer.hidden = false;
    drawer.classList.add('mui-drawer--open');
  });
  closeBtn.addEventListener('click', () => {
    drawer.hidden = true;
    drawer.classList.remove('mui-drawer--open');
  });
  return wrapper;
}

export function createToast(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-toast-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-toast>Show toast</button>
  `;
  const btn = wrapper.querySelector('[data-toast]') as HTMLButtonElement;
  btn.addEventListener('click', () => {
    const toast = document.createElement('div');
    toast.className = 'mui-toast';
    toast.textContent = 'Changes saved successfully';
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2500);
  });
  return wrapper;
}

export function createAlert(config: { text?: string } = {}): HTMLElement {
  const el = document.createElement('div');
  el.className = 'mui-alert';
  el.setAttribute('role', 'alert');
  el.textContent = config.text ?? 'This is an alert message.';
  return el;
}
