const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');        // <--- Add this line
const collegeRoutes = require('./routes/colleges');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/colleges', collegeRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
// app.post('/api/colleges/generate-preference', collegeController.generatePreferenceList);
