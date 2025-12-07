import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const products = useLoaderData();

    return (
        <div className='min-h-screen bg-gray-50 py-12 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='mb-12'>
                    <h1 className='text-4xl font-bold text-gray-900 mb-4'>Our Products</h1>
                    <p className='text-gray-600 text-lg'>Discover our wide selection of quality products</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {products.map(product => (
                        <Product key={product.id} pdt={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;