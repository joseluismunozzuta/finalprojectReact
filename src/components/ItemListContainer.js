import React from 'react'

const ItemListContainer = ({children}) => {
    return (
        <div style={{border: 'solid 3px orange'}}>
            {children}
        </div>
    )
}

export default ItemListContainer