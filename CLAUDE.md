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

Deux formats sont supportés :

### Format simple (ancien format, toujours supporté)

Utilisez ce format pour des morceaux simples où les patterns ne sont pas réutilisés :

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
- `comment` : commentaire optionnel (affiché dans le popover au survol/tap du pattern)

### Format avancé (bibliothèque + timeline)

Utilisez ce format pour des morceaux où des patterns sont réutilisés (typique en techno, rock, etc.) :

```json
{
    "title": "Nom du morceau",
    "instruments": [
        {
            "name": "Kick",
            "patternDefinitions": [
                { "id": "A", "duration": 4, "comment": "Kick basique 4/4" },
                { "id": "B", "duration": 1, "comment": "Fill" }
            ],
            "timeline": [
                { "patternId": "A", "start": 0, "repeat": 4, "comment": "Intro" },
                { "patternId": "B", "start": 16, "repeat": 1, "comment": "Transition" },
                { "patternId": "A", "start": 17, "repeat": 8, "comment": "Drop" }
            ]
        }
    ]
}
```

**patternDefinitions** : bibliothèque de patterns réutilisables
- `id` : identifiant unique du pattern
- `duration` : durée du pattern (en mesures, décimales ok : `1.5`)
- `comment` : commentaire optionnel décrivant le pattern musicalement

**timeline** : placement des patterns dans le temps
- `patternId` : référence à un pattern dans patternDefinitions
- `start` : position de début (en mesures)
- `repeat` : nombre de répétitions consécutives
- `duration` : durée optionnelle pour écourter le pattern (si omise, utilise celle du pattern)
- `comment` : commentaire optionnel décrivant le contexte/section

**Popover** : au survol/tap d'un pattern, affiche :
- Pattern ID (nouveau format uniquement)
- Start, Duration, Repeat
- Pattern: [comment du pattern] (si présent)
- Context: [comment de la timeline] (si présent)
