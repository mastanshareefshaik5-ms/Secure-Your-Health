import mongoose from "mongoose";

const bloodDonationSchema=new mongoose.Schema(

{

name:String,

bloodGroup:String,

age:Number,

phone:String,

address:String,

},

{

timestamps:true,

}

);

export default mongoose.model("BloodDonation",bloodDonationSchema);