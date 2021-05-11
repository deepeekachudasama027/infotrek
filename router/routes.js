const express = require("express");
const router = express.Router();
const path= require('path');
const { getdetails } = require("../controllers/register");

const pool = require("../utils/db");


router.get('/', (req, res) => {
  res.sendFile( path.resolve('./public/static/index.html') );
});


router.get("/registration",  (req, res) => {
    res.render("layout/registration");
  });

  // router.post("/auth",  (request, response) {
  //   var rollno = request.body.rollno;
  //   var password = request.body.password;
  //   var name =  request.body.name;
   
  //   if ('${rollno}'.length==9 && password && name) {
  //     pool.query(
  //       "select * from  registration WHERE rollno = $1",
  //       [rollno],
  //        (error, results, fields) {
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
  //                  (err) {
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


  router.get("/gallery",  (req, res) => {
    res.sendFile( path.resolve('./public/static/gallery.html') );
  });

  
router.get('/events', (req, res) => {
  res.sendFile( path.resolve('./public/static/events.html') );
});

router.get('/contact', (req, res) => {
  res.sendFile( path.resolve('./public/static/contact.html') );
});

router.get('/team', (req, res) => {
  res.sendFile( path.resolve('./public/static/team.html') );
});


router.get('/about', (req, res) => {
  res.sendFile( path.resolve('./public/static/about.html') );
});


// async  getdetails(rollno) {
// const result = await pool.query("select * from  registration WHERE rollno = $1",
//   [rollno]);
//   return result['rowCount'];
// }

// async  updatedetails(rollno,password,name) {
//    await pool.query("Insert into registration (rollno,password,name) values ($1,$2,$3) ",
//   [ rollno,password,name]);
// }

// router.post("/auth",  (request, response) {
//   var rollno = request.body.rollno;
//   var password = request.body.password;
//   var name =  request.body.name;
 
//   if (`${rollno}`.length==9 && password && name) {
//       let val =  getdetails(rollno);
//          if(val>0) {
//           response.render("layout/registration", {
//             data: "already exists ",
//           });
//          } 
//             else(val<0)
//             {
//                   updatedetails(rollno,password,name);
//                   response.render("layout/registration", {
//                     data: "success ",
//                 })
//             }  
    
//   } else response.redirect("/registration");
// });

router.post ("/auth", getdetails);

  module.exports = router;
