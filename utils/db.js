

const { Pool } = require('pg');
var config = {
    user: 'postgres',
    host: 'localhost',
    database: 'testdb',
    password: 'Acm@2022',
    port: 5432,
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