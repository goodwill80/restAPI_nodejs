const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 6000;

const contactRoutes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

// Similar to bodyparser middleware
app.use(express.json());
// Error handling middleware
app.use(errorHandler);
// Routes middleware
app.use('/api/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
