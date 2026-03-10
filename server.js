require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// DEBUG-LOGS
console.log("--- DEBUG START ---");
console.log("Aktuelles Verzeichnis:", process.cwd());
console.log("Gelesene URI aus .env:", process.env.MONGO_URI);
console.log("--- DEBUG ENDE ---");

const app = express();
app.use(express.json());


const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);


const dbUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rezeptplaner';

mongoose.connect(dbUri)
  .then(() => console.log('MongoDB verbunden'))
  .catch((err) => console.error('Verbindung fehlgeschlagen:', err));

app.get('/', (req, res) => {
  res.send('API läuft');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server auf Port ${PORT}`);
});