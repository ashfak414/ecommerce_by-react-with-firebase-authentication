import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
                    <p className="text-xl text-gray-600">Learn more about our company and mission</p>
                </div>

                {/* Company Overview */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Founded in 2020, our company has been committed to providing high-quality products 
                        and exceptional customer service. We started with a simple vision: to make quality 
                        products accessible to everyone, everywhere.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Over the years, we have grown to serve thousands of happy customers across the globe, 
                        and we continue to expand our product range and improve our services.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-blue-50 rounded-lg shadow-lg p-8 border border-blue-100">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700">
                            To provide high-quality products at competitive prices while maintaining 
                            excellent customer service and building long-term relationships with our customers.
                        </p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg shadow-lg p-8 border border-indigo-100">
                        <h3 className="text-2xl font-bold text-indigo-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700">
                            To become a leading online retailer known for quality, reliability, and 
                            customer satisfaction across the world.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">⭐</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Quality</h4>
                            <p className="text-gray-600">We ensure every product meets our high standards</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Integrity</h4>
                            <p className="text-gray-600">We believe in honest and transparent business</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">💡</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                            <p className="text-gray-600">We constantly improve our products and services</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Our dedicated team of professionals works tirelessly to ensure that every customer 
                        receives the best experience possible. From product sourcing to delivery, we're 
                        committed to excellence at every step of the journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;