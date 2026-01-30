const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const files = fs.readdirSync(dataDir).filter(f => f.endsWith(".json") && f !== "songs.json");

const songs = files.map(f => {
    const content = JSON.parse(fs.readFileSync(path.join(dataDir, f), "utf-8"));
    return {
        id: f.replace(".json", ""),
        title: content.title
    };
});

fs.writeFileSync(path.join(dataDir, "songs.json"), JSON.stringify(songs, null, 4) + "\n");
console.log(`Generated songs.json with ${songs.length} songs`);
