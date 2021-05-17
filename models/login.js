var pool = require("../controllers/db");

pool.query(
   "CREATE TABLE IF NOT EXISTS login_clueminati (rollno int PRIMARY KEY ,id int default 1 ,password varchar (50), score int default 1000,piid int default 1,curhint int default 0, total_hit int default 0, wrong_hit int default 0,cur_img_time  bigint ,last_submit bigint ,first_login bigint )",
  (err, result) =>{
    if (err) throw err;
  }
);


pool.query(
    "CREATE TABLE IF NOT EXISTS login_arsenal (rollno int PRIMARY KEY ,password varchar (50), coin int default 0)",
   (err, result) =>{
     if (err) throw err;
   }
 );

 pool.query(
  "CREATE TABLE IF NOT EXISTS question_clueminati (question varchar (150),id int PRIMARY KEY,answer varchar (150), hint1 varchar (300),hint2 varchar (300),hint3 varchar (300), first_time bigint , flag int )",
 (err, result) =>{
   if (err) throw err;
 }
);

exports.updatelogin_clueminati = (rollno, password, callback) => {
    return pool.query(
      "Insert into login_clueminati (rollno,password) values ($1,$2) ",
      [rollno, password],
      callback
    );
  };

  exports.updatelogin_arsenal = (rollno, password, callback) => {
    return pool.query(
      "Insert into login_arsenal (rollno,password) values ($1,$2) ",
      [rollno, password],
      callback
    );
  };