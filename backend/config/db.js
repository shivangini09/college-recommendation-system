// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('MySQL connection error:', err.message);
//   } else {
//     console.log('MySQL connected');
//   }
// });

// module.exports = db;








// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST || process.env.MYSQLHOST,
//   user: process.env.DB_USER || process.env.MYSQLUSER,
//   password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
//   database: process.env.DB_NAME || process.env.MYSQLDATABASE,
//   port: process.env.DB_PORT || process.env.MYSQLPORT || 3306,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('❌ MySQL connection error:', err.message);
//   } else {
//     console.log('✅ MySQL connected');
//   }
// });

// module.exports = db;






const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || process.env.MYSQLHOST,
  user: process.env.DB_USER || process.env.MYSQLUSER,
  password: process.env.DB_PASSWORD || process.env.MYSQLPASSWORD,
  database: process.env.DB_NAME || process.env.MYSQLDATABASE,
  port: process.env.DB_PORT || process.env.MYSQLPORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,   // max simultaneous connections
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ MySQL connection error:', err.message);
  } else {
    console.log('✅ MySQL pool connected');
    connection.release(); // release it back to the pool
  }
});

module.exports = pool;




