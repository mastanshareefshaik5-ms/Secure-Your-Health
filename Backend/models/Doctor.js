import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema(

{

name:String,

specialization:String,

experience:String,

hospital:String,

contact:String,

image:String,

},

{

timestamps:true,

}

);

export default mongoose.model("Doctor",doctorSchema);