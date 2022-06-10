import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useCartContext } from "../context/CartContext";

const ItemCount = ({initial, stock, id, addedToCart}) => {

    const [cuenta, setCuenta] = useState(0);

    const { addToCart } = useCartContext();
    const {products} = useAppContext();

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

    const handleClick = (id, cantidad ) => {
        const findProduct = products.find( (producto) => producto.id === id)

        if (!findProduct){
            alert("No se encontro el producto")
            return
        }

        addToCart(findProduct, cantidad);
        addedToCart();
    }

    return (
        <>
            <strong>Stock: {stock}</strong>
            <strong>Minimum amount of items: {initial}</strong>
            <br></br>
            <div class="row justify-content-center">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                    <button type="button" className="btn btn-danger" onClick={onLess}>-</button>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 border border-dark text-center">
                    <strong>{cuenta} items</strong>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                    <button type="button" className="btn btn-success" onClick={onAdd}>+</button>
                </div>
                <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 mt-2 content-center-colum">
                    <button type="button" className="btn btn-info fw-bold" onClick={() => handleClick(id,cuenta)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;