

const { Pool } = require('pg');
var config = {
    // user: 'czwsfkumvhwqbz',
    // host: 'ec2-54-163-254-204.compute-1.amazonaws.com',
    // database: 'd3cevik2kpuoi2',
    // password: '97767c407ed1482ad379d659e57f0f583d2049c29523ced624f09e1e332854ab',
    // port: 5432,
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    },
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000
};
const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});


// const mysql = require("mysql2");
// const db = mysql.createConnection({
//   host: "us-cdbr-east-03.cleardb.com",
//   user: "b2842440789e6a",
//   password: "47877e70",
//   port:"3306"
// });

// db.connect(function (err) {
//   if (err) {
//     console.error(err);
//   }
// });



module.exports =pool;
require("../models/registration");