

var poolt = require("../utils/db");

// poolt.query("use testdb");

poolt.query(
  "CREATE TABLE IF NOT EXISTS registration (rollno int PRIMARY KEY ,password varchar (50),name varchar (50))",
  function (err, result) {
    if (err) console.log(err);
  }
);