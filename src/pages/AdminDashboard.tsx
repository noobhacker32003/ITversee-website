import { useState, useEffect } from 'react';
import { Mail, User, Briefcase, MessageSquare, Calendar, ChevronLeft, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSubmission {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin_token');
      if (!token) throw new Error('No authentication token found');

      const response = await fetch('http://localhost:5000/api/contact', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.status === 401) {
        localStorage.removeItem('admin_token');
        window.location.href = '/login';
        return;
      }

      if (!response.ok) throw new Error('Failed to fetch submissions');
      const data = await response.json();
      setSubmissions(data);
      setError(null);
    } catch (err) {
      setError('Could not connect to the backend. Is the server running?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    window.location.href = '/login';
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <a href="/" className="text-accent hover:text-white transition-colors flex items-center gap-1">
                <ChevronLeft size={16} />
                Back to Site
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold">
              Admin <span className="text-accent">Dashboard</span>
            </h1>
            <p className="text-gray-400 mt-2">Manage your contact form submissions and leads.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={fetchSubmissions}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
              disabled={loading}
            >
              <RefreshCcw size={18} className={loading ? 'animate-spin' : ''} />
              Refresh
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-bold rounded-xl neon-glow hover:scale-105 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="glass p-6 rounded-2xl">
            <p className="text-gray-400 text-sm mb-1">Total Submissions</p>
            <h3 className="text-3xl font-bold">{submissions.length}</h3>
          </div>
          <div className="glass p-6 rounded-2xl border-l-4 border-accent">
            <p className="text-gray-400 text-sm mb-1">New Leads (24h)</p>
            <h3 className="text-3xl font-bold">
              {submissions.filter(s => {
                const dayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
                return new Date(s.createdAt) > dayAgo;
              }).length}
            </h3>
          </div>
          <div className="glass p-6 rounded-2xl">
            <p className="text-gray-400 text-sm mb-1">Latest Submission</p>
            <h3 className="text-lg font-bold truncate">
              {submissions.length > 0 ? submissions[0].name : 'No data'}
            </h3>
          </div>
        </div>

        {/* Submissions List */}
        <div className="glass rounded-2xl overflow-hidden">
          {loading && submissions.length === 0 ? (
            <div className="p-20 text-center">
              <RefreshCcw size={48} className="animate-spin text-accent mx-auto mb-4" />
              <p className="text-xl font-medium">Fetching leads...</p>
            </div>
          ) : error ? (
            <div className="p-20 text-center">
              <div className="bg-red-500/20 border border-red-500/50 p-6 rounded-2xl inline-block max-w-md">
                <p className="text-red-400 font-medium mb-2">Connection Error</p>
                <p className="text-gray-300 text-sm">{error}</p>
                <p className="text-gray-500 text-xs mt-4 italic">Make sure your backend is running at http://localhost:5000</p>
              </div>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-20 text-center">
              <MessageSquare size={48} className="text-gray-600 mx-auto mb-4" />
              <p className="text-xl font-medium text-gray-400">No submissions yet.</p>
              <p className="text-gray-500 mt-2">When users contact you, their messages will appear here.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-accent">Name</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-accent">Contact Info</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-accent">Service</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-accent">Message</th>
                    <th className="px-6 py-4 font-bold text-sm uppercase tracking-wider text-accent text-right">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {submissions.map((sub, index) => (
                    <motion.tr 
                      key={sub._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-6 py-6 align-top">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">
                            {sub.name.charAt(0)}
                          </div>
                          <span className="font-semibold text-lg">{sub.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <Mail size={14} className="text-accent" />
                            {sub.email}
                          </div>
                          {sub.phone && (
                            <div className="flex items-center gap-2 text-gray-300 text-sm">
                              <User size={14} className="text-accent" />
                              {sub.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <span className="px-3 py-1 bg-accent-secondary/20 border border-accent-secondary/30 text-accent-secondary text-xs font-bold rounded-full">
                          {sub.service}
                        </span>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <p className="text-gray-300 text-sm max-w-md line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                          {sub.message}
                        </p>
                      </td>
                      <td className="px-6 py-6 align-top text-right text-gray-500 text-xs">
                        {new Date(sub.createdAt).toLocaleDateString(undefined, {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                        <br />
                        {new Date(sub.createdAt).toLocaleTimeString(undefined, {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
