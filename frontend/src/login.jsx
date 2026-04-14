import { Link } from "react-router-dom";
import './login.css';

const Login = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        {/* Simple Top Nav for Login */}
        <div className="mb-6">
            <Link to="/" className="text-blue-600 text-sm font-bold hover:text-blue-800">← Back to Home</Link>
        </div>
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Please enter your details to continue</p>
        
        <form className="space-y-4">
          <div>
            <label className="input-label">Email Address</label>
            <input type="email" placeholder="name@company.com" className="input-field" />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input type="password" placeholder="••••••••" className="input-field" />
          </div>
          <button type="submit" className="submit-btn">Sign In</button>
        </form>

        <p className="footer-text">
          New to ResumeAI? <Link to="/register" className="register-link">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;