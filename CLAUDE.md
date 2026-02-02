# CLAUDE.md

**Garder ce fichier le plus léger et efficace possible. Éviter la redondance, préférer renvoyer aux fichiers existants.**

## Process

- Branche `claude/`, PR vers main.
- `gh` non disponible, créer les PR manuellement.
- Mettre à jour CLAUDE.md si changements structurels.

## Architecture

- `data/` : un JSON par morceau → `build.js` → `songs.json` (auto-généré, ne pas modifier)
- `song.html` : template (`?song=id`), `index.html` : accueil, `styles/main.css` : styles

## Format des morceaux

Voir `data/CLAUDE.md` pour le schéma JSON complet.
