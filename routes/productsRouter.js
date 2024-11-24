const express=require('express')
const router=express.Router();


router.get("/",(req,res)=>{

    res.send("i am Product  router")
})

module.exports=router;