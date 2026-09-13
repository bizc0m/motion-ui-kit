# Motion UI Kit — MEMORY

**Objectif :** Reconstruire un kit UI modulaire (38 composants, 30 sections, 6 menus, 15 effets) autour de trois piliers UX / Menu / Effects, avec TypeScript strict et Vite.

**Architecture :**
- Vite + TypeScript + vanilla JS
- Factories DOM dans `src/components/`, `src/sections/`, `src/menu/`, `src/effects/`
- Regroupements par pilier dans `src/pillars/`
- `src/main.ts` rend une démo complète dans `index.html`

**Liens :**
- Dossier projet : `/Users/JOB/#DEV/01-projets/_applications/motion-ui-kit/`
- Repo GitHub : `https://github.com/bizc0m/motion-ui-kit`
- Pages GitHub : `https://bizc0m.github.io/motion-ui-kit/`

**Contraintes fortes :**
- Pas de secrets dans Git
- `npm run build` doit passer sans erreur TS
- Responsive et `prefers-reduced-motion`
