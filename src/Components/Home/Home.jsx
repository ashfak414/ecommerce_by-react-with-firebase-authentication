import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const { user } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Welcome to Our Store
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">
                            Discover quality products at amazing prices
                        </p>
                        {!user ? (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                                    Sign In
                                </Link>
                                <Link to="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                                    Create Account
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/products" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                                    Shop Now
                                </Link>
                                <Link to="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200">
                                    View Profile
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-8 rounded-lg bg-blue-50 border border-blue-100">
                            <div className="text-4xl mb-4">🚚</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
                            <p className="text-gray-600">Quick and reliable shipping to your doorstep</p>
                        </div>
                        <div className="text-center p-8 rounded-lg bg-indigo-50 border border-indigo-100">
                            <div className="text-4xl mb-4">💯</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Assured</h3>
                            <p className="text-gray-600">All products are quality checked before delivery</p>
                        </div>
                        <div className="text-center p-8 rounded-lg bg-purple-50 border border-purple-100">
                            <div className="text-4xl mb-4">🔒</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Secure Payments</h3>
                            <p className="text-gray-600">Your payment information is safe with us</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600">1000+</div>
                            <div className="text-gray-600">Products</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-indigo-600">50K+</div>
                            <div className="text-gray-600">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600">24/7</div>
                            <div className="text-gray-600">Customer Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-pink-600">100%</div>
                            <div className="text-gray-600">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {user ? (
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Shop?</h2>
                        <p className="text-xl text-blue-100 mb-8">Browse our exclusive collection of products</p>
                        <Link to="/products" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-200">
                            Browse Products
                        </Link>
                    </div>
                </section>
            ) : (
                <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Join Our Community</h2>
                        <p className="text-xl text-blue-100 mb-8">Sign up today and get exclusive deals on your first purchase</p>
                        <Link to="/register" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition duration-200">
                            Create Account
                        </Link>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Home;