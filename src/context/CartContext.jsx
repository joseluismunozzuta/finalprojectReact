import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

    //Logica

    const [cart, setCart] =  useState([]);
    const [totalProductos, setTotalProductos] = useState(0);

    //Validar si el item esta en el carrito
    const isInCart = (id) => cart.find(prod => prod.id === id)

    //Agregar item al carrito
    const addToCart = (producto, cantidad) => {

        const newCart = [...cart]
        
        const productoInCart = isInCart(producto.id)

        if(productoInCart){

            if(!(producto.quantity >= producto.stock)){
                newCart[newCart.findIndex((prod) => prod.id === productoInCart.id)].quantity += cantidad;
                setTotalProductos(totalProductos+cantidad);
                setCart(newCart);
                return
            }else{
                return
            }

        }

        setTotalProductos(totalProductos+cantidad);
        producto.quantity = cantidad;
        setCart([...newCart, producto])
    }

    //Disminuir item al carrito
    const lessProductFromCart = (producto, cantidad) => {

        if(producto.quantity > 0){
            setTotalProductos(totalProductos-cantidad);
        
            const newCart = [...cart]
            
            const productoInCart = isInCart(producto.id)
    
            if(productoInCart){

                const searchedProd = newCart[newCart.findIndex((prod) => prod.id === productoInCart.id)];

                searchedProd.quantity -= cantidad;

                if(searchedProd.quantity === 0){
                    deleteFromCart(producto);
                }else{
                    setCart(newCart);
                }
                    
                return
            }        
        }
    }

    //Eliminar carrito
    const deleteFromCart = (producto) => {
        const newCart= [...cart];
        const productIsInCart = isInCart(producto.id);
        if(!productIsInCart){
            console.log("El producto no esta en el carrito");
            return 
        }
        const deleteProduct = newCart.filter((prod) => prod.id !== producto.id)
        setCart(deleteProduct);
    }

    const deleteCart = () => {
        setCart([]);
        setTotalProductos(0);
    }

    return <CartContext.Provider value={{
        cart,
        totalProductos, 
        addToCart, 
        setCart,
        deleteCart, 
        deleteFromCart,
        lessProductFromCart
    }}> {children} </CartContext.Provider>
}

export default CartContextProvider