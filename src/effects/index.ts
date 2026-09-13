/**
 * Motion UI Kit — animation and transition utilities.
 *
 * Pure-JS helpers that use CSS custom properties and WAAPI-friendly defaults.
 */

export interface AnimationOptions {
  duration?: number;
  easing?: string;
  delay?: number;
}

function getOptions(options: AnimationOptions = {}): KeyframeAnimationOptions {
  return {
    duration: options.duration ?? 300,
    easing: options.easing ?? 'ease-out',
    delay: options.delay ?? 0,
    fill: 'both',
  };
}

export function fadeIn(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate([{ opacity: 0 }, { opacity: 1 }], getOptions(options));
}

export function fadeOut(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate([{ opacity: 1 }, { opacity: 0 }], getOptions(options));
}

export function slideIn(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ opacity: 0, transform: 'translateY(24px)' }, { opacity: 1, transform: 'translateY(0)' }],
    getOptions(options)
  );
}

export function slideOut(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(24px)' }],
    getOptions(options)
  );
}

export function scaleIn(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ opacity: 0, transform: 'scale(0.92)' }, { opacity: 1, transform: 'scale(1)' }],
    getOptions(options)
  );
}

export function scaleOut(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ opacity: 1, transform: 'scale(1)' }, { opacity: 0, transform: 'scale(0.92)' }],
    getOptions(options)
  );
}

export function stagger(elements: HTMLElement[], baseDelay = 50, options?: AnimationOptions): Animation[] {
  return elements.map((el, index) =>
    slideIn(el, { ...options, delay: (options?.delay ?? 0) + index * baseDelay })
  );
}

export function spring(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ transform: 'scale(0.8)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
    { ...getOptions(options), easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
  );
}

export function parallax(element: HTMLElement, speed = 0.1): () => void {
  const onScroll = () => {
    const y = window.scrollY;
    element.style.transform = `translateY(${y * speed}px)`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

export function scrollReveal(elements: HTMLElement[], options?: AnimationOptions): () => void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slideIn(entry.target as HTMLElement, options);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}

export function blurReveal(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0px)' }],
    getOptions(options)
  );
}

export function morph(element: HTMLElement, toBorderRadius: string, options?: AnimationOptions): Animation {
  return element.animate(
    [{ borderRadius: getComputedStyle(element).borderRadius }, { borderRadius: toBorderRadius }],
    getOptions(options)
  );
}

export function shake(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(-4px)' },
      { transform: 'translateX(4px)' },
      { transform: 'translateX(0)' },
    ],
    { ...getOptions(options), duration: options?.duration ?? 400 }
  );
}

export function pulse(element: HTMLElement, options?: AnimationOptions): Animation {
  return element.animate(
    [{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: 'scale(1)' }],
    { ...getOptions(options), duration: options?.duration ?? 600, iterations: 2 }
  );
}

export function ripple(event: MouseEvent, options?: AnimationOptions): Animation | null {
  const target = event.currentTarget as HTMLElement | null;
  if (!target) return null;
  const circle = document.createElement('span');
  circle.className = 'mui-ripple';
  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.left = `${event.clientX - rect.left - size / 2}px`;
  circle.style.top = `${event.clientY - rect.top - size / 2}px`;
  target.appendChild(circle);
  const animation = circle.animate(
    [{ transform: 'scale(0)', opacity: 0.5 }, { transform: 'scale(4)', opacity: 0 }],
    { ...getOptions(options), duration: options?.duration ?? 500 }
  );
  animation.addEventListener('finish', () => circle.remove());
  return animation;
}

/** All effect names. */
export const effectNames = [
  'fadeIn',
  'fadeOut',
  'slideIn',
  'slideOut',
  'scaleIn',
  'scaleOut',
  'stagger',
  'spring',
  'parallax',
  'scrollReveal',
  'blurReveal',
  'morph',
  'shake',
  'pulse',
  'ripple',
] as const;

export type EffectName = (typeof effectNames)[number];
