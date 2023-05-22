const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema(
    {

        userID:{type:String, required:true,unique:true},
        username:{type:String,required:true,unique:true},
        name:{type:String,required:true},
        userImage:{type:String,required:true},
       

         
    },
    {timestamps:true}
)

module.exports=mongoose.model("Lykauser",UserSchema)