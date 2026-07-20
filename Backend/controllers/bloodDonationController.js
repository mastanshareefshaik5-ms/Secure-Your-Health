// Backend/controllers/bloodDonationController.js

const BloodDonation=require("../models/BloodDonation");

exports.getAll=async(req,res)=>{
const data=await BloodDonation.find();
res.json(data);
};

exports.create=async(req,res)=>{
const data=await BloodDonation.create(req.body);
res.json(data);
};

exports.update=async(req,res)=>{
const data=await BloodDonation.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);
res.json(data);
};

exports.remove=async(req,res)=>{
await BloodDonation.findByIdAndDelete(req.params.id);
res.json({
message:"Deleted Successfully"
});
};