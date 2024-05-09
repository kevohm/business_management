// index.js
const express = require('express');
const analyticsRoutes = require('./routes/analytics');

const app = express();


app.use(express.json());

// Routes
app.use('/analytics', analyticsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
