import { useState } from "react";

const ItemCount = ({stock, initial}) => {
    console.log("Item Count Component initialized");

    const [count, setCount] = useState(1);

    let maxProducts = stock;
    console.log(maxProducts);

    const addHandler = () => {
        if(!(count >= maxProducts)){
            setCount(count+1);
        }
    }

    const reduceItems = () => {
        if(!(count <= initial)){
            setCount(count-1);
        }
    }

    return (
        <>
            <strong>Maxium stock of products: {maxProducts}</strong>
            <br></br>
            <strong>Minimum amount of items: {initial}</strong>
            <div>Item Count</div>
            <button type="button" className="btn btn-danger m-2" onClick={reduceItems}>-</button>
            <strong>{count} items</strong>
            <button type="button" className="btn btn-success m-2" onClick={addHandler}>+</button>
        </>
    )
}

export default ItemCount;