const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const pdf=require('pdf-parse');
const {OpenAI} = require('openai');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

const ConnectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }
    catch(err){
        console.error('Error while connecting to MongoDB:', err);
    }   
}



ConnectDB();


const openai=new OpenAI({apiKey: process.env.OPENAI_API_KEY});

app.post('/api/upload',upload.single('resume'),async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error: "File didn't upload"})
        }
        const data=await pdf(req.file.buffer);
        const rawText=data.text;
        const jobDescription=req.body.jobDescription;

        const response=await openai.chat.completions.create({
            model:'gpt-4',
            messages:[{
                role:'system',
                content:'You are a resume analyser,compare the resume with the job description and return only the JSON object with the :matchscore(0-100),criticalGaps(array) and beneficialGaps(array)'
            },{
                 role:'user',
                 content:'Resume: ${rawText} \n JobDescription:${jobDescription}'
            }],
            response_format: { type: "json_object" }
        });

        const analysis=JSON.parse(response.choices[0].message.content);

        res.status(200).json({message:"Completed analysis",data:analysis})
    }catch(error){
        console.error("Error");
        res.status(500).json({error:"Analysis failed"})
    }
})

const port=5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
