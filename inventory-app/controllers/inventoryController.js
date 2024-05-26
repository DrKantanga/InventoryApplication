// inventoryController.js
const express = require('express');
const router = express.Router();
const pool = require('../config/db'); 
// Define route handlers
router.get('/items', (req, res) => {
    // Logic to retrieve all items from the inventory
    res.send('Get all items route');
});

router.post('/items', (req, res) => {
    // Extract item data from request body
    const { name, description, quantity, price } = req.body;
    if (!name || !description || !quantity || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      
      // Validate data types
      if (typeof name !== 'string' ||
          typeof description !== 'string' ||
          typeof quantity !== 'number' ||
          typeof price !== 'number') {
        return res.status(400).json({ error: 'Invalid data types' });
      }

    // Construct the SQL query
    const query = {
        text: 'INSERT INTO items(name, description, quantity, price) VALUES($1, $2, $3, $4)',
        values: [name, description, quantity, price]
    };

    // Execute the query
    pool.query(query, (err, result) => {
        if (err) {
            console.error('Error inserting item:', err);
            res.status(500).send('Error inserting item');
        } else {
            console.log('Item inserted successfully');
            res.status(201).send('Item inserted successfully');
        }
    });
});

router.put('/items/:id', (req, res) => {
    // Logic to update an existing item in the inventory
    res.send('Update item route');
});

router.delete('/items/:id', (req, res) => {
    // Logic to delete an item from the inventory
    res.send('Delete item route');
});

// Export the router
module.exports = router;
