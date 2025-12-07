import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
            setIsOpen(false);
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Store</span>
                    </Link>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse">
                        {user ? (
                            <div className="flex items-center space-x-3">
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {user.displayName || user.email}
                                </span>
                                {user.photoURL && (
                                    <img 
                                        src={user.photoURL} 
                                        alt="Profile" 
                                        className="w-8 h-8 rounded-full border-2 border-blue-500"
                                    />
                                )}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-900 dark:text-white hover:underline text-sm"
                                >
                                    ▼
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50" style={{top: '60px'}}>
                                        <Link
                                            to="/dashboard"
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline font-medium">
                                    Login
                                </Link>
                                <Link to="/register" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <Link to="/home" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-900 dark:text-white hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-900 dark:text-white hover:underline">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-900 dark:text-white hover:underline">
                                    Products
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;