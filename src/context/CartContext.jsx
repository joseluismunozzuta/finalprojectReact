import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const nombres = ["Jose", "Luis", "Cesar", "Eric", "Marce", "Alexis", "Diego"];
const apellidos = ["Munoz", "Estela", "Benites", "Pacheco", "Santos", "Lucas", "Zuta"];

const CartContextProvider = ({children}) => {

    //Logica
    const [cart, setCart] =  useState([]);
    const [totalproductos, setTotalproductos] = useState(0);
    const [preciototal, setPreciototal] = useState(0);

    //Validar si el item esta en el carrito
    const isInCart = (id) => cart.find(prod => prod.id === id)

    //Agregar item al carrito
    const addToCart = (producto, cantidad) => {

        const newCart = [...cart];
        const productoInCart = isInCart(producto.id);

        let sum = totalproductos+cantidad;
        let thisAmount = producto.price * cantidad;

        if(productoInCart){

            console.log("Ya estaba en el carrito");

            if(!(producto.quantity >= producto.stock)){
                newCart[newCart.findIndex((prod) => prod.id === productoInCart.id)].quantity += cantidad;
                setTotalproductos(sum);
                setPreciototal(preciototal + thisAmount);
                setCart(newCart);
                return
            }else{
                return
            }

        }
        setTotalproductos(sum);
        setPreciototal(preciototal + thisAmount);
        producto.quantity = cantidad;
        setCart([...newCart, producto]);
    }

    const generateClient = () => {
        return nombres[(Math.floor((Math.random() * 6) + 1))] + " " + apellidos[(Math.floor((Math.random() * 6) + 1))];
    }

    //Disminuir item al carrito
    const lessProductFromCart = (producto, cantidad) => {

        if(producto.quantity > 0){
            setTotalproductos(totalproductos-cantidad);
        
            const newCart = [...cart]
            
            const productoInCart = isInCart(producto.id)
    
            if(productoInCart){

                const searchedProd = newCart[newCart.findIndex((prod) => prod.id === productoInCart.id)];

                searchedProd.quantity -= cantidad;

                if(searchedProd.quantity === 0){
                    console.log("trace delete");
                    deleteFromCart(producto);
                }else{
                    setCart(newCart);
                }
                setPreciototal(preciototal - producto.price);
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
        setTotalproductos(0);
        setPreciototal(0);
    }

    return <CartContext.Provider value={{
        cart,
        totalproductos,
        preciototal,
        addToCart, 
        setCart,
        deleteCart, 
        deleteFromCart,
        lessProductFromCart,
        generateClient
    }}> {children} </CartContext.Provider>
}

export default CartContextProvider