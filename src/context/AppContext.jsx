import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const URL = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';

        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProducts(data.results);
            })
    }

    return <AppContext.Provider value={{products}}>{children}</AppContext.Provider>

}

export default AppContextProvider