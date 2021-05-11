
const {getrollno,updatedetails} = require("../models/registration.js");

exports.getdetails = async (req,res,next) =>{
    try{
        if(`${req.body.rollno}`.length===9 && req.body.password&&req.body.name) {
            const getdata = await getrollno(req.body.rollno);
            if(getdata.rowCount>0)
            {
                res.render("layout/registration", {
                    data: "already exists ",
                  });
            }
            else {
                const updatedata = await updatedetails(req.body.rollno,req.body.password,
                 req.body.name);
                res.render("layout/registration", {
                    data: "success ",
                })
            }
        }
        else 
            res.redirect("/registration");
      
    } catch(err){
        next(err);
    }
}
