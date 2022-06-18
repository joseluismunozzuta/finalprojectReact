import React, { useEffect } from 'react'
import { useCartContext } from "../context/CartContext";
import CartElement from './CartElement';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import {addDoc, collection, getFirestore} from "firebase/firestore";

const Cart = () => {

    const { cart } = useCartContext();

    const { preciototal } = useCartContext();

    const { totalproductos } = useCartContext();

    const {deleteCart} = useCartContext();

    const [cond, setCond] = useState(true);

    const [purchasedcond, setPurchasedcond] = useState(false);

    const { generateClient } = useCartContext();

    const [order, setOrder] = useState({});

    useEffect(() => {

        if (cart.length === 0) {
            console.log("No hay productos");
            console.log(preciototal);
            setCond(false);
        } else {
            console.log("Hay productos");
            console.log(cart);
            const buyer = {};
            setOrder(createOrder(order, buyer, cart, preciototal));
            console.log("el objeto order es: ");
            console.log(order);
            console.log("El precio de la orden es: ");
            console.log(preciototal);
        }
    }, [cart])

    function createOrder(o, b, finalcart, totalamount) {
        o.products = finalcart;
        o.buyer = createBuyer(b);
        o.totalamount = totalamount;
        o.date = getFullDate();
        return o;
    }

    function createBuyer(b) {
        b.name = generateClient();
        b.phone = "998776554";
        b.email = "email@gmail.com";
        return b;
    }

    function getFullDate() {
        let today = new Date();
        let date = today.getFullYear() + '-' + formatearTime(today.getMonth() + 1) + '-' + formatearTime(today.getDate());
        let time = formatearTime(today.getHours()) + ":" + formatearTime(today.getMinutes()) + ":" + formatearTime(today.getSeconds());
        let dateTime = date + ' ' + time;
        console.log(dateTime);
        return dateTime;
    }

    function formatearTime(time) {
        return time < 10 ? (`0${time}`) : time;
    }

    function setOrderid(idString){
        order.id = idString;
        setOrder(order);
        setPurchasedcond(true);
        console.log(order);
        deleteCart();
    }

    function sendOrderToFirestore(order){
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => setOrderid(id));
    }

    const handleSubmitPurchase = () => {
        sendOrderToFirestore(order);
    }

    return (
        <>  
        {purchasedcond && <div>
                <div class="hero min-h-screen" id="purchased">
                    <div class="hero-overlay bg-opacity-80"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md content-center-colum">
                            <h1 class="mb-3 text-4xl font-bold text-light">You've successfully purchased your order with ID:</h1>
                            <span class="badge rounded-pill bg-primary px-2 pb-4 fs-6">{order.id}</span>
                            <Link to={'/'}><button class="btn btn-warning fw-bold text-capitalize mt-2">Go back to index</button></Link>
                        </div>
                    </div>
                </div>
            </div>}
        {!cond && !purchasedcond &&
            <div>
                <div class="hero min-h-screen" id="noProds">
                    <div class="hero-overlay bg-opacity-80"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-3 text-5xl font-bold text-light">Your cart is still empty!</h1>
                            <Link to={'/'}><button class="btn btn-warning fw-bold text-capitalize mt-2">Go back to index</button></Link>
                        </div>
                    </div>
                </div>
            </div>}
            {cond && !purchasedcond && <div class="bg-gray-900 text-light text-center fw-bold fs-1 mt-16"><span class="badge bg-info rounded-pill pb-5 my-2 text-dark">My Cart</span></div>}
            {cond && !purchasedcond &&
                <div class="container-fluid">
                    <div class="row bg-gray-900 justify-content-center">
                        <div class="justify-content-center col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8">
                            {cart.map(e => <CartElement key={e.id} product={e} />)}
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3 bg-gray-900 content-center-colum-start pe-3">
                            <div class="container mt-4 content-center-colum">
                                <div class="row p-3 content-center-colum border border-light w-10/12">
                                    <h1 class="text-4xl font-bold text-light text-center">Order Detail</h1>
                                    <ul class="text-start text-light">
                                        {cart.map(e => <li class="text-info fw-bold" key={e.id}>{e.quantity} items of {e.name}</li>)}
                                    </ul>
                                    <h4 class="text-warning text-center fs-5">You have a total of {totalproductos} items in this order.</h4>
                                    <h1 class="text-2xl text-light text-center mt-3 fw-bold">Order Total Amount</h1>
                                    <div class="bg-gray-900 text-light text-center fw-bold fs-1 mt-1">
                                        <span class="badge rounded-pill bg-danger text-dark pb-5 my-2">{preciototal} PEN</span>
                                    </div>
                                    <div class="content-center-colum">
                                        <button type="button" class="btn btn-success badge text-center mt-1 text-capitalize fs-4" onClick={()=>handleSubmitPurchase()}>Complete purchase</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Cart