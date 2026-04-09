import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('admin_token', data.token);
        navigate('/admin');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Could not connect to the server. Is it running?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-10 rounded-3xl border-white/10 relative overflow-hidden"
        >
          {/* Background Highlight */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6 neon-glow">
              <Lock className="text-accent" size={32} />
            </div>
            
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Admin <span className="text-accent">Access</span>
            </h1>
            <p className="text-gray-400 mb-8">Enter your secure password to access the dashboard.</p>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                <div className="relative group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-accent transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm"
                >
                  <AlertCircle size={18} />
                  {error}
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 mt-4"
              >
                {loading ? 'Authenticating...' : (
                  <>
                    Unlock Dashboard
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
        
        <p className="text-center text-gray-600 text-sm mt-8">
          &copy; 2026 ITversee Digital Agency. All rights reserved.
        </p>
      </div>
    </div>
  );
}
