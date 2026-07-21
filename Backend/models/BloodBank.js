import mongoose from "mongoose";

const bloodBankSchema=new mongoose.Schema(

{

hospital:String,

bloodGroup:String,

units:Number,

contact:String,

},

{

timestamps:true,

}

);

export default mongoose.model("BloodBank",bloodBankSchema);