/**
 * Menu presets for application shells.
 */

export function createTopNav(): HTMLElement {
  const el = document.createElement('header');
  el.className = 'mui-menu mui-top-nav';
  el.innerHTML = `
    <a class="mui-brand" href="#">Motion UI Kit</a>
    <nav class="mui-nav-links">
      <a href="#components">Components</a>
      <a href="#sections">Sections</a>
      <a href="#effects">Effects</a>
    </nav>
    <button type="button" class="mui-button">Sign in</button>
  `;
  return el;
}

export function createSidebar(): HTMLElement {
  const el = document.createElement('aside');
  el.className = 'mui-menu mui-sidebar';
  el.setAttribute('aria-label', 'Sidebar');
  el.innerHTML = `
    <a class="mui-brand" href="#">MUI</a>
    <nav class="mui-sidebar-nav">
      <a href="#components">Components</a>
      <a href="#sections">Sections</a>
      <a href="#effects">Effects</a>
      <a href="#menus">Menus</a>
    </nav>
  `;
  return el;
}

export function createBottomNav(): HTMLElement {
  const el = document.createElement('nav');
  el.className = 'mui-menu mui-bottom-nav';
  el.setAttribute('aria-label', 'Bottom navigation');
  el.innerHTML = `
    <a href="#components"><span>Components</span></a>
    <a href="#sections"><span>Sections</span></a>
    <a href="#effects"><span>Effects</span></a>
  `;
  return el;
}

export function createCommandPalette(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-command-palette-wrapper';
  wrapper.innerHTML = `
    <button type="button" class="mui-button" data-command-open>Open command palette</button>
    <dialog class="mui-command-palette">
      <input type="text" class="mui-input" placeholder="Type a command…" />
      <ul>
        <li><button type="button">Go to Components</button></li>
        <li><button type="button">Go to Sections</button></li>
      </ul>
    </dialog>
  `;
  const openBtn = wrapper.querySelector('[data-command-open]') as HTMLButtonElement;
  const dialog = wrapper.querySelector('dialog') as HTMLDialogElement;
  openBtn.addEventListener('click', () => dialog.showModal());
  dialog.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => dialog.close());
  });
  return wrapper;
}

export function createMegaMenu(): HTMLElement {
  const el = document.createElement('header');
  el.className = 'mui-menu mui-mega-menu';
  el.innerHTML = `
    <a class="mui-brand" href="#">Motion UI Kit</a>
    <nav class="mui-mega-nav">
      <div class="mui-mega-group">
        <strong>UX</strong>
        <a href="#components">Components</a>
        <a href="#sections">Sections</a>
      </div>
      <div class="mui-mega-group">
        <strong>Menu</strong>
        <a href="#menus">Top nav</a>
        <a href="#menus">Sidebar</a>
      </div>
      <div class="mui-mega-group">
        <strong>Effects</strong>
        <a href="#effects">Entrances</a>
        <a href="#effects">Interactions</a>
      </div>
    </nav>
  `;
  return el;
}

export function createContextMenu(): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = 'mui-context-menu-wrapper';
  wrapper.innerHTML = `
    <div class="mui-context-target" tabindex="0" aria-haspopup="true">Right-click or long-press here</div>
    <ul class="mui-context-menu" hidden>
      <li><button type="button">Copy</button></li>
      <li><button type="button">Paste</button></li>
      <li><button type="button">Delete</button></li>
    </ul>
  `;
  const target = wrapper.querySelector('.mui-context-target') as HTMLElement;
  const menu = wrapper.querySelector('.mui-context-menu') as HTMLElement;
  target.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    menu.hidden = false;
  });
  menu.addEventListener('click', () => {
    menu.hidden = true;
  });
  return wrapper;
}

/** All menu preset names. */
export const menuNames = [
  'TopNav',
  'Sidebar',
  'BottomNav',
  'CommandPalette',
  'MegaMenu',
  'ContextMenu',
] as const;

export type MenuName = (typeof menuNames)[number];

/** Factory map for menu presets. */
export const menuBuilders: Record<MenuName, () => HTMLElement> = {
  TopNav: createTopNav,
  Sidebar: createSidebar,
  BottomNav: createBottomNav,
  CommandPalette: createCommandPalette,
  MegaMenu: createMegaMenu,
  ContextMenu: createContextMenu,
};
