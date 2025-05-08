import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const isAdminLoggedIn = localStorage.getItem('admin_logged_in');

    const handleLogout = () => {
        if (isAdminLoggedIn) {
            localStorage.removeItem('admin_logged_in');
            navigate('/admin');
        } else {
            localStorage.removeItem('token');
            navigate('/');
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-tr from-zinc-200 via-slate-500 to-neutral-800 text-white rounded-2xl shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
                <div className="flex items-center space-x-3">
                    <Link to="/" className="flex items-center">
                        <img src="/logo.svg" alt="TMS Logo" width={150} height={150} className="mr-2" />
                    </Link>
                </div>

                {(token || isAdminLoggedIn) ? (
                    <div className="flex items-center space-x-4 mt-3 md:mt-0">
                        <span className="text-sm md:text-base font-medium hidden sm:inline">
                            {isAdminLoggedIn ? "Admin Panel" : "Task Management System"}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="py-2 px-4 text-sm md:text-base border border-cyan-400 rounded bg-cyan-50 text-cyan-950 font-semibold hover:bg-cyan-900 hover:text-white hover:border-cyan-800 transition"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-4 mt-3 md:mt-0">
                        <Link
                            to="/login"
                            className="py-2 px-4 text-sm md:text-base border border-cyan-400 rounded bg-cyan-50 text-cyan-950 font-semibold hover:bg-cyan-900 hover:text-white hover:border-cyan-800 transition"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="py-2 px-4 text-sm md:text-base border border-cyan-400 rounded bg-cyan-50 text-cyan-950 font-semibold hover:bg-cyan-900 hover:text-white hover:border-cyan-800 transition"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
