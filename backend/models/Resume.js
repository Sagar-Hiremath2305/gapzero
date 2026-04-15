const mongoose=require('mongoose');

const ResumeSchema=new mongoose.Schema({
    username:{type:String,required:true},
    filename:{type:String,required:true},
    rawText:String,
    jobDescription:String,
    matchScore: Number,
    criticalGaps: [String],
    beneficialGaps: [String],
    createdAt: { type: Date, default: Date.now }
})

