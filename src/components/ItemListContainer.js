import ItemDetail from './ItemDetail'
import { useAppContext } from "../context/AppContext";
import Welcome from './Welcome';

const ItemListContainer = () => {

    const { products } = useAppContext();

    return (
        <>
            <Welcome></Welcome>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <h1 class="text-center m-3">Lista de celulares</h1>
                    <div class="tooltip tooltip-open tooltip-primary my-5" data-tip="HOLAAAA">
                        <button class="btn btn-primary text-dark">HOLAAAA</button>
                    </div>
                    {products.map(p => <ItemDetail key={p.id} product={p} />)}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer