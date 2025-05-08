import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-cyan-600 text-white py-4 font-semibold text-center">
            <p className="text-lg">© {new Date().getFullYear()} Task Pilot</p>
            <p className="text-sm">Developed by Piyush Kumar </p>
            <p className="text-xs">Task Tracker App — Developer Trainee Task-01 Submission</p>
        </footer>
    );
};

export default Footer;
