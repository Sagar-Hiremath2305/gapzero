import { useState } from "react"; // Added useState
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Ensure axios is imported
import './upload.css';

const UploadCV = () => {
  const navigate = useNavigate();
  
  // 1. State for the file and Job Description
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // 2. Handle File Selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    
    if (!file || !jobDescription) {
      alert("Please upload a resume and provide a Job Description.");
      return;
    }

    setLoading(true);
    console.log("Analyzing...");

    // 3. Prepare Multipart Form Data
    const formdata = new FormData();
    formdata.append('resume', file);
    formdata.append('jobDescription', jobDescription);

    try {
      // 4. Send to Node.js backend
      const response = await axios.post('http://localhost:5000/api/upload', formdata);
      
      console.log("Analysis Received:", response.data);
      
      // 5. Navigate using backticks `` for the ID
      navigate(`/results/${response.data.analysisId}`); 
    }
    catch(error) {
      console.error("Error during analysis:", error);
      alert("Analysis failed. Check if backend is running on port 5000.");
    } finally {
      setLoading(false);
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
            
            {/* Added Job Description Input */}
            <div className="mt-6">
              <h4 className="font-bold text-slate-800 mb-2">Target Job Description</h4>
              <textarea 
                className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none h-32 text-sm"
                placeholder="Paste the job description here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>
            
            <div className="space-y-2 mt-6">
              <div className="rule-card">
                <div className="text-blue-600 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-slate-800">Format</h4>
                  <p className="text-sm text-slate-500">PDF preferred.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="drop-area-panel">
            <div className="p-4 w-full">
              <label className="custom-file-upload group">
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={handleFileChange}
                  accept=".pdf"
                />
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {file ? file.name : "Drop your resume here"}
                </h3>
                <span className="mt-6 text-blue-600 font-bold underline">or browse files</span>
              </label>

              <button 
                onClick={handleAnalyze} 
                className={`btn-analyze ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? "Processing AI..." : "Start ML Analysis"}
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