const express = require("express");
const cors = require("cors");
const app = express();

const produkteRoutes = require("./routes/produkte.js");
const buchungenRoutes = require("./routes/buchungen.js");

app.use(cors());
app.use(express.json());


app.use("/api/produkte", produkteRoutes);

app.use("/api/buchungen", buchungenRoutes);

app.listen(3000, () => console.log("Server läuft auf Port 3000"));

app.use(express.static("public"));