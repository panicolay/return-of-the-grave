# CLAUDE.md

## Process

- Pousser sur une branche `claude/` et créer une Pull Request vers main.

## Architecture

- `data/` : un fichier JSON par morceau (ex: `data/rej.json`)
- `songs.json` est généré automatiquement par `build.js` à partir des fichiers dans `data/` — ne pas le modifier manuellement.
- `song.html` : page template qui charge un JSON selon le paramètre `?song=id`
- `index.html` : accueil, génère la liste des morceaux depuis `songs.json`
- `styles/main.css` : styles partagés

## Ajouter un morceau

Créer un fichier JSON dans `data/`. Le build et l'accueil s'occupent du reste.
