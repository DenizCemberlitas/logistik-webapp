//imports
const express = require("express");
const db = require("../database.js");

//router erstellen
const router = express.Router();

//Endpuckt alle Buchungen aufrufen
router.get("/", (req, res) => {
    const getAll = db.prepare("SELECT * FROM buchungen").all();
    res.json(getAll);
});

//Endpunkt eine buchung aufrufen
router.get("/:id", (req, res) => {
    const getId = db.prepare("SELECT * FROM buchungen WHERE id = ?").get(req.params.id);
    res.json(getId);
});

//Endpunkt neue Buchung anlegen
router.post("/", (req, res) => {
    const runPost = db.prepare("INSERT INTO buchungen (produktId,typ,menge,datum,notiz) VALUES (?,?,?,?,?)").run(req.body.produktId, req.body.typ, req.body.menge, req.body.datum, req.body.notiz);
    res.json(runPost);
});

//Endpunkt Buchung aktualisieren
router.put("/:id", (req, res) => {
    const runPut = db.prepare("UPDATE buchungen SET typ = ?, menge = ?, datum = ?, notiz = ? WHERE id = ?").run(req.body.typ, req.body.menge, req.body.datum, req.body.notiz, req.params.id);
    res.json(runPut);
});

//Endpunkt Buchung löschen
router.delete("/:id", (req, res) => {
    const runDelete = db.prepare("DELETE FROM buchungen WHERE id = ?").run(req.params.id);
    res.json(runDelete);
});

module.exports = router;