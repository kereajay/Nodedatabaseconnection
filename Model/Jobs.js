const mongoose = require('mongoose');
const jobschema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
    type:String    
    },
    company:{
        type:String
    },
    location:{
        type:String
    },
    salary:{
        type:Number
    }
    
})


const JobsSchema=mongoose.model('Jobs',jobschema);
module.exports=JobsSchema