import { Link } from "react-router-dom";
import './results.css';

const Results = () => {
  return (
    <div className="results-bg">
      <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-sm">
        <h1 className="text-xl font-bold text-blue-700">ResumeAI</h1>
        <div className="space-x-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/profile" className="hover:text-blue-600">Profile</Link>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="main-report">
          <div className="data-card">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">Detailed Analysis Report</h2>
            <div className="space-y-6">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-green-800">Key Strengths Found</h4>
                <p className="text-green-700 font-medium">Strong proficiency in JavaScript, React, and Frontend Architecture.</p>
              </div>
              <div>
                <h4 className="font-bold mb-2 text-slate-800">Recommendations for Improvement</h4>
                <ul className="list-disc ml-5 space-y-2 text-slate-600">
                  <li>Incorporate more metrics (e.g., "Reduced load time by 30%").</li>
                  <li>Add a dedicated "Projects" section to highlight GitHub work.</li>
                  <li>Include specific certifications for AWS or Cloud computing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="side-panel">
          <div className="data-card text-center">
            <h3 className="text-sm uppercase tracking-widest text-slate-400 mb-6 font-bold">Match Score</h3>
            <div className="percentage-ring">85%</div>
            <p className="font-bold text-blue-900 mb-8">Status: Strong Match</p>
            <Link to="/upload" className="block w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md">
              Analyze Another CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// THE MOST IMPORTANT LINE:
export default Results;