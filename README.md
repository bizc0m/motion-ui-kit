# Motion UI Kit — Premium Component Generator

A zero-dependency, single-page visual generator for premium components, sections and motion effects. Built with vanilla HTML, CSS and JavaScript so it runs anywhere — including GitHub Pages.

- **14 premium components** (button variants, input, card, badge, toggle, tabs, dropdown, modal, toast, tooltip, avatar, skeleton)
- **10 premium sections** (hero, features grid, pricing, testimonials, CTA, FAQ, stats, newsletter, footer, logo cloud)
- **10 motion effects** (fade, slide, scale, blur reveal, stagger, float, pulse, glow, border shimmer, 3D tilt)
- **Design system** with light/dark/system mode, 7 curated accent presets + custom picker
- **Code export** per item, combined full-page `.html` download, and `manifest.json` consumption contract

## Live demo

https://bizc0m.github.io/motion-ui-kit/

## Files

```
.
├── index.html       # three-column generator UI
├── styles.css       # premium design system + component styles
├── main.js          # generator logic, code/manifest/export generation
├── manifest.json    # example machine-readable manifest
└── README.md
```

## Run locally

No build step is required.

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Manifest consumption

An external app can fetch the published manifest:

```js
fetch('https://bizc0m.github.io/motion-ui-kit/manifest.json')
  .then(r => r.json())
  .then(manifest => {
    const shared = document.createElement('style');
    shared.textContent = manifest.sharedCSS;
    document.head.appendChild(shared);
    manifest.items.forEach(item => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = item.html;
      document.body.appendChild(wrapper);
      if (item.css) {
        const style = document.createElement('style');
        style.textContent = item.css;
        document.head.appendChild(style);
      }
      if (item.js) {
        const script = document.createElement('script');
        script.textContent = item.js;
        document.body.appendChild(script);
      }
    });
  });
```

## License

Use freely in personal and commercial projects.
