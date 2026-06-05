# 📦 Logistik-WebApp

Eine Lagerverwaltungs-Web-App gebaut mit Node.js, Express und SQLite.

## 🚀 Features

- Produkte anlegen mit Name, Kategorie, Einheit, Bestand, Mindestbestand und Lagerort
- Alle Produkte in einer Tabelle anzeigen
- Produkte löschen
- Automatische Mindestbestand-Warnung (rote Markierung)

## 🛠️ Tech Stack

| Bereich | Technologie |
|--------|------------|
| Backend | Node.js, Express.js |
| Datenbank | SQLite (better-sqlite3) |
| Frontend | Vanilla JS, HTML5, CSS3 |

## 📁 Projektstruktur

```
logistik-webapp/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── routes/
│   ├── produkte.js
│   └── buchungen.js
├── database.js
├── server.js
├── package.json
└── .gitignore
```

## ⚙️ Installation & Start

```bash
# Repository klonen
git clone https://github.com/dein-username/logistik-webapp.git

# In den Ordner wechseln
cd logistik-webapp

# Abhängigkeiten installieren
npm install

# Server starten
node server.js
```

App läuft dann unter: `http://localhost:3000`

## 🔌 API Endpunkte

### Produkte

| Methode | Endpunkt | Beschreibung |
|--------|----------|-------------|
| GET | `/api/produkte` | Alle Produkte abrufen |
| GET | `/api/produkte/:id` | Ein Produkt abrufen |
| POST | `/api/produkte` | Neues Produkt anlegen |
| PUT | `/api/produkte/:id` | Produkt aktualisieren |
| DELETE | `/api/produkte/:id` | Produkt löschen |

### Buchungen

| Methode | Endpunkt | Beschreibung |
|--------|----------|-------------|
| GET | `/api/buchungen` | Alle Buchungen abrufen |
| GET | `/api/buchungen/:id` | Eine Buchung abrufen |
| POST | `/api/buchungen` | Neue Buchung anlegen |
| PUT | `/api/buchungen/:id` | Buchung aktualisieren |
| DELETE | `/api/buchungen/:id` | Buchung löschen |

## 🗄️ Datenbankstruktur

### Tabelle: `produkte`

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| name | TEXT | Produktname |
| kategorie | TEXT | Kategorie |
| einheit | TEXT | z.B. Stück, m², Palette |
| bestand | INTEGER | Aktueller Bestand |
| mindestbestand | INTEGER | Mindestbestand vor Warnung |
| lagerort | TEXT | z.B. Halle A |

### Tabelle: `buchungen`

| Spalte | Typ | Beschreibung |
|--------|-----|-------------|
| id | INTEGER | Primary Key, Auto Increment |
| produktId | INTEGER | Foreign Key → produkte(id) |
| typ | TEXT | eingang oder ausgang |
| menge | INTEGER | Menge der Buchung |
| datum | TEXT | Datum (ISO-Format) |
| notiz | TEXT | Optionale Notiz |

## 🔮 Geplante Erweiterungen

- [ ] Buchungshistorie über UI
- [ ] Bestandsänderung direkt buchen
- [ ] Suchfunktion
- [ ] CSV-Export
- [ ] Dashboard mit Statistiken
- [ ] Authentifizierung

## 👤 Autor

Deniz – [Portfolio](https://dein-portfolio.github.io)
