const express = require("express");
const router = express.Router();
const path= require('path')

const pool = require("../utils/db");


router.get('/', function(req, res) {
  res.sendFile( path.resolve('./public/static/index.html') );
});


router.get("/registration", function (request, response) {
    response.render("layout/registration");
  });

  // router.post("/auth", function (request, response) {
  //   var rollno = request.body.rollno;
  //   var password = request.body.password;
  //   var name =  request.body.name;
   
  //   if ('${rollno}'.length==9 && password && name) {
  //     pool.query(
  //       "select * from  registration WHERE rollno = $1",
  //       [rollno],
  //       function (error, results, fields) {
  //         if (error) console.log(error);
  //         else {
  //          if(results.rows.length>0) {
  //           response.render("layout/registration", {
  //             data: "already exists ",
  //           });
  //          } 
  //             else
  //             {
  //               pool.query(
  //                 "Insert into registration (rollno,password,name) values ($1,$2,$3) ",
  //                 [ rollno,password,name],
  //                 function (err) {
  //                   if (err) throw err;
  //                   response.render("layout/registration", {
  //                     data: "success ",
  //                 })
               
  //               });
  //             }  
  //         }
  //       }
  //     );
  //   } else response.redirect("/registration");
  // });


  router.get("/gallery", function (req, res) {
    res.sendFile( path.resolve('./public/static/gallery.html') );
  });

  
router.get('/events', function(req, res) {
  res.sendFile( path.resolve('./public/static/events.html') );
});

router.get('/contact', function(req, res) {
  res.sendFile( path.resolve('./public/static/contact.html') );
});

router.get('/team', function(req, res) {
  res.sendFile( path.resolve('./public/static/team.html') );
});


router.get('/about', function(req, res) {
  res.sendFile( path.resolve('./public/static/about.html') );
});


async function getdetails(rollno) {
  const result = await pool.query("select * from  registration WHERE rollno = $1",
  [rollno]);
  console.log(result[0]);
  if(result[0].length<1)
    return 1;
  else 
  return 0;
}

async function updatedetails(rollno,password,name) {
  const result = await pool.query("Insert into registration (rollno,password,name) values ($1,$2,$3) ",
  [ rollno,password,name]);
}

router.post("/auth", function (request, response) {
  var rollno = request.body.rollno;
  var password = request.body.password;
  var name =  request.body.name;
 
  if ('${rollno}'.length==9 && password && name) {
      const val =  getdetails(rollno);
         if(val==1) {
          response.render("layout/registration", {
            data: "already exists ",
          });
         } 
            else
            {
                 val = updatedetails(rollno,password,name);
                  response.render("layout/registration", {
                    data: "success ",
                })
            }  

    
  } else response.redirect("/registration");
});



  module.exports = router;
