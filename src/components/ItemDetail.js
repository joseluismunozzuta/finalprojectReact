import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({product, stock, initial}) => {

    const [cond, setCond] = useState(true);
    const [cuenta, setCuenta] = useState(1);

    let maxProducts = stock;

    const onAdd = () => {
        if(!(cuenta >= maxProducts)){
            setCuenta(cuenta+1);
        }else{
            console.log("Se alcanzo max stock");
        }
    }

    const onLess = () => {
        if(!(cuenta <= initial)){
            setCuenta(cuenta-1);
        }
    }

    const toCart = () => {
        setCond(false);
    }

    return (
    <>
            
            <div class="card" style={{width:'18rem'}}>
                <img src={product.thumbnail} class="card-img-top" alt="" style={{width: '300px', height: '300px' }}/>
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.price} $</p>
                    <Link class="btn btn-primary"to={`/item/${product.id}`}>Ver detalle</Link>
                    {cond ? <button class="btn btn-success" onClick={toCart}>Comprar Producto</button> : <br></br>}
                    {cond ? <ItemCount onAdd={onAdd} onLess={onLess} stock='10' initial='1' cuenta={cuenta}/> : <span>Producto agregado al carrito</span>}
                </div>
                
            </div>
    </>
    )
}

export default ItemDetail;