import ItemDetail from './ItemDetail'
import { useAppContext } from "../context/AppContext";

const ItemListContainer = () => {

    const { products } = useAppContext();


    return (
        <>  <div class="container-fluid">
                <div class="row justify-content-center">
                    <h1 class="text-center m-3">Lista de celulares</h1>
                    {products.map(p => <ItemDetail key={p.url} product={p} />)}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer