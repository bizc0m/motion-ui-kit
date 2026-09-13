/**
 * Layout sections.
 */

export function createFooterStandard(): HTMLElement {
  const el = document.createElement('footer');
  el.className = 'mui-section mui-footer';
  el.innerHTML = `
    <div class="mui-footer-grid">
      <div><strong>Motion UI Kit</strong><p>Motion, components and sections.</p></div>
      <div><strong>Product</strong><ul><li><a href="#">Components</a></li><li><a href="#">Sections</a></li></ul></div>
      <div><strong>Resources</strong><ul><li><a href="#">Docs</a></li><li><a href="#">GitHub</a></li></ul></div>
    </div>
    <p class="mui-footer-copy">© Motion UI Kit</p>
  `;
  return el;
}
