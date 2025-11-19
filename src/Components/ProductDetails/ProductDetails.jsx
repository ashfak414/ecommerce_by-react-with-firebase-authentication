import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {
     const product=useLoaderData()
      console.log(product)
    return (
        <div>
             <h1>This is Product Details Page</h1>
             <h1>{product.title}</h1>
             <p>{product.description}</p>
             <img src={product.image} alt="" />
             <h1>$ {product.price}</h1>
             <Link to={`/products/pro/${product.id}`}>
              <button>Order Now</button></Link>            
        </div>
    );
};

export default ProductDetails;