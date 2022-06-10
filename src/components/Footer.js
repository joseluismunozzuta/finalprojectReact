import React from 'react'
import Logo from "../img/logo.jpg";
import LogoFacebook from "../img/logofb.jpg"
import LogoInsta from "../img/logoinsta.jpg"
import LogoTiktok from "../img/logotiktok.jpg"
import LogoYoutube from "../img/logoyoutube.jpg"
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
                                        <a href="./index.html"><img src={Logo} alt="" /></a>
                                    </div>
                                    <div class="footer-social footer-social2 centradoFlexMdXs">
                                        <a href="#"><img src={LogoFacebook} class="logonw" alt="" /></a>
                                        <a href="#"><img src={LogoInsta} class="logonw" alt=""  /></a>
                                        <a href="#"><img src={LogoTiktok} class="logonw" alt="" /></a>
                                        <a href="#"><img src={LogoYoutube} class="logonw" alt="" /></a>
                                    </div>
                                    <div class="footer-pera centradoFlexMdXs">
                                        <p>Copyright &copy; 2022 
                                            Todos los derechos reservados | Hecho por: Jose Muñoz</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12 centradoFlexMdXs">
                                <div class="mb-30">
                                    <div class="footer-tittle">
                                        <h4>Links útiles</h4>
                                        <ul>
                                            <li><a href="#">Lista de productos</a></li>
                                            <li><a href="#">Ofertas</a></li>
                                            <li><a href="#">Foro</a></li>
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
                                            <li><a target="_blank" href="https://www.google.com/maps/place/Hotel+La+Hacienda+Bah%C3%ADa+Paracas/@-13.8481744,-76.2629696,14.38z/data=!4m8!3m7!1s0x911062dcd94eb1b7:0xb304c6196ede625!5m2!4m1!1i2!8m2!3d-13.8553751!4d-76.2511716">Lote 25 Urbanización, Paracas, Perú</a></li>
                                        </ul>
                                        <div class="centradoFlexMdXs">
                                            <img src={Logo} alt="" style={{width:'95%'}} />
                                        </div>
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