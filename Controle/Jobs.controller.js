const Jobmodel=require('../Model/Jobs');

const addjob=async (req,res)=>{
    try{
        console.log(req.body)
    const newlyinsertedjob=await Jobmodel.create(req.body)
    res.json({success:"true",message:"job added successfully"})
    }
    catch(err){
        console.log(err)
        res.json({success:"false",message:"job not added"})
    }

    
  
}
const getjob=async(req,res)=>{
    try{
        console.log(req.query.title)
    const response=await Jobmodel.find({title:req.query.title})
    res.json({success:"true",message:"job get successfully",results:response})
    }
    catch(err){
        console.log(err)
        res.json({success:"false",message:"job not get"})
    }
}

const updatejob=async(req,res)=>{
    try{
        console.log(req.params.id)
        const updateobj={
          
                $set:req.body,
            
        }
        const filterobj={
            salary:{
                $gte:90000
            }
        }
        //  const response=await Jobmodel.findByIdAndUpdate(req.params.id,updateobj)
        const response=await Jobmodel.updateMany(filterobj,updateobj)
        console.log(response)
        res.json({success:true,message:"updated successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"can not get"})

    }

}
const deletejob=async(req,res)=>{
    try{
        const response=await Jobmodel.deleteOne({_id:req.params.id})
        console.log(response)



        res.json({success:true,message:"deleted successfully"})

    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"you got an error"})

    }

}

const jobcontroller={
    addjob,
    getjob,
    updatejob,
    deletejob

}
module.exports=jobcontroller