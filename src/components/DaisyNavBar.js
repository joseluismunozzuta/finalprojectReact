import React from 'react'
import CartWidget from './CartWidget'
import {Link} from "react-router-dom"

const DaisyNavBar = () => {
    return (
        <div class="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"><Link to={`/`}>Inicio</Link></a>
                <a className="btn btn-ghost normal-case text-xl"><Link to='/counter'>Contador</Link></a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control m-1">
                    <input type="text" placeholder="Search" className="input input-bordered"/>
                </div>
                <CartWidget/>
                <div className="dropdown dropdown-end">
                    <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt=''/>
                        </div>
                    </label>
                    <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between" href='#'>Profile
                                <span className="badge">Nuevo</span>
                            </a>
                        </li>
                        <li><a>Configuración</a></li>
                        <li><a>Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DaisyNavBar