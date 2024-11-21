 
const mongoose=require ('mongoose')


const ownerSchema=mongoose.Schema({

    fullname:String,
    email:{
       type: String,
       minlenght:3,
       trim:true, 
    } ,
    password: String,
   
    isadmin: Boolean,
    products:{
        type:Array,
        default:[]
    },
    picture:String,
    gstin:Number,

}); 

  module.exports= mongoose.model("owner",ownerSchemaSchema)