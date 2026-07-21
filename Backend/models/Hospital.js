import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(

{

name:String,

location:String,

speciality:String,

contact:String,

image:String,

},

{

timestamps:true,

}

);

export default mongoose.model("Hospital",hospitalSchema);