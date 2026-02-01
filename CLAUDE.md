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

Voir fichiers existants dans `data/` pour la structure exacte. Champs niveau morceau : title (requis), artist, project, bpm, length (optionnels). Chaque instrument a des patternDefinitions (id, duration, comment) et une timeline (patternId, start, repeat, duration optionnelle, comment).
