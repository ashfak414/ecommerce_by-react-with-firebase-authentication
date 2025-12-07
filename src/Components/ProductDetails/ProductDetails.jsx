import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        alert(`Added ${quantity} item(s) to cart!`);
    };

    const handleOrder = () => {
        navigate(`/products/pro/${product.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                >
                    ← Go Back
                </button>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-96 object-contain"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                    {product.title}
                                </h1>
                                
                                <div className="mb-6">
                                    <span className="text-sm text-gray-500">Category: </span>
                                    <span className="text-lg text-gray-700 capitalize">{product.category}</span>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Description</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-4xl font-bold text-blue-600">
                                            ${product.price}
                                        </span>
                                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
                                            ⭐ {product.rating?.rate || 'N/A'} 
                                            <span className="text-sm ml-1">({product.rating?.count || 0} reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quantity & Actions */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Quantity
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                                        >
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-16 h-10 border border-gray-300 rounded-lg text-center font-medium"
                                        />
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={handleAddToCart}
                                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={handleOrder}
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;