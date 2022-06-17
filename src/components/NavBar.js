import { Fragment } from "react";
import {Link} from "react-router-dom"
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import CartWidget from './CartWidget'
import Logo from "../img/logo.jpg";
import { useCartContext } from "../context/CartContext";
import React, { useEffect } from 'react'
import { useState } from 'react'

const navigation = [
    { name: "Inicio", href: "/", current: true },
    { name: "Contacto", href: "#", current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

    const { cart } = useCartContext();

    const [cond, setCond] = useState(true);

    useEffect(() => {
        if (cart.length === 0) {
            setCond(false);
        }else{
            setCond(true);
        }
    },[cart])


    return (
        <Disclosure as="nav" className="bg-gray-800 navbarPersistent">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <img
                                        className="block lg:hidden h-8 w-auto rounded-3"
                                        src={Logo} width="80%"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-16 rounded-3 my-1"
                                        src={Logo} width="100px"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="hidden sm:block sm:ml-6 mt-3">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            ><Link to={item.href}>{item.name}</Link>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {cond && <CartWidget/>}
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={item.current ? "page" : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}