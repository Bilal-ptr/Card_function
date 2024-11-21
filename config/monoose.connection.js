const mongoose=require ('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/card")
.then(()=>{
    console.log("here Contected")
})


.catch((err)=>{
    console.log(err,"there CHECK Please")
})

module.exports=mongoose.connection;