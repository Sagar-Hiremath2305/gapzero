import { Link, useNavigate } from "react-router-dom"; // 1. Import useNavigate
import './upload.css';

const UploadCV = () => {
  const navigate = useNavigate(); // 2. Initialize the "GPS"

  const handleAnalyze = async () => {
    // 3. This function runs when the button is clicked
    console.log("Analyzing...");
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
    }

    const formdata=new FormData();
    formdata.append('resume',file);
    formdata.append('jobDescription',jobDescription);

    try{
      const response=await axios.post('http://localhost:5000/api/upload',formdata,{
        headers:{'Content-Type':'multipart/form-data'}
      });

      navigate('/results/${response.data.analysisId}'); 
    }
  
    catch(error){
      console.error("Error during analysis:",error);
      alert("Analysis failed. Please try again.");
    } 
  };

  return (
    <div className="upload-bg">
      <div className="bg-blob -top-20 -left-20"></div>
      <div className="bg-blob bottom-0 -right-20 bg-indigo-100"></div>

      <nav className="upload-nav">
        <h1 className="text-2xl font-black text-blue-700">ResumeAI</h1>
        <div className="space-x-8 font-semibold">
          <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/profile" className="text-slate-600 hover:text-blue-600 transition-colors">Profile</Link>
        </div>
      </nav>

      <main className="upload-main-container">
        {/* Progress Stepper */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-4">
            <span className="step-dot-active">1</span>
            <span className="font-bold text-slate-800">Upload</span>
            <div className="w-12 h-0.5 bg-slate-200"></div>
            <span className="step-dot-inactive">2</span>
            <span className="font-bold text-slate-400">Results</span>
          </div>
        </div>

        <div className="upload-workspace">
          <div className="instr-panel">
            <h2 className="text-4xl font-black text-slate-900 leading-tight mb-4">
              Prepare Your <span className="text-blue-600">Analysis</span>
            </h2>
            <p className="text-slate-500 mb-8">Our ML engine will scan your CV for over 50+ industry-standard keywords.</p>
            
            <div className="space-y-2">
              <div className="rule-card">
                <div className="text-blue-600 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-slate-800">Format</h4>
                  <p className="text-sm text-slate-500">PDF or Docx preferred.</p>
                </div>
              </div>
              <div className="rule-card">
                <div className="text-blue-600 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-slate-800">Size</h4>
                  <p className="text-sm text-slate-500">Under 5MB for speed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drop-area-panel">
            <div className="p-4 w-full">
              {/* Added 'group' class here for the hover effect */}
              <label className="custom-file-upload group">
                <input type="file" className="hidden" />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Drop your resume here</h3>
                <p className="text-slate-400 mt-2">Support for PDF, DOCX, TXT</p>
                <span className="mt-6 text-blue-600 font-bold underline">or browse files</span>
              </label>

              {/* 4. Attach the click handler to the button */}
              <button 
                onClick={handleAnalyze} 
                className="btn-analyze"
              >
                Start ML Analysis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadCV;  