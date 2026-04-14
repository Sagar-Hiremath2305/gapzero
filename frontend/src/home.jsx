import { Link } from "react-router-dom";
import './home.css';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      {/* Top Navigation Bar */}
      <nav className="nav-header">
        <h1 className="text-xl font-bold text-blue-700">ResumeAI</h1>
        <div className="space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/profile" className="hover:text-blue-600">Profile</Link>
          <Link to="/login" className="text-blue-600 border border-blue-600 px-4 py-1 rounded-lg">Login</Link>
        </div>
      </nav>

      <header className="hero-banner">
        <h1 className="text-5xl font-black mb-4">Smart Resume Analyser Pro</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          Leverage advanced Machine Learning to bridge the gap between your skills and industry requirements. 
          Our system doesn't just scan—it understands your career trajectory.
        </p>
      </header>

      <main className="main-container">
        <div className="info-grid">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900">Why use our Analyser?</h2>
            <p className="text-lg text-slate-600 mb-4">
              Our AI parses through thousands of job descriptions daily to identify the exact keywords and 
              competencies that HR managers in top tech firms are looking for.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">✅ <strong>ATS Optimization:</strong> Beat the automated bots.</li>
              <li className="flex items-center gap-2">✅ <strong>Skill Gap Analysis:</strong> Identify what you're missing.</li>
              <li className="flex items-center gap-2">✅ <strong>Formatting Tips:</strong> Professional layout advice.</li>
            </ul>
          </div>
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Project Scope</h3>
            <p className="text-slate-500 italic">
              "This project aims to democratize career growth by providing high-level recruitment insights 
              to every applicant, ensuring talent never goes unnoticed due to poor resume formatting."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="feature-card">
            <div className="step-circle">1</div>
            <h4 className="font-bold text-lg">Upload Data</h4>
            <p className="text-slate-500">Securely upload your PDF or Docx files for deep-layer processing.</p>
          </div>
          <div className="feature-card">
            <div className="step-circle">2</div>
            <h4 className="font-bold text-lg">ML Processing</h4>
            <p className="text-slate-500">Our NLP models extract skills, experience, and educational data.</p>
          </div>
          <div className="feature-card">
            <div className="step-circle">3</div>
            <h4 className="font-bold text-lg">Detailed Report</h4>
            <p className="text-slate-500">Get a comprehensive PDF report of your match and improvement areas.</p>
          </div>
        </div>

        <div className="text-center bg-blue-50 py-16 rounded-3xl border border-blue-100">
          <h2 className="text-3xl font-bold mb-8">Ready to boost your career?</h2>
          <Link to="/upload" className="cta-button">
            Let's Get Started
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;