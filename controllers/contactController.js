// express-async-handler will replace try catch block and automatically passed to the error handler
const asyncHandler = require('express-async-handler');

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContacts = asyncHandler(async (req, res) => {
  res.json({ message: 'Get all contacts' });
});

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
const getContact = asyncHandler(async (req, res) => {
  res.json({ message: `Get contact for ${req.params.id}` });
});

// @desc Create new contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory');
  }
  res.json({ message: 'Create contact' });
});

// @desc Update contact
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  res.json({ message: `Update contact for ${req.params.id}` });
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  res.json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
