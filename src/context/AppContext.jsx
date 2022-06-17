import React, { createContext, useContext, useEffect, useState } from 'react'
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        getBrands();
    }, [products])

    const getProducts = () => {
        const db = getFirestore();

        const prodsCollection = collection(db, "items");
        getDocs(prodsCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No se obtuvieron productos");
            } else {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            }
        });
    }

    const getProductsFiltering = (filter) => {
        let filtro = "All";
        if (!(filter.localeCompare(filtro))) {
            getProducts();
        } else {
            const db = getFirestore();
            const q = query(collection(db, "items"), where("brand", "==", filter));
            getDocs(q).then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            });
        }
    }

    const getBrands = () => {

        const db = getFirestore();

        const prodsCollection = collection(db, "items");
        getDocs(prodsCollection).then((snapshot) => {
            if (snapshot.size === 0) {
                console.log("No se obtuvieron productos");
            } else {
                const br = [];
                const last = [];
                last.value = 'All';
                last.text = 'All';
                br.push(last);
                const a = snapshot.docs.map((doc) => ({ text: doc.data().brand, value: doc.data().brand }));
                a.forEach((b) => {
                    if (br.find(x => x.text === b.text)) {
                    } else {
                        const el = [];
                        el.value = b.brand;
                        el.text = b.brand;
                        br.push(b);
                    }
                })
                setBrands(br);
            }
        });
    }

    return <AppContext.Provider value={{
        products,
        brands,
        getProducts,
        getProductsFiltering
    }}>{children}</AppContext.Provider>

}

export default AppContextProvider