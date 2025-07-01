// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const db = require('./config/db');        
// const collegeRoutes = require('./routes/colleges');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.use('/api/colleges', collegeRoutes);

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./config/db');        
const collegeRoutes = require('./routes/colleges');
const comparatorRoutes = require('./routes/comparator');  // NEW

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Existing College Routes
app.use('/api/colleges', collegeRoutes);

// New Comparator Routes
app.use('/api/comparator', comparatorRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
