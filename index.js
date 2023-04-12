// const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');


// const PORT = 3001;
// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`Running on port ${PORT}!`);
//   });
// });

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/socialNetwork', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});