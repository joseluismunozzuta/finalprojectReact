import React from 'react'
import "../welcome.css"

const Welcome = () => {
    return (
        <>
        <div class="slider-area mt-4">
            <div class="single-slider hero-overly slider-height d-flex align-items-center" id="backgroundDiv">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-xl-9">
                                <div class="h1-slider-caption">
                                    <h1 data-animation="fadeInUp" data-delay=".4s">the Ultimate Shop</h1>
                                    <h3 data-animation="fadeInDown" data-delay=".4s">The best of tech is here!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default Welcome