const express=require('express');
const jobRoute=express.Router();
const jobcontroller=require('../Controle/Jobs.controller');

jobRoute.post('/addjob',jobcontroller.addjob)
jobRoute.get('/getjob',jobcontroller.getjob)
jobRoute.put('/getjob/:id',jobcontroller.updatejob)
jobRoute.delete('/getjob/:id',jobcontroller.deletejob)


module.exports=jobRoute;