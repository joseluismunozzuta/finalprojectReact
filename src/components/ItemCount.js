import { useState } from "react";

const ItemCount = ({onAdd, onLess, cuenta, initial, stock}) => {

    return (
        <>
            <strong>Maxium stock of products: {stock}</strong>
            <br></br>
            <strong>Minimum amount of items: {initial}</strong>
            <button type="button" className="btn btn-danger" onClick={onLess}>-</button>
            <strong>{cuenta} items</strong>
            <button type="button" className="btn btn-success" onClick={onAdd}>+</button>
        </>
    )
}

export default ItemCount;