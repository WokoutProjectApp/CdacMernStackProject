const bcrypt = require('bcrypt')
const usermodal = require('../DB/registeruser')



exports.reguser = (req, res) => {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(String(req.body.password), salt).then((hash) => {

            usermodal.insertMany({ "username": req.body.username,  "email": req.body.email,  "password": hash ,  "confirmpassword":hash})

                .then((result) => {
                    console.log(result)
                    res.send("User Registered")
                }).catch((error) => {
                    console.log(error)

                    if (error.code == 11000) {
                        res.send("User Already Registered")

                    }
                    else {

                        res.send("Something Went Wrong")
                    }
                })
        }).catch((err) => {
            console.log(err)
            res.send("Error in Gen Hash")
        })
    })
}
exports.userLogin  =  (req,res) =>{

    usermodal.findOne({"email" : req.body.email}).then((data)=>{
        console.log(data)

        if(data  ===  null || data === undefined  )
        {

            res.send("You Are Not a Registered User")
        }
        else
        {
            // res.status(200).send({ msg :  "Data Found with hash "  , hash : data.password})

            bcrypt.compare(req.body.password , data.password  ,function(err , result){
                if(err){

                    res.status(400).send("Something Went Wrong")
                }

                if(result  === true )
                {
                    res.status(200).send({msg : "Login Successfully" , id : data.id })

                }
                else
                {
                    res.status(401).send({msg : "Login Failed" , id : null })

                }

            })
            
        }

    }).catch((err)=>{
        console.log(err)
        res.send("Error Occured")
    })

}
