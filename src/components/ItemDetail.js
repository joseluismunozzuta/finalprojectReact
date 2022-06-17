import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {

    const [cond, setCond] = useState(true);

    const toCart = () => {
        setCond(false);
    }

    return (
        <>
            <div class="card m-2" style={{ width: '18rem' }}>
                <img src={product.thumbnail} class="card-img-top" alt="" style={{ width: '300px', height: '300px' }} />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">Precio: {product.price} $</p>
                    <div class="row justify-content-center">
                        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10 col-10 content-center-colum">
                            <Link class="btn btn-warning fw-bold text-capitalize p-2" to={`/item/${product.id}`}>Ver más</Link>
                        </div>
                    </div>
                    {cond ? <ItemCount stock='10' initial='0' id={product.id} addedToCart={toCart} /> :
                        <div className='content-center-colum'>
                            <span class="text-center fw-bold">Producto agregado al carrito</span><Link to={'/cart'}><button type="button" class="btn btn-primary position-relatie m-1">Terminar mi compra</button></Link>
                        </div>}
                </div>
            </div>
        </>
    )
}

export default ItemDetail;