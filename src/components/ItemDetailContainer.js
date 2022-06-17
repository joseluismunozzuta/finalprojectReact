import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from "../context/AppContext";
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {

    const { productId } = useParams();
    const [productUnique, setProductUnique] = useState({})
    const { products } = useAppContext();


    useEffect(() => {
        setProductUnique(products.find((producto) => producto.id === productId));
    })


    return (
        <>
            <div class="container-fluid mt-16">
                <div class="row min-h-fit">
                    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center fw-bold bg-dark text-light">
                        Product ID: <span class="badge rounded-pill bg-success px-2 pb-3 m-1">{productUnique.id}</span>
                    </div>
                </div>
            </div>

            <div class="hero min-h-max bg-base-100 py-5">
                <div class="hero-content flex-col flex-row">
                    <div class="justify-content-center w-1/2">
                        <img src={productUnique.thumbnail} class="w-80 rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div class="justify-content-center w-10/12">
                        <span class="badge rounded-pill bg-success px-2 pb-3 mb-1">{productUnique.id}</span>
                        <h1 class="text-5xl font-bold text-light">{productUnique.title}</h1>
                        <h2 class="text-3xl font-bold text-light"><span class="fs-3">Price: </span>{productUnique.price} $</h2>
                        <Link to={'/'}><button class="btn btn-warning mt-2">Volver al catálogo</button></Link>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemDetailContainer