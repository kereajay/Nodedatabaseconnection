const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect("mongodb+srv://kereajay578:naqqxVkG6Xk94UhB@cluster0.kx73ykk.mongodb.net/").then(()=>console.log("database connected suuccessfully")).catch((err)=>console.log(err))


const jobRoute=require('./Routes/Jobs');
app.use(express.json())
app.use(jobRoute)
app.listen(1478,()=>console.log("server running on port 1478"));