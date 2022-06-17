import React, { useEffect } from 'react'
import { useCartContext } from "../context/CartContext";
import CartElement from './CartElement';
import { useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart } = useCartContext();

    const [cond, setCond] = useState(true);

    useEffect(() => {
        if (cart.length === 0) {
            console.log("No hay productos");
            setCond(false);
        } else {
            console.log("Hay productos");
        }
    }, [cart])

    return (
        <>
            {cond && <div class="bg-dark text-light text-center fw-bold fs-1 mt-16"><span class="badge bg-info rounded-pill pb-5 my-2 text-dark">My Cart</span></div>}
            {cond ? cart.map(e => <CartElement key={e.id} product={e} />) :
                <div>
                    <div class="hero min-h-screen" id="noProds">
                        <div class="hero-overlay bg-opacity-80"></div>
                        <div class="hero-content text-center text-neutral-content">
                            <div class="max-w-md">
                                <h1 class="mb-3 text-5xl font-bold text-light">Your cart is still empty!</h1>
                                <Link to={'/'}><button class="btn btn-warning fw-bold text-capitalize mt-2">Go back to index</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Cart