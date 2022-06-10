import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    //Logica

    const [cart, setCart] =  useState([]);

    //Validar si el item esta en el carrito
    const isInCart = (id) => cart.find(prod => prod.id === id)

    //Agregar item al carrito
    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]
        
        const productoInCart = isInCart(producto.id)

        if(productoInCart){
            newCart[newCart.findIndex((prod) => prod.id === productoInCart.id)].quantity += cantidad;

            setCart(newCart);

            return
        }

        producto.quantity = cantidad;
        setCart([...newCart, producto])
        
    }

    //Eliminar carrito
    const deleteFromCart = (producto) => {
        const newCart= [...cart];
        const productIsInCart = isInCart(producto.id);
        if(!productIsInCart){
            return 
        }
        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
        setCart(deleteProduct);
    }

    const deleteCart = () => setCart([])

    console.log(cart);

    return <CartContext.Provider value={{
        cart, 
        addToCart, 
        setCart,
        deleteCart, 
        deleteFromCart
    }}> {children} </CartContext.Provider>
}

export default CartContextProvider