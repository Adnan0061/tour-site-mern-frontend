import React, { useEffect, useState } from 'react';
import useCart from '../../Pages/hooks/useCart';
import { getStoredCart } from '../../utilities/fakedb';

const OffCart = () => {

    const [ cart, setCart ] = useCart()
    // useEffect
    return (
        <div>
            <h2>This of cart</h2>
            {
                console.log(cart[0])
            }
            {
                cart.map(tr => tr.title)
            }
        </div>
    );
};

export default OffCart;