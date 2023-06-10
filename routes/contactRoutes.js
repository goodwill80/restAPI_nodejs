const express = require('express');
const router = express.Router();

const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');

// Get all
router.get('/', getContacts);

// Get contact by id
router.get('/:id', getContact);

// Create new
router.post('/', createContact);

// Update contact by id
router.put('/:id', updateContact);

// Delete contact by id
router.delete('/:id', deleteContact);

module.exports = router;
