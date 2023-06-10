const express = require('express');
const router = express.Router();

// Get all
router.get('/', (req, res) => {
  res.json({ message: 'Get all contacts' });
});

// Get contact by id
router.get('/:id', (req, res) => {
  res.json({ message: `Get contact for ${req.params.id}` });
});

// Create new
router.post('/', (req, res) => {
  res.json({ message: 'Create contact' });
});

// Update contact by id
router.put('/:id', (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
});

// Delete contact by id
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = router;
