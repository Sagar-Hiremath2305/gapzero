const mongoose=require('mongoose');

const ResumeSchema=new mongoose.Schema({
    username:{type:String,required:True},
    filename:{type:String,required:True},
    rawText:String,
    jobDescription:String,
    matchScore: Number,
    criticalGaps: [String],
    beneficialGaps: [String],
    createdAt: { type: Date, default: Date.now }
})