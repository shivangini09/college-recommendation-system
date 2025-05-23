const express = require('express');
const cors = require('cors');
require('dotenv').config();

const collegeRoutes = require('./routes/colleges');
const branchRoutes = require('./routes/branches');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/colleges', collegeRoutes);
app.use('/branches', branchRoutes);

app.get('/', (req, res) => {
  res.send('College Recommendation API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
