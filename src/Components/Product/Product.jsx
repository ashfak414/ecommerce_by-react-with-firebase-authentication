import React from 'react';
import { Link } from 'react-router';

const Product = (props) => {
    

const {description,title,price,image,id}=props.pdt

    return (
        <div>
             

<div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
    <a href="#">
        <img class="rounded-base" src={image} alt="" />
    </a>
    <a href="#">
        <h5 class="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{title}</h5>
    </a>
    <p class="mb-6 text-body">{description.slice(0,150)}</p>
    <h1>$ {price}</h1>

     <Link to={`/products/${id}`}>
     <button className='bg-orange-700 p-4 rounded '>See More </button>
     
     
     </Link>
</div>

            
        </div>
    );
};

export default Product;