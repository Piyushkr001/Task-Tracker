import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Corrected import

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const isAdminLoggedIn = localStorage.getItem("admin_logged_in");

        if (!isAdminLoggedIn) {
            navigate("/admin");
            return;
        }

        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/admin/users");
                setUsers(response.data.users);
                setTotalUsers(response.data.users.length);
            } catch (err) {
                setError("Failed to fetch users.");
            }
        };

        fetchUsers();
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-100 py-12 px-4">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-cyan-200">
                <h1 className="text-4xl font-bold text-center text-cyan-700 mb-2">Welcome, Admin</h1>
                <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">User Dashboard</h2>

                {error && <p className="text-red-500 text-center font-medium mb-4">{error}</p>}

                <p className="text-xl text-center text-cyan-800 font-semibold mb-6">
                    Total Registered Users: <span className="text-cyan-600 font-bold">{totalUsers}</span>
                </p>

                {users.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm border border-gray-300 shadow-sm rounded">
                            <thead>
                                <tr className="bg-cyan-600 text-white text-left">
                                    <th className="py-3 px-4 border-b">Name</th>
                                    <th className="py-3 px-4 border-b">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user._id} className="hover:bg-gray-100 transition">
                                        <td className="py-3 px-4 border-b">{user.name}</td>
                                        <td className="py-3 px-4 border-b">{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-600 font-medium mt-4">
                        No users registered yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
