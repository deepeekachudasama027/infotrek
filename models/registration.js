

var pool = require("../utils/db");

pool.query(
  "CREATE TABLE IF NOT EXISTS registration (rollno int PRIMARY KEY ,password varchar (50),name varchar (50))",
  function (err, result) {
    if (err) console.log(err);
  }
);

exports.getrollno = (rollno,callback) => {
 return  pool.query("select * from  registration WHERE rollno = $1",
  [rollno],callback);
}

exports.updatedetails = (rollno,password,name,callback) => {
  return  pool.query("Insert into registration (rollno,password,name) values ($1,$2,$3) ",
  [ rollno,password,name],callback);
 }