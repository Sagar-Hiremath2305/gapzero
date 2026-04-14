import { Link } from "react-router-dom";
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-bg">
      <nav className="flex justify-between items-center py-4 px-10 bg-white shadow-sm border-b">
        <h1 className="text-xl font-bold text-blue-700">ResumeAI</h1>
        <div className="space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/upload" className="hover:text-blue-600">Analyze CV</Link>
        </div>
      </nav>

      <div className="profile-grid">
        <aside className="sidebar-nav">
          <div className="p-4 bg-blue-600 text-white rounded-xl font-bold shadow-md">My Dashboard</div>
          <div className="p-4 text-slate-400 hover:text-blue-600 cursor-pointer">Account Settings</div>
          <div className="p-4 text-slate-400 hover:text-blue-600 cursor-pointer">Saved Reports</div>
          
          <button className="btn-logout">
             <span>Logout</span>
          </button>
        </aside>

        <main className="content-area">
          <div className="glass-card">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Personal Profile</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase font-bold text-slate-400">Full Name</p>
                <p className="text-lg font-medium">John Doe</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold text-slate-400">Email Address</p>
                <p className="text-lg font-medium">john.doe@example.com</p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Recent Analysis History</h3>
            <div className="space-y-2">
              <div className="history-item">
                <div>
                  <p className="font-bold">Senior React Developer CV</p>
                  <p className="text-xs text-slate-400">Analyzed on March 10, 2026</p>
                </div>
                <span className="badge-blue">92% Match</span>
              </div>
              <div className="history-item">
                <div>
                  <p className="font-bold">Fullstack Engineer Resume</p>
                  <p className="text-xs text-slate-400">Analyzed on March 08, 2026</p>
                </div>
                <span className="badge-blue">85% Match</span>
              </div>
            </div>
          </div>

          <Link to="/upload" className="block text-center bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all">
            + Start New Analysis
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Profile;