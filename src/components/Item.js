import React from 'react'

const Item = (props) => {
    return (
        <div>
            <h1 className='text-2xl'><b>This is a product</b></h1>
            <h2>Name: {props.name}</h2>
            <h3>Price: {props.price} $</h3>
        </div>
    )
}

export default Item