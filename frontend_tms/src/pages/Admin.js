import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // fixed import

const Admin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (password === 'admin123') {
      localStorage.setItem('admin_logged_in', 'true');
      alert('Admin login successful!');
      navigate('/admin-dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl border border-cyan-200">
        <h2 className="text-3xl font-bold text-center text-cyan-800 mb-6">Admin Login</h2>

        {error && (
          <p className="text-red-500 text-center mb-4 font-medium">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-cyan-700 font-semibold mb-1">Admin Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
