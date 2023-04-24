const express = require('express');
const routes = require('./routes');
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
  });
});