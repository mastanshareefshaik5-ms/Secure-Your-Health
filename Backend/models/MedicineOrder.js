import mongoose from "mongoose";

const medicineOrderSchema=new mongoose.Schema(

{

customerName:String,

medicineName:String,

quantity:Number,

address:String,

phone:String,

},

{

timestamps:true,

}

);

export default mongoose.model("MedicineOrder",medicineOrderSchema);