

const Database = require ("better-sqlite3");
const db = new Database("lager.db", {verbose: console.log})

db.exec(`CREATE TABLE IF NOT EXISTS produkte(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    kategorie TEXT,
    einheit TEXT,
    bestand INTEGER,
    mindestbestand INTEGER,
    lagerort TEXT)`);

db.exec(`CREATE TABLE IF NOT EXISTS buchungen(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produktId INTEGER,
    typ TEXT,
    menge INTEGER,
    datum TEXT,
    notiz TEXT,
    FOREIGN KEY (produktId) REFERENCES produkte(id))`);

    module.exports = db;