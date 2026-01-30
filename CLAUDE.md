# CLAUDE.md

## Process

- Pousser sur une branche `claude/` et créer une Pull Request vers main.
- **Important** : La commande `gh` (GitHub CLI) n'est pas disponible. Créer les PR manuellement via l'interface GitHub.

## Architecture

- `data/` : un fichier JSON par morceau (ex: `data/rej.json`)
- `songs.json` est généré automatiquement par `build.js` à partir des fichiers dans `data/` — ne pas le modifier manuellement.
- `song.html` : page template qui charge un JSON selon le paramètre `?song=id`
- `index.html` : accueil, génère la liste des morceaux depuis `songs.json`
- `styles/main.css` : styles partagés

## Ajouter un morceau

Créer un fichier JSON dans `data/`. Le build et l'accueil s'occupent du reste.

## Structure d'un JSON de morceau

```json
{
    "title": "Nom du morceau",
    "instruments": [
        {
            "name": "Kick",
            "patterns": [
                { "start": 0, "duration": 4, "repeat": 2, "comment": "Intro" }
            ]
        }
    ]
}
```

- `start` : position de début (en mesures)
- `duration` : durée du pattern (en mesures, décimales ok : `1.5`)
- `repeat` : nombre de répétitions
- `comment` : commentaire optionnel (affiché dans le popover au survol/tap du pattern). Pas besoin de l'inclure s'il n'y a pas de commentaire.
