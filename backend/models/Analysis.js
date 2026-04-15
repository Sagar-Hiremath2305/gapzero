const mongoose=require('mongoose');

const AnalysisSchema=new mongoose.Schema({
    resumeId:{type: mongoose.Schema.Types.ObjectId, ref: 'Resume', required: true},
    jobDescription:{type: String, required: true},
    matchScore:{type: Number,min:0,max:100,required: true},
    criticalGaps: [{type: String}],
    beneficialGaps: [{type: String}],
    createdAt: { type: Date, default: Date.now }
},{timestamps:true})