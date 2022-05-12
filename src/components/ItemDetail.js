import React from 'react'
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({product}) => {

    return (
    <>
            <div class="card" style={{width:'18rem'}}>
                <img src={product.thumbnail} class="card-img-top" alt="" style={{width: '300px', height: '300px' }}/>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.price} $</p>
                    <Link class="btn btn-primary"to={`/item/${product.id}`}>Comprar</Link>
                </div>
            </div>
    </>
    )
}

export default ItemDetail;