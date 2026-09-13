import './style.css';
import { componentBuilders, componentNames, type ComponentName } from './components';
import { sectionBuilders, sectionNames, type SectionName } from './sections';
import { menuBuilders, menuNames, type MenuName } from './menu/presetMenu';
import {
  blurReveal,
  effectNames,
  fadeIn,
  fadeOut,
  morph,
  parallax,
  pulse,
  ripple,
  scaleIn,
  scaleOut,
  scrollReveal,
  shake,
  slideIn,
  slideOut,
  spring,
  stagger,
  type EffectName,
} from './effects';

const app = document.querySelector<HTMLDivElement>('#app')!;

function createHeading(level: 1 | 2 | 3, text: string): HTMLElement {
  const h = document.createElement(`h${level}`);
  h.textContent = text;
  return h;
}

function renderHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'demo-hero';
  section.innerHTML = `
    <h1>Motion UI Kit</h1>
    <p>38 components · 30 sections · 6 menu presets · 15 effects</p>
    <a href="#components" class="mui-button">Explore components</a>
  `;
  return section;
}

function renderStatStrip(): HTMLElement {
  const strip = document.createElement('div');
  strip.className = 'demo-stats';
  [
    ['38', 'Components'],
    ['30', 'Sections'],
    ['6', 'Menu presets'],
    ['15', 'Effects'],
    ['3', 'Pillars'],
  ].forEach(([value, label]) => {
    const item = document.createElement('div');
    item.className = 'demo-stat';
    item.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    strip.appendChild(item);
  });
  return strip;
}

function renderComponents(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'components';
  section.className = 'demo-gallery';
  section.appendChild(createHeading(2, 'Components'));

  const grid = document.createElement('div');
  grid.className = 'demo-grid';

  componentNames.forEach((name: ComponentName) => {
    const card = document.createElement('article');
    card.className = 'demo-card';
    const title = document.createElement('h3');
    title.textContent = name;
    const stage = document.createElement('div');
    stage.className = 'demo-stage';
    try {
      stage.appendChild(componentBuilders[name]());
    } catch (error) {
      stage.textContent = 'Render error';
      console.error(error);
    }
    card.appendChild(title);
    card.appendChild(stage);
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function renderSections(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'sections';
  section.className = 'demo-gallery';
  section.appendChild(createHeading(2, 'Sections'));

  const list = document.createElement('div');
  list.className = 'demo-section-list';

  sectionNames.forEach((name: SectionName) => {
    const card = document.createElement('article');
    card.className = 'demo-section-card';
    const title = document.createElement('h3');
    title.textContent = name;
    const preview = document.createElement('div');
    preview.className = 'demo-section-preview';
    try {
      preview.appendChild(sectionBuilders[name]());
    } catch (error) {
      preview.textContent = 'Render error';
      console.error(error);
    }
    card.appendChild(title);
    card.appendChild(preview);
    list.appendChild(card);
  });

  section.appendChild(list);
  return section;
}

function renderMenus(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'menus';
  section.className = 'demo-gallery';
  section.appendChild(createHeading(2, 'Menu presets'));

  const grid = document.createElement('div');
  grid.className = 'demo-grid';

  menuNames.forEach((name: MenuName) => {
    const card = document.createElement('article');
    card.className = 'demo-card';
    const title = document.createElement('h3');
    title.textContent = name;
    const stage = document.createElement('div');
    stage.className = 'demo-stage';
    try {
      stage.appendChild(menuBuilders[name]());
    } catch (error) {
      stage.textContent = 'Render error';
      console.error(error);
    }
    card.appendChild(title);
    card.appendChild(stage);
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function renderEffects(): HTMLElement {
  const section = document.createElement('section');
  section.id = 'effects';
  section.className = 'demo-gallery';
  section.appendChild(createHeading(2, 'Effects playground'));

  const stage = document.createElement('div');
  stage.className = 'demo-effects-stage';

  const target = document.createElement('div');
  target.className = 'demo-effect-target';
  target.textContent = 'Target';

  const staggerRow = document.createElement('div');
  staggerRow.className = 'demo-stagger-row';
  for (let i = 0; i < 5; i += 1) {
    const box = document.createElement('div');
    box.className = 'demo-stagger-box';
    staggerRow.appendChild(box);
  }

  const controls = document.createElement('div');
  controls.className = 'demo-effect-controls';

  const runners: Record<EffectName, (event: MouseEvent) => void> = {
    fadeIn: () => fadeIn(target),
    fadeOut: () => fadeOut(target),
    slideIn: () => slideIn(target),
    slideOut: () => slideOut(target),
    scaleIn: () => scaleIn(target),
    scaleOut: () => scaleOut(target),
    stagger: () => stagger(Array.from(staggerRow.children) as HTMLElement[], 60),
    spring: () => spring(target),
    parallax: () => parallax(target, 0.1),
    scrollReveal: () => scrollReveal([target]),
    blurReveal: () => blurReveal(target),
    morph: () => morph(target, '50%', { duration: 400 }),
    shake: () => shake(target),
    pulse: () => pulse(target),
    ripple: (event) => ripple(event),
  };

  effectNames.forEach((name: EffectName) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mui-button';
    btn.textContent = name;
    btn.addEventListener('click', (event) => {
      runners[name](event as MouseEvent);
    });
    controls.appendChild(btn);
  });

  stage.appendChild(target);
  stage.appendChild(staggerRow);
  section.appendChild(stage);
  section.appendChild(controls);
  return section;
}

function renderFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'demo-footer';
  footer.innerHTML = `<p>Motion UI Kit — built with Vite + TypeScript</p>`;
  return footer;
}

app.appendChild(renderHero());
app.appendChild(renderStatStrip());
app.appendChild(renderComponents());
app.appendChild(renderSections());
app.appendChild(renderMenus());
app.appendChild(renderEffects());
app.appendChild(renderFooter());
