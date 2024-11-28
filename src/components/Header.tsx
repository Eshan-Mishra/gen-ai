import { Brain, LogOut } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/auth';
import AuthModal from './AuthModal';

export default function Header() {
  const [showAuth, setShowAuth] = useState(false);
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            
            <img src="./public/G.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Google Development Group | GenAI</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-200 transition-colors">Home</Link>
            {/* <Link to="/#courses" className="hover:text-purple-200 transition-colors">Courses</Link> */}
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <span>Welcome, {currentUser.name}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-purple-200 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold
                         hover:bg-purple-100 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </nav>
      </header>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={() => {
            setShowAuth(false);
            window.location.reload();
          }}
        />
      )}
    </>
  );
}
