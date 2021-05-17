const { getrollno, updatedetails } = require("../models/registration");
const {updatelogin_clueminati,updatelogin_arsenal, updatesession_clueminati}  = require("../models/login");

exports.getdetails = async (req, res, next) => {
  try {
    if (req.body.rollno && req.body.password && req.body.name && req.body.email) {
      const getdata = await getrollno(req.body.rollno);
      if (getdata.rowCount > 0) {
        res.render("layout/registration", {
          message: "Already Exists ",
        })
      } else {
        const updatedata = await updatedetails(
          req.body.rollno,
          req.body.password,
          req.body.name,
          req.body.email
        )
        const updateclueminati = await updatelogin_clueminati(
          req.body.rollno,
          req.body.password
        )
        const updatearsenal = await updatelogin_arsenal(
          req.body.rollno,
          req.body.password
        )
        const updatesession= await
        updatesession_clueminati(req.body.rollno)
        
        res.render("layout/registration", {
          message: "Successfully Registered ",
        })
      }
    } else res.redirect("/registration");
  } catch (err) {
    next(err)
  }
};
