const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');        
const collegeRoutes = require('./routes/colleges');
const comparatorRoutes = require('./routes/comparator');

const app = express();

// Middleware
app.use(cors({
  origin: 'https://college-recommendation-system-fag7.vercel.app'
}));

app.use(bodyParser.json());

// Routes
app.use('/api/colleges', collegeRoutes);
app.use('/api/comparator', comparatorRoutes);


// ✅ Use Railway's dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
