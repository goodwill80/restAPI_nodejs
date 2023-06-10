const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
