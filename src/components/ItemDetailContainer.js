import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
    
        fetch(URL)
            .then( response => response.json() )
            .then( data => {
                data.results.forEach(element => {
                })
                setProducts(data.results);
            })
    
    }

    return (
        <>
            <div class="row justify-content-center">
                {products.map( p => <ItemDetail key={p.url} product = {p}/>)}
            </div>
        </>
        
    )
}

export default ItemDetailContainer