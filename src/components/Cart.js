import React, { useEffect } from 'react'
import { useCartContext } from "../context/CartContext";
import CartElement from './CartElement';
import { useState } from 'react'

const Cart = () => {

    const { cart } = useCartContext();

    const [cond, setCond] = useState(true);

    useEffect(() => {
        if (cart.length === 0) {
            console.log("No hay productos");
            setCond(false);
        }else{
            console.log("Hay productos");
            console.log(cart);
        }
    },[cart])

    return (
        <>  <div class="bg-dark text-light text-center fw-bold fs-1">My cart</div>
            {cond ? cart.map(e => <CartElement key={e.id} product={e} />) : <div>No tengo productos en el carrito</div>}
        </>
    )
}

export default Cart