import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemUniqueId = () => {

    const {productId} = useParams();
    const [productUnique, setProductUnique] = useState({})


    useEffect(() => {
        getProducts()
        console.log(productId)

    }, [])

    const getProducts = () => {
        const URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
    
        fetch(URL)
            .then( response => response.json() )
            .then( data => {
                setProductUnique(data.results.find(p => p.id === productId));
            })
    
    }

    return (
        <>
            <div>ItemUniqueId: {productId}</div>
            <li>{productUnique.id}</li>
            <li>{productUnique.title}</li>
        </>
        
    )
}

export default ItemUniqueId 