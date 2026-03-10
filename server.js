require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());


const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);


const dbUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rezeptplaner';

mongoose.connect(dbUri)
  .then(() => console.log('MongoDB verbunden'))
  .catch((err) => console.error('Verbindung fehlgeschlagen:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server auf Port ${PORT}`);
});