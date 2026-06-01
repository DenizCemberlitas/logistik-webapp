const express = require("express");
const db = require("../database.js");

const router = express.Router();


router.get("/", (req, res) => {
    const getAll = db.prepare("SELECT * FROM produkte").all();
    res.json(getAll);
});

router.get("/:id", (req, res) => {
    const getId = db.prepare("SELECT * FROM produkte WHERE id = ?").get(req.params.id);
    res.json(getId);
});

router.post("/", (req, res) => {
    const runPost = db.prepare("INSERT INTO produkte (name, einheit, bestand) VALUES (?,?,?)").run(req.body);
    res.json(runPost);
});

router.put("/:id", (req, res) => {
    const runPut = db.prepare("UPDATE produkte SET name = ?, einheit = ?, bestand = ? WHERE id = ?").run(req.params.id);
    res.json(runPut);
});

router.delete("/:id", (req, res) => {
    const runDelete = db.prepare("DELETE FROM produkte WHERE id = ?").run(req.params.id);
    res.json(runDelete);
});