# Format des morceaux (data/*.json)

Ne pas modifier `songs.json` (auto-généré par `build.js`).

## Structure JSON

```json
{
  "title": "Nom du morceau",       // requis
  "artist": "Artiste",              // optionnel
  "project": "Nom du projet",       // optionnel
  "bpm": 120,                       // optionnel
  "length": "2:24",                 // optionnel, format "m:ss"
  "instruments": [
    {
      "name": "KCK",                // nom court (3 lettres typiquement)
      "patternDefinitions": [
        { "id": "A", "duration": 1, "comment": "optionnel" }
      ],
      "timeline": [
        { "patternId": "A", "start": 0, "repeat": 16, "duration": null, "comment": "optionnel" }
      ]
    }
  ]
}
```

## Règles

- `patternId` doit référencer un `id` existant dans `patternDefinitions` du même instrument
- `duration` dans timeline est optionnel (override la durée du pattern)
- `start` et `repeat` sont en nombre de mesures
- Un instrument peut avoir plusieurs entrées timeline pour le même pattern (reprises)
