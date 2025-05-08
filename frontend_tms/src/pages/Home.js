import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import path

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center px-4 py-10 min-h-screen bg-gradient-to-br from-white via-sky-50 to-cyan-100">
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-700 text-center mb-6">
                Welcome to the Task Pilot
            </h1>

            <p className="text-lg md:text-2xl text-center text-cyan-900 max-w-3xl mb-10">
                After registering, you will be able to create, update, and delete your own tasks.
                <br />
                Only the admin can view all users.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                <Link
                    to="/login"
                    className="w-60 text-center py-3 px-6 border border-cyan-400 rounded bg-cyan-600 text-white font-bold text-lg hover:bg-cyan-900 hover:border-cyan-800 transition"
                >
                    Log In
                </Link>
                <Link
                    to="/register"
                    className="w-60 text-center py-3 px-6 border border-cyan-400 rounded bg-cyan-600 text-white font-bold text-lg hover:bg-cyan-900 hover:border-cyan-800 transition"
                >
                    Register
                </Link>
                <Link
                    to="/admin"
                    className="w-60 text-center py-3 px-6 border border-cyan-400 rounded bg-cyan-600 text-white font-bold text-lg hover:bg-cyan-900 hover:border-cyan-800 transition"
                >
                    Admin Login
                </Link>
            </div>
        </div>
    );
};

export default Home;
