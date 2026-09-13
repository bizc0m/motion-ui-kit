/**
 * Motion UI Kit — vanilla JS runtime.
 * Renders the 38 components, 30 sections, 15 effects and 6 menu presets.
 */

const components = [
  { name: 'Button', category: 'Actions', render: () => {
    const b = document.createElement('button'); b.className = 'kit-btn kit-btn-primary'; b.textContent = 'Button'; return b;
  }},
  { name: 'IconButton', category: 'Actions', render: () => {
    const b = document.createElement('button'); b.className = 'kit-btn kit-btn-secondary'; b.innerHTML = '★'; return b;
  }},
  { name: 'SplitButton', category: 'Actions', render: () => {
    const d = document.createElement('div'); d.className = 'kit-split-btn';
    d.innerHTML = '<button class="kit-btn kit-btn-primary">Save</button><button class="kit-btn kit-btn-primary">▼</button>'; return d;
  }},
  { name: 'ButtonGroup', category: 'Actions', render: () => {
    const d = document.createElement('div'); d.className = 'kit-btn-group';
    d.innerHTML = '<button class="kit-btn kit-btn-secondary">A</button><button class="kit-btn kit-btn-secondary">B</button><button class="kit-btn kit-btn-secondary">C</button>'; return d;
  }},
  { name: 'FloatingActionButton', category: 'Actions', render: () => {
    const b = document.createElement('button'); b.className = 'kit-fab'; b.textContent = '+'; return b;
  }},

  { name: 'Input', category: 'Forms', render: () => {
    const i = document.createElement('input'); i.className = 'kit-input'; i.placeholder = 'Type…'; return i;
  }},
  { name: 'Textarea', category: 'Forms', render: () => {
    const t = document.createElement('textarea'); t.className = 'kit-textarea'; t.placeholder = 'Text…'; t.rows = 2; return t;
  }},
  { name: 'Select', category: 'Forms', render: () => {
    const s = document.createElement('select'); s.className = 'kit-select'; s.innerHTML = '<option>One</option><option>Two</option>'; return s;
  }},
  { name: 'Checkbox', category: 'Forms', render: () => {
    const l = document.createElement('label'); l.className = 'kit-checkbox'; l.innerHTML = '<input type="checkbox" checked> <span>Check</span>'; return l;
  }},
  { name: 'Radio', category: 'Forms', render: () => {
    const l = document.createElement('label'); l.className = 'kit-radio'; l.innerHTML = '<input type="radio" name="r" checked> <span>Radio</span>'; return l;
  }},
  { name: 'Toggle', category: 'Forms', render: () => {
    const l = document.createElement('label'); l.className = 'kit-toggle'; l.innerHTML = '<input type="checkbox" checked><span class="kit-toggle-track"></span><span>Toggle</span>'; return l;
  }},
  { name: 'Slider', category: 'Forms', render: () => {
    const i = document.createElement('input'); i.type = 'range'; i.className = 'kit-slider'; return i;
  }},
  { name: 'Range', category: 'Forms', render: () => {
    const d = document.createElement('div'); d.className = 'kit-range'; d.innerHTML = '<input type="range" value="25"><input type="range" value="75">'; return d;
  }},
  { name: 'FileUpload', category: 'Forms', render: () => {
    const l = document.createElement('label'); l.className = 'kit-file-upload'; l.innerHTML = '⇪ Upload'; return l;
  }},
  { name: 'SearchInput', category: 'Forms', render: () => {
    const d = document.createElement('div'); d.className = 'kit-search'; d.innerHTML = '<span>🔎</span><input placeholder="Search…">'; return d;
  }},
  { name: 'PinInput', category: 'Forms', render: () => {
    const d = document.createElement('div'); d.className = 'kit-pin-input'; d.innerHTML = '<input class="kit-pin-digit" maxlength="1"><input class="kit-pin-digit" maxlength="1"><input class="kit-pin-digit" maxlength="1"><input class="kit-pin-digit" maxlength="1">'; return d;
  }},

  { name: 'Card', category: 'Data', render: () => {
    const d = document.createElement('div'); d.className = 'kit-card'; d.style.width = '140px'; d.innerHTML = '<div class="kit-card-media"></div><div class="kit-card-content" style="font-size:12px;">Card</div>'; return d;
  }},
  { name: 'MediaCard', category: 'Data', render: () => {
    const d = document.createElement('div'); d.className = 'kit-card'; d.style.width = '150px'; d.innerHTML = '<div class="kit-card-media"></div><div class="kit-card-content" style="font-size:12px;">Media</div>'; return d;
  }},
  { name: 'ProductCard', category: 'Data', render: () => {
    const d = document.createElement('div'); d.className = 'kit-product-card kit-card'; d.innerHTML = '<div class="kit-card-media"></div><div class="kit-card-content" style="font-size:12px;">$49</div>'; return d;
  }},
  { name: 'TestimonialCard', category: 'Data', render: () => {
    const d = document.createElement('div'); d.className = 'kit-testimonial'; d.style.width = '160px'; d.innerHTML = '“Great kit.”<br><strong>— User</strong>'; return d;
  }},
  { name: 'Avatar', category: 'Data', render: () => {
    const d = document.createElement('div'); d.className = 'kit-avatar'; d.textContent = 'AB'; return d;
  }},
  { name: 'Badge', category: 'Data', render: () => {
    const d = document.createElement('span'); d.className = 'kit-badge'; d.textContent = 'New'; return d;
  }},
  { name: 'Tag', category: 'Data', render: () => {
    const d = document.createElement('span'); d.className = 'kit-tag'; d.textContent = 'Design'; return d;
  }},

  { name: 'Tooltip', category: 'Overlay', render: () => {
    const d = document.createElement('span'); d.className = 'kit-tooltip'; d.dataset.tip = 'Tooltip!'; d.textContent = 'Hover me'; return d;
  }},
  { name: 'Popover', category: 'Overlay', render: () => {
    const d = document.createElement('div'); d.className = 'kit-dropdown';
    d.innerHTML = '<button class="kit-btn kit-btn-secondary kit-dropdown-trigger">Open ▾</button><div class="kit-dropdown-menu"><div class="kit-dropdown-item">Item 1</div><div class="kit-dropdown-item">Item 2</div></div>';
    d.querySelector('.kit-dropdown-trigger').addEventListener('click', () => d.classList.toggle('is-open'));
    return d;
  }},
  { name: 'Modal', category: 'Overlay', render: () => {
    const b = document.createElement('button'); b.className = 'kit-btn kit-btn-secondary'; b.textContent = 'Modal';
    const back = document.createElement('div'); back.className = 'kit-modal-backdrop';
    back.innerHTML = '<div class="kit-modal"><h3>Modal</h3><p>Contenu.</p><button class="kit-btn kit-btn-primary kit-close">Fermer</button></div>';
    document.body.appendChild(back);
    b.addEventListener('click', () => back.classList.add('is-open'));
    back.querySelector('.kit-close').addEventListener('click', () => back.classList.remove('is-open'));
    back.addEventListener('click', (e) => { if (e.target === back) back.classList.remove('is-open'); });
    return b;
  }},
  { name: 'Drawer', category: 'Overlay', render: () => {
    const b = document.createElement('button'); b.className = 'kit-btn kit-btn-secondary'; b.textContent = 'Drawer';
    const drawer = document.createElement('div'); drawer.className = 'kit-drawer';
    drawer.innerHTML = '<h3>Drawer</h3><p>Contenu latéral.</p><button class="kit-btn kit-btn-primary kit-close" style="margin-top:12px;">Fermer</button>';
    document.body.appendChild(drawer);
    b.addEventListener('click', () => drawer.classList.add('is-open'));
    drawer.querySelector('.kit-close').addEventListener('click', () => drawer.classList.remove('is-open'));
    return b;
  }},
  { name: 'Toast', category: 'Overlay', render: () => {
    const d = document.createElement('div'); d.className = 'kit-toast'; d.innerHTML = '✓ Action réussie'; return d;
  }},
  { name: 'Alert', category: 'Overlay', render: () => {
    const d = document.createElement('div'); d.className = 'kit-alert'; d.textContent = 'Alerte !'; return d;
  }},

  { name: 'ProgressBar', category: 'Feedback', render: () => {
    const d = document.createElement('div'); d.className = 'kit-progress'; d.innerHTML = '<div class="kit-progress-bar"></div>'; return d;
  }},
  { name: 'Spinner', category: 'Feedback', render: () => {
    const d = document.createElement('div'); d.className = 'kit-spinner'; return d;
  }},
  { name: 'Skeleton', category: 'Feedback', render: () => {
    const d = document.createElement('div'); d.style.width = '100%'; d.innerHTML = '<div class="kit-skeleton"></div><div class="kit-skeleton" style="width:70%;margin-top:8px;"></div>'; return d;
  }},

  { name: 'Accordion', category: 'Navigation', render: () => {
    const d = document.createElement('div'); d.style.width = '100%';
    d.innerHTML = '<div class="kit-accordion-item"><button class="kit-accordion-trigger">Question <span>+</span></button><div class="kit-accordion-panel">Réponse.</div></div>';
    d.querySelector('.kit-accordion-trigger').addEventListener('click', function() {
      this.parentElement.classList.toggle('is-open');
      this.querySelector('span').textContent = this.parentElement.classList.contains('is-open') ? '−' : '+';
    });
    return d;
  }},
  { name: 'Tabs', category: 'Navigation', render: () => {
    const d = document.createElement('div'); d.style.width = '100%';
    d.innerHTML = '<div class="kit-tabs"><button class="kit-tab is-active">Tab 1</button><button class="kit-tab">Tab 2</button></div>';
    d.querySelectorAll('.kit-tab').forEach(t => t.addEventListener('click', function() {
      d.querySelectorAll('.kit-tab').forEach(x => x.classList.remove('is-active')); this.classList.add('is-active');
    }));
    return d;
  }},
  { name: 'Breadcrumb', category: 'Navigation', render: () => {
    const d = document.createElement('nav'); d.className = 'kit-breadcrumb';
    d.innerHTML = '<span>Home</span><span>Category</span><span>Page</span>'; return d;
  }},
  { name: 'Pagination', category: 'Navigation', render: () => {
    const d = document.createElement('div'); d.className = 'kit-pagination';
    d.innerHTML = '<button>‹</button><button class="is-active">1</button><button>2</button><button>›</button>'; return d;
  }},
  { name: 'Stepper', category: 'Navigation', render: () => {
    const d = document.createElement('div'); d.className = 'kit-stepper';
    d.innerHTML = '<div class="kit-step is-active"><span class="kit-step-dot">1</span>Info</div><div class="kit-step"><span class="kit-step-dot">2</span>Pay</div>'; return d;
  }},
  { name: 'Dropdown', category: 'Navigation', render: () => {
    const d = document.createElement('div'); d.className = 'kit-dropdown';
    d.innerHTML = '<button class="kit-btn kit-btn-secondary kit-dropdown-trigger">Menu ▾</button><div class="kit-dropdown-menu"><div class="kit-dropdown-item">Profile</div><div class="kit-dropdown-item">Logout</div></div>';
    d.querySelector('.kit-dropdown-trigger').addEventListener('click', () => d.classList.toggle('is-open'));
    return d;
  }},
];

const sections = [
  { name: 'HeroCenter', category: 'Heroes' },
  { name: 'HeroSplit', category: 'Heroes' },
  { name: 'HeroFullBleed', category: 'Heroes' },
  { name: 'FeaturesGrid', category: 'Features' },
  { name: 'FeaturesCards', category: 'Features' },
  { name: 'FeaturesSplit', category: 'Features' },
  { name: 'PricingTable', category: 'Pricing' },
  { name: 'PricingToggle', category: 'Pricing' },
  { name: 'TestimonialsSlider', category: 'Social' },
  { name: 'TestimonialsGrid', category: 'Social' },
  { name: 'LogoCloud', category: 'Social' },
  { name: 'StatsStrip', category: 'Social' },
  { name: 'StatsGrid', category: 'Social' },
  { name: 'CTAStandard', category: 'CTA' },
  { name: 'CTABanner', category: 'CTA' },
  { name: 'FAQAccordion', category: 'Content' },
  { name: 'FAQColumns', category: 'Content' },
  { name: 'TeamGrid', category: 'Content' },
  { name: 'TeamCarousel', category: 'Content' },
  { name: 'GalleryGrid', category: 'Content' },
  { name: 'GalleryMasonry', category: 'Content' },
  { name: 'BlogList', category: 'Content' },
  { name: 'BlogFeatured', category: 'Content' },
  { name: 'NavbarSimple', category: 'Layout' },
  { name: 'NavbarSplit', category: 'Layout' },
  { name: 'FooterSimple', category: 'Layout' },
  { name: 'FooterMulti', category: 'Layout' },
  { name: 'NewsletterInline', category: 'Engagement' },
  { name: 'NewsletterCard', category: 'Engagement' },
  { name: 'ComparisonTable', category: 'Engagement' },
];

const effects = [
  { name: 'Float', css: 'kit-float', desc: 'Flottement vertical' },
  { name: 'Pulse', css: 'kit-pulse', desc: 'Pulsation opacity + scale' },
  { name: 'Shake', css: 'kit-shake', desc: 'Secousse latérale' },
  { name: 'Spin', css: 'kit-spin', desc: 'Rotation continue' },
  { name: 'Bounce', css: 'kit-bounce', desc: 'Rebond vertical' },
  { name: 'Fade', css: 'kit-fade', desc: 'Fondu alterné' },
  { name: 'Scale', css: 'kit-scale', desc: 'Zoom alterné' },
  { name: 'Slide', css: 'kit-slide', desc: 'Translation alternée' },
  { name: 'Flip', css: 'kit-flip', desc: 'Rotation Y' },
  { name: 'Morph', css: 'kit-morph', desc: 'Carré → cercle' },
  { name: 'Ripple', css: 'kit-ripple', desc: 'Onde expansible' },
  { name: 'Shimmer', css: 'kit-shimmer', desc: 'Lumière balayante' },
  { name: 'Reveal', css: 'reveal', desc: 'Apparition au scroll' },
  { name: 'Lift', css: 'lift', desc: 'Surélévation hover' },
  { name: 'BlurHeader', css: 'blur', desc: 'Header flouté' },
];

const menus = [
  { name: 'Sticky Topbar', render: (c) => `<nav class="kit-menu-bar">${c}</nav>` },
  { name: 'Sidebar Rail', render: (c) => `<nav class="kit-sidebar-mini">${c}</nav>` },
  { name: 'Breadcrumb', render: (c) => `<nav class="kit-bread-mini">${c}</nav>` },
  { name: 'Pills Center', render: (c) => `<nav class="kit-menu-bar" style="justify-content:center;">${c}</nav>` },
  { name: 'Underline Tabs', render: (c) => `<div class="kit-tabs">${c}</div>` },
  { name: 'Mobile Drawer', render: (c) => `<div class="kit-sidebar-mini">${c}</div>` },
];

function renderComponents() {
  const grid = document.getElementById('component-grid');
  components.forEach(c => {
    const card = document.createElement('article');
    card.className = 'kit-component-card';
    card.dataset.reveal = '';
    card.innerHTML = `<h3>${c.name}</h3><div class="kit-stage"></div>`;
    card.querySelector('.kit-stage').appendChild(c.render());
    grid.appendChild(card);
  });
}

function renderSections() {
  const list = document.getElementById('sections-list');
  sections.forEach(s => {
    const thumb = document.createElement('div');
    thumb.className = 'kit-section-thumb';
    thumb.dataset.reveal = '';
    thumb.innerHTML = `
      <div class="kit-section-thumb-preview">
        <div class="kit-card" style="width:80%;height:60px;opacity:.6;"><div class="kit-card-media"></div></div>
      </div>
      <div class="kit-section-thumb-info">
        <h4>${s.name}</h4>
        <p>${s.category}</p>
      </div>
    `;
    list.appendChild(thumb);
  });
}

function renderEffects() {
  const grid = document.getElementById('effects-grid');
  effects.forEach(e => {
    const box = document.createElement('div');
    box.className = 'kit-effect-box';
    box.dataset.effectPlay = e.css === 'reveal' || e.css === 'lift' || e.css === 'blur' ? '' : e.name.toLowerCase();
    box.dataset.reveal = '';
    box.innerHTML = `<div class="kit-effect-target"></div><strong>${e.name}</strong><span>${e.desc}</span>`;
    box.addEventListener('mouseenter', () => { if (box.dataset.effectPlay) box.classList.add('is-playing'); });
    box.addEventListener('mouseleave', () => { box.classList.remove('is-playing'); box.dataset.effectPlay = e.css === 'reveal' || e.css === 'lift' || e.css === 'blur' ? '' : e.name.toLowerCase(); });
    grid.appendChild(box);
  });
}

function renderMenus() {
  const grid = document.getElementById('menu-grid');
  const links = '<a href="#" class="is-active">Home</a><a href="#">About</a><a href="#">Contact</a>';
  const tabs = '<button class="kit-tab is-active">Tab 1</button><button class="kit-tab">Tab 2</button><button class="kit-tab">Tab 3</button>';
  menus.forEach((m, i) => {
    const card = document.createElement('div');
    card.className = 'kit-menu-card';
    card.dataset.reveal = '';
    card.innerHTML = `<h4>${m.name}</h4>${m.render(i === 4 ? tabs : links)}`;
    grid.appendChild(card);
  });
}

function initMobileMenu() {
  const toggle = document.querySelector('.kit-menu-toggle');
  const nav = document.querySelector('.kit-nav');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

function initHeaderBlur() {
  const header = document.querySelector('.kit-header');
  window.addEventListener('scroll', () => {
    header.style.background = window.scrollY > 20 ? 'rgba(11,11,15,0.92)' : 'rgba(11,11,15,0.75)';
  }, { passive: true });
}

renderComponents();
renderSections();
renderEffects();
renderMenus();
initMobileMenu();
initScrollReveal();
initHeaderBlur();
