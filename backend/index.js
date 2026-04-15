const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const pdf=require('pdf-parse');
const {OpenAI} = require('openai');
require('dotenv').config();

const multer=require('multer');

const Resume=require('./models/Resume');
const Analysis=require('./models/Analysis');
const fs = require('fs');
const dir = './uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//startign the server
const app=express();

//Middlewares

app.use(cors({
  origin: 'http://localhost:5173', // Allow your Vite frontend specifically
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

const ConnectDB=async()=>{


    try{
        console.log("URI:", process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    }
    catch(err){
        console.error('Error while connecting to MongoDB:', err);
    }   
}



ConnectDB();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Make sure this folder exists!
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload=multer({storage:storage})


const openai=new OpenAI({apiKey: process.env.OPENAI_API_KEY});


app.post('/api/upload',upload.single('resume'),async(req,res)=>{
    try{
        if(!req.file){
            return res.status(400).json({error: "File didn't upload"})
        }
        console.log("File saved at:", req.file.path);
        
        const data=await pdf(req.file.path);
        const rawText=data.text;
        const jobDescription=req.body.jobDescription;

        const resumeRecord = new Resume({
            fileName: req.file.originalname,
            filePath: req.file.path,
            rawText: rawText
        });
        await resumeRecord.save();

        const response=await openai.chat.completions.create({
            model:'gpt-4o',
            messages:[{
                role:'system',
                content:'You are a resume analyser,compare the resume with the job description and return only the JSON object with the :matchscore(0-100),criticalGaps(array) and beneficialGaps(array)'
            },{
                 role:'user',
                 content:`Resume: ${rawText} \n JobDescription:${jobDescription}`
            }],
            response_format: { type: "json_object" }
        });

        const analysis=JSON.parse(response.choices[0].message.content);

       const newRecord = new Analysis({
            resumeId: resumeRecord._id,
            jobDescription: req.body.jobDescription,
            matchScore: analysis.matchscore,
            criticalGaps: analysis.criticalGaps,
            beneficialGaps: analysis.beneficialGaps
        });
        await newRecord.save();

        res.status(200).json({ message: "Analysis complete",analysisId: newRecord._id });
    }catch(error){
        console.error("Error");
        res.status(500).json({error:"Analysis failed"})
    }
})

app.get('/api/results/:id',async(req,res)=>{   
    try{
        const analysis=await Analysis.findById(req.params.id).populate('resumeId');
        if(!analysis){
            return res.status(404).json({error:"Analysis not found"})
        }
        res.status(200).json(analysis);
    }catch(error){
        console.error("Error fetching analysis:", error);
        res.status(500).json({error:"Failed to fetch analysis"})
    }
})

const port=5000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
