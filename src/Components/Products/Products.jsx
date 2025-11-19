import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Product/Product';


const Products = () => {
    const products=useLoaderData()
     console.log(products)
     
   

   

    
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                products.map(product=><Product pdt={product} ></Product>)

            }
            
        </div>
    );
};

export default Products;