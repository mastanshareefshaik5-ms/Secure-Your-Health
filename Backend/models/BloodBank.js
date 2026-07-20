// Backend/models/BloodBank.js

const mongoose=require("mongoose");

const bloodBankSchema=new mongoose.Schema({

bloodGroup:{
type:String,
required:true,
},

units:{
type:Number,
required:true,
},

location:{
type:String,
required:true,
},

contact:{
type:String,
required:true,
}

},{
timestamps:true
});

module.exports=mongoose.model("BloodBank",bloodBankSchema);