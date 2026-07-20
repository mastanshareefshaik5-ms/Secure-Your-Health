// Backend/controllers/bloodBankController.js

const BloodBank=require("../models/BloodBank");

exports.getAll=async(req,res)=>{
const data=await BloodBank.find();
res.json(data);
};

exports.create=async(req,res)=>{
const data=await BloodBank.create(req.body);
res.json(data);
};

exports.update=async(req,res)=>{
const data=await BloodBank.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(data);
};

exports.remove=async(req,res)=>{
await BloodBank.findByIdAndDelete(req.params.id);
res.json({
message:"Deleted Successfully"
});
};