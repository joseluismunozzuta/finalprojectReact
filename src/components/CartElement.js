import React from 'react'
import { useCartContext } from "../context/CartContext";

const CartElement = ({ product }) => {

    const { lessProductFromCart } = useCartContext();
    const { addToCart } = useCartContext();

    const handleLessClick = (product, cantidad) => {
        lessProductFromCart(product, cantidad);
    }

    const handleAddClick = (product, cantidad) => {
        addToCart(product, cantidad);
    }

    return (
        <>
            <div class="hero min-h-fit bg-base-100 py-4">
                <div class="hero-content flex-col flex-row">
                    <div class="justify-content-center w-1/2">
                        <img src={product.thumbnail} class="w-80 rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div class="justify-content-center w-10/12">
                        <h1 class="text-5xl font-bold text-light">{product.title}</h1>
                        <div class="row mt-4 w-1/4">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 my-1">
                            <span class="fs-6 text-light fw-bold">Stock: </span><span class="badge rounded-pill bg-danger pb-3">{product.stock} items</span>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 content-center-colum">
                                <button class="btn btn-outline fw-bold text-light" onClick={() => handleLessClick(product, 1)}>-</button>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center content-center-colum">
                                <div class="text-lg badge rounded-pill badge-secondary">Cantidad: {product.quantity}</div>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 content-center-colum">
                                <button class="btn btn-outline btn-accent text-light fw-bold" onClick={() => handleAddClick(product, 1, product.stock)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartElement