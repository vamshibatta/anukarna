import React from 'react';
import laddu from '../../Images/laddu.jpeg';

function ProductCard(){
    return(
        <>
            <div className='product-card'>
                <img className='product-image' src={laddu}/>
                <p className='product-title'></p>
            </div>
        </>
    )
}

export default ProductCard;