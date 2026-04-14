import { Link } from "react-router-dom";
import './register.css';

const Register = () => {
  return (
    <div className="register-page-wrapper">
      <div className="register-card">
        <div className="mb-6">
            <Link to="/" className="text-blue-600 text-sm font-bold hover:text-blue-800">← Back to Home</Link>
        </div>

        <h2 className="register-title">Create Account</h2>
        
        <form className="form-grid">
          <div>
            <label className="input-label">Full Name</label>
            <input type="text" placeholder="John Doe" className="input-field" />
          </div>
          <div>
            <label className="input-label">Email Address</label>
            <input type="email" placeholder="john@example.com" className="input-field" />
          </div>
          <div>
            <label className="input-label">Password</label>
            <input type="password" placeholder="Min. 8 characters" className="input-field" />
          </div>
          <button type="submit" className="submit-btn">Register Now</button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login" className="register-link">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;