import mongoose from "mongoose";

const appointmentSchema=new mongoose.Schema(

{

patientName:String,

doctorName:String,

hospital:String,

date:String,

time:String,

phone:String,

},

{

timestamps:true,

}

);

export default mongoose.model("Appointment",appointmentSchema);