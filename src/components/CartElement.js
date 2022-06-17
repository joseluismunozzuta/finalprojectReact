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
            <div class="min-h-fit bg-dark py-4 content-center-colum">
                <div class="row justify-content-center w-1/2">
                    <div class="justify-content-center col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 content-center-colum">
                        <img src={product.imgUrl} class="card-img-top w-auto rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div class="justify-content-center col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8 bg-gray-900 rounded-3 py-2 h-fit">
                        <h1 class="text-5xl font-bold text-light">{product.name}</h1>
                        <div class="row mt-4 w-1/2">
                            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 my-1">
                                <span class="fs-6 text-light fw-bold">Stock: </span><span class="badge rounded-pill bg-danger pb-3">{product.stock} items</span>
                            </div>
                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 content-center-colum">
                                <button class="btn btn-outline fw-bold text-light" onClick={() => handleLessClick(product, 1)}>-</button>
                            </div>
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 text-center content-center-colum">
                                <div class="text-lg badge rounded-pill badge-secondary pb-3">Cantidad: {product.quantity}</div>
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