import React from 'react'

const ItemListContainer = ({children}) => {
    return (
        <div style={{border: 'solid 3px black'}} className="p-2 m-2">
            {children}
        </div>
    )
}

export default ItemListContainer