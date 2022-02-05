const mongoose = require("mongoose")


const userregSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true
        
    },
    // mobile : {
    //     type : Number,
    //     required : true,
    //     unique : true

    // },

    email : {
        type : String,
        required : true , 
        unique : true
        
    },
    // gender : {
    //     type : String,
    //     required : true 
       
    // },
    password : {
        type : String,
        required : true 
    
    },
    confirmpassword : {
        type : String,
        required : true 
    },

    added_date : {
        type : String,
        required:true,
        default : new Date(Date.now())
    }

});

const registeruser = mongoose.model("registeruser", userregSchema)

module.exports = registeruser