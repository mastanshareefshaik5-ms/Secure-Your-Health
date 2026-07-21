import mongoose from "mongoose";

const medicineSchema=new mongoose.Schema(

{

name:String,

company:String,

price:Number,

stock:Number,

description:String,

image:String,

},

{

timestamps:true,

}

);

export default mongoose.model("Medicine",medicineSchema);