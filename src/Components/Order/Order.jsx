import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate();
    const product = useLoaderData();
    const [formData, setFormData] = useState({
        productName: product.title,
        price: product.price,
        customerName: '',
        address: '',
        contact: '',
        quantity: 1,
        paymentMethod: 'credit-card'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.customerName || !formData.address || !formData.contact) {
            alert('Please fill in all fields');
            return;
        }
        alert(`✓ Order Confirmed!\n\nProduct: ${formData.productName}\nQuantity: ${formData.quantity}\nTotal: $${(formData.price * formData.quantity).toFixed(2)}\nName: ${formData.customerName}\nAddress: ${formData.address}\nContact: ${formData.contact}`);
        navigate('/products');
    };

    const totalPrice = (product.price * formData.quantity).toFixed(2);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                >
                    ← Go Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Order Summary */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="mb-6">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    className="w-full h-48 object-contain rounded-lg bg-gray-100 p-4 mb-4"
                                />
                                <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                                    {product.title}
                                </h3>
                            </div>

                            <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                                <div className="flex justify-between text-gray-600">
                                    <span>Unit Price:</span>
                                    <span className="font-medium">${product.price}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Quantity:</span>
                                    <span className="font-medium">{formData.quantity}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal:</span>
                                    <span className="font-medium">${totalPrice}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-4">
                                <span className="text-lg font-bold text-gray-900">Total:</span>
                                <span className="text-3xl font-bold text-blue-600">${totalPrice}</span>
                            </div>
                        </div>
                    </div>

                    {/* Order Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Details</h2>

                            <div className="space-y-6">
                                {/* Product Info Section */}
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-900 mb-4">Product Information</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Product Name
                                            </label>
                                            <input
                                                type="text"
                                                name="productName"
                                                value={formData.productName}
                                                disabled
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-600"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Price
                                            </label>
                                            <input
                                                type="text"
                                                name="price"
                                                value={`$${formData.price}`}
                                                disabled
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-600"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Quantity
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                                            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            name="quantity"
                                            min="1"
                                            value={formData.quantity}
                                            onChange={handleChange}
                                            className="w-16 h-10 border border-gray-300 rounded-lg text-center font-medium"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                                            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Customer Details Section */}
                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Your Information</h3>
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="customerName"
                                                value={formData.customerName}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Address *
                                            </label>
                                            <textarea
                                                name="address"
                                                value={formData.address}
                                                onChange={handleChange}
                                                placeholder="123 Main Street, City, State ZIP"
                                                rows="3"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Contact Number *
                                            </label>
                                            <input
                                                type="tel"
                                                name="contact"
                                                value={formData.contact}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 123-4567"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Payment Method */}
                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                                    <select
                                        name="paymentMethod"
                                        value={formData.paymentMethod}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    >
                                        <option value="credit-card">Credit Card</option>
                                        <option value="debit-card">Debit Card</option>
                                        <option value="paypal">PayPal</option>
                                        <option value="bank-transfer">Bank Transfer</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 text-lg"
                                >
                                    Confirm Order (${totalPrice})
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;