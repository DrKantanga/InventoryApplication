// server.js
const express = require('express');
const pool = require('./config/db'); // Import the pool object from db.js
const inventoryController = require('./controllers/inventoryController');

const app = express();
const PORT = process.env.PORT || 7000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mounting my inventoryController routes
app.use('/api', inventoryController);

// Defining a route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Inventory App!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
