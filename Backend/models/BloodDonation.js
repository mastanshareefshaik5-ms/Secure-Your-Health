// Backend/models/BloodDonation.js

const mongoose=require("mongoose");

const bloodDonationSchema=new mongoose.Schema({

donorName:{
type:String,
required:true,
},

bloodGroup:{
type:String,
required:true,
},

phone:{
type:String,
required:true,
},

city:{
type:String,
required:true,
}

},{
timestamps:true
});

module.exports=mongoose.model("BloodDonation",bloodDonationSchema);