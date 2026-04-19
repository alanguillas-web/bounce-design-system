# b°unce — Design System

> **"Propulseur de talents cachés"** — _Propeller of hidden talents_

Bounce est une plateforme française dont la mission est de révéler et lancer les talents cachés. L'identité visuelle est énergique, jeune et confiante : un wordmark arrondi et chunky, textures grain/spray, motifs squiggle dessinés à la main, blocks de couleurs franches, et une voix italic décomplexée.

Ce dépôt est la source de vérité du langage visuel Bounce.

---

## Structure

| Fichier / Dossier | Contenu |
|---|---|
| `index.html` | **Design System Hub** — palette, typo, composants, motion, prototypes |
| `feed.html` | Écran 1 — Accueil / grille d'œuvres |
| `tremplin.html` | Écran 2 — Détail d'un défi / classement |
| `marque.html` | Écran 3 — Profil partenaire / marque |
| `oeuvre.html` | Écran 4 — Détail d'une œuvre + vote |
| `src/` | App React (Vite) — composants écrans réutilisables |
| `src/tokens.css` | Tokens CSS centralisés |

---

## Palette

| Token | Hex | Signification |
|---|---|---|
| `--bounce-purple` | `#5202FC` | Calme, stabilité, confiance — couleur primaire |
| `--bounce-lime` | `#BAD532` | Stabilité + renaissance — l'étincelle, le `°` |
| `--bounce-orange` | `#FF9939` | Énergie, vitalité, créativité — accent / CTA |
| `--bounce-navy` | `#0C1244` | Savoir, autorité, élégance — fond sombre par défaut |
| `--bounce-cream` | `#FFFCE1` | Fond clair / papier |
| `--bounce-black` | `#111111` | Noir pur — utilisé avec parcimonie |

---

## Typographie

- **Display** : CY Grotesk Grand (Kobuzan) — self-hosted, chunky et arrondie
- **Corps** : Montserrat (Google Fonts) — weights 400 500 600 700 800 900, regular + italic

---

## Éléments clés

- **Ombres sticker** : `4px 4px 0 var(--navy)` — offset solide, jamais de blur
- **Rayons généreux** : 24–32px pour les cards, pill (100px) pour les boutons
- **Éasing bounce** : `cubic-bezier(.34, 1.56, .64, 1)` — dans le nom
- **Squiggles** : motif dessiné à la main, fond hero uniquement
- **Sections** : bandes pleines, pas de transitions douces entre couleurs

---

## Développement

```bash
npm install
npm run dev     # Vite dev server
npm run build   # Production build
```

Les écrans HTML standalone (`feed.html`, etc.) n'ont pas besoin de build — ouvrez directement dans un navigateur.

---

## Les interdits

1. Ne pas étirer ni déformer le logo
2. Ne pas modifier les couleurs du logo
3. Ne pas faire pivoter le logo
4. Ne pas recadrer le logo
5. Ne pas ajouter de contour ni d'ombre portée autour du logo
6. Ne pas placer le logo couleur sur une photo — utiliser la variante blanche ou halo

---

_Maintenu dans un projet Claude · Design System v1.0_
