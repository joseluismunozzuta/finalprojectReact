import React from 'react'
import Logo from "../img/logo.jpg";
import LogoFacebook from "../img/logofb.jpg"
import LogoInsta from "../img/logoinsta.jpg"
import LogoTiktok from "../img/logotiktok.jpg"
import LogoYoutube from "../img/logoyoutube.jpg"
import { Link } from 'react-router-dom'
import "../footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-area footer-padding" style={{backgroundColor:'rgb(31 41 55)'}}>
                    <div class="container">
                        <div class="row d-flex justify-content-between">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 centradoFlexMdXs">
                                <div class="single-footer-caption mb-30">
                                    <div class="footer-logo centradoFlexMdXs">
                                        <a href="./index.html"><img class="rounded-3" src={Logo} alt="" /></a>
                                    </div>
                                    <div class="footer-social footer-social2 centradoFlexMdXs">
                                        <a href="#"><img src={LogoFacebook} class="logonw" alt="" /></a>
                                        <a href="#"><img src={LogoInsta} class="logonw" alt=""  /></a>
                                        <a href="#"><img src={LogoTiktok} class="logonw" alt="" /></a>
                                        <a href="#"><img src={LogoYoutube} class="logonw" alt="" /></a>
                                    </div>
                                    <div class="footer-pera centradoFlexMdXs text-center">
                                        <p class="text-center">Copyright &copy; 2022 Todos los derechos reservados | Hecho por: Jose Muñoz</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 centradoFlexMdXs">
                                <div class="mb-30">
                                    <div class="footer-tittle">
                                        <h4>Links útiles</h4>
                                        <ul>
                                            <li><Link to={"/"}><a>Lista de productos</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 centradoFlexMdXs mb-1">
                                <div class="single-footer-caption mb-30">
                                    <div class="footer-tittle">
                                        <h4>Contacto</h4>
                                        <ul>
                                            <li><a href="#">Tel: 345 5667 889</a></li>
                                            <li><a href="#">ultimatestore@gmail.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 centradoFlexMdXs mb-1">
                                <div class="single-footer-caption mb-30">
                                    <div class="footer-tittle">
                                        <h4>Nuestra ubicación</h4>
                                        <ul>
                                            <li><a target="_blank" href="https://goo.gl/maps/hrJgTrmSw6aE5H6n9">1608 S Washington St, Beeville, TX 78102, USA</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer