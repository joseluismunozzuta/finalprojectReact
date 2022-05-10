import React from 'react'

const ItemDetail = ({product}) => {
    return (
    <>
            <div class="card" style={{width:'18rem'}}>
                <img src={product.thumbnail} class="card-img-top" alt="" style={{width: '300px', height: '300px' }}/>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.price} $</p>
                    <a href="#" class="btn btn-primary">Comprar</a>
                </div>
            </div>
    </>
    )
}

export default ItemDetail;