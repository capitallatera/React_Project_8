import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from "./context";


const Hero=()=>{
    const { closeSubMenu}=useGlobalContext()
    return (
        <section className="hero" onMouseOver={closeSubMenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>Payments infrastructure for the internet</h1>
                    <p>
                        Millions of companies of all sizes-from startups to Forutne 500x-use 
                        Stipe's software and API's to accept payments, send payments, and manage their businesses online
                    </p>
                    <button className="btn">Start now</button>
                </article>
                <article className="hero-images">
                    <img src={phoneImg} className="phone-img" alt="phone-img"/>

                </article>
            </div>

        </section>
    )
}
export default Hero;