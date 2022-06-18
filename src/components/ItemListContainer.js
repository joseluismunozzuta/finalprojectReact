import ItemDetail from './ItemDetail'
import { useAppContext } from "../context/AppContext";
import Welcome from './Welcome';
import { useEffect } from 'react';

const ItemListContainer = () => {

    let { products } = useAppContext();
    const { brands } = useAppContext();
    const {getProductsFiltering} = useAppContext();
    const {getProducts} = useAppContext();

    useEffect(() => {
        getProducts();
    },[]);

    const handleChange = e => {
        getProductsFiltering(e.target.value);
    }

    return (
        <>
            <Welcome></Welcome>
            <div class="container-fluid">
                <h1 class="text-center m-3">Lista de celulares</h1>
                <div class="row">
                    <label class="ms-5 text-dark fs-6 fw-bold"> Filter by brand:</label>
                    <select class="ms-5 mt-1 border border-dark select w-25 bg-light" onChange={handleChange}>
                        {brands.map(b => {
                            return (<option key={b.value} value={b.value}>{b.text}</option>);
                        })}
                    </select>
                </div>

                <div class="row justify-content-center">
                    {products.map(p => <ItemDetail key={p.id} product={p} />)}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer