const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 6000;

const contactRoutes = require('./routes/contactRoutes');

app.use(contactRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
