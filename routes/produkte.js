//imports
const express = require("express");
const db = require("../database.js");

//router erstellen
const router = express.Router();

//Endpunkt alle Produkte aufrufen
router.get("/", (req, res) => {
    const getAll = db.prepare("SELECT * FROM produkte").all();
    res.json(getAll);
});

//Endpunkt ein einzelnes Produkt aufrufen
router.get("/:id", (req, res) => {
    const getId = db.prepare("SELECT * FROM produkte WHERE id = ?").get(req.params.id);
    res.json(getId);
});

//Endpunkt neues Produkt anlegen
router.post("/", (req, res) => {
    const runPost = db.prepare("INSERT INTO produkte (name,kategorie,einheit,bestand,mindestbestand,lagerort) VALUES (?,?,?,?,?,?)").run(req.body.name, req.body.kategorie, req.body.einheit, req.body.bestand, req.body.mindestbestand, req.body.lagerort);
    res.json(runPost);
});

//Endpunkt Produkt aktualisieren
router.put("/:id", (req, res) => {
    const runPut = db.prepare("UPDATE produkte SET name = ?, kategorie = ?, einheit = ?, bestand = ?, mindestbestand = ?, lagerort = ? WHERE id = ?").run(req.body.name, req.body.kategorie, req.body.einheit, req.body.bestand, req.body.mindestbestand, req.body.lagerort, req.params.id);
    res.json(runPut);
});

//Endpunkt Produkt löschen
router.delete("/:id", (req, res) => {
    const runDelete = db.prepare("DELETE FROM produkte WHERE id = ?").run(req.params.id);
    res.json(runDelete);
});

module.exports = router;