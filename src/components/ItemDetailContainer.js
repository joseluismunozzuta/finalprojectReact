import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from "../context/AppContext";


const ItemDetailContainer = () => {

    const {productId} = useParams();
    const [productUnique, setProductUnique] = useState({})
    const {products} = useAppContext();


    useEffect(() => {
        setProductUnique(products.find( (producto) => producto.id === productId));
    })


    return (
        <>
            <div class="row justify-content-center">
                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 text-center fw-bold">
                    Id of the selected product: {productId}
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                    <li>ID: {productUnique.id}</li>
                    <li>Title: {productUnique.title}</li>
                    <img src={productUnique.thumbnail} class="card-img-top" alt="" style={{width: '300px', height: '300px' }}/>
                </div>
            </div>
        </>
        
    )
}

export default ItemDetailContainer