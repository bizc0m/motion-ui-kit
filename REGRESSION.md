# Motion UI Kit — REGRESSION

### F1 – Build TypeScript
Description : `npm run build` doit compiler sans erreur et générer `dist/`.
Fichiers concernés : `src/**/*.ts`, `tsconfig.json`, `vite.config.*`
Test : `npm run build`
Validé le : 2026-09-13

### F2 – Rendu de la page démo
Description : `index.html` doit afficher toutes les galeries sans erreur console.
Fichiers concernés : `src/main.ts`, `index.html`, `src/style.css`
Test : `npm run build && npm run preview` + inspection console
Validé le : 2026-09-13

### F3 – Liste complète des 38/30/6/15
Description : README et indexes listent l’intégralité des éléments.
Fichiers concernés : `README.md`, `src/components/index.ts`, `src/sections/index.ts`, `src/menu/presetMenu.ts`, `src/effects/index.ts`
Test : vérification visuelle des listes
Validé le : 2026-09-13
