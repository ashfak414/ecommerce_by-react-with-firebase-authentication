import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { description, title, price, image, id } = props.pdt;

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 h-full flex flex-col">
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                    className="w-full h-full object-contain p-4" 
                    src={image} 
                    alt={title}
                />
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
                <h5 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-2 h-14">
                    {title}
                </h5>
                
                <p className="mb-4 text-gray-600 text-sm line-clamp-2 flex-grow">
                    {description.slice(0, 100)}...
                </p>
                
                <div className="flex justify-between items-center mt-auto">
                    <h3 className="text-2xl font-bold text-blue-600">${price}</h3>
                    <Link to={`/products/${id}`}>
                        <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-200'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;