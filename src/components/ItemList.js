import React, { useEffect } from 'react'
import Item from './Item';

const ItemList = () => {

    const items = ['Asus Gaming TUF 6000', 'Toshiba Satellite', 'Hp Spectre x360', 'Lenovo Thinkpad', 'MSI Gaming 900', 'Dell Inspiron 15'];

    useEffect(() => {
        console.log('[ItemList] Se esta montando el componente');
        console.log('La lista de items es la siguiente: ', items);

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Comienza el timeout");
                if (true) {
                    resolve(items);
                } else {
                    reject('Se rechaza la peticion');
                }
            }, 2000);
        })

        promesa
            .then(result => {
                console.log('La promesa fue satisfecha', result);
            })
            .catch(err => {
                console.log('La promesa fue rechazada', err);
            })
        
        console.log("Se termino de ejecutar la seccion de useEffect");
        
    }, [])


    return (
        <div className="border border-success m-2 p-2">
            <h1>Item list</h1>
            {items.map( (c, i) => <Item name={c} key={i} price='1000'/>)}
        </div>
    )
}

export default ItemList