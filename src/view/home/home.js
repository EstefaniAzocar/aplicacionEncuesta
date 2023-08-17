import React from "react";
// import { getQuestionId } from "../../peticion/getInfo";
import { Link } from "react-router-dom";


import "./home.css"


const Home = () => {
    // console.log(getQuestionId(1))
    return (
        <div className="container">
            <div className="home_container">
            <h1 className="title">SentimSelect</h1>
            <p className="subtitle">Descubre cómo se sienten los candidatos durante el proceso de selección</p>
            <span className="contact-button">
                    <Link  to={'Preguntas'} id='btnLogin' >
                        <div>
                            <span class="bg"></span>
                            <span class="base"></span>
                            <span class="text">ENTRAR</span>
                        </div>
                    </Link>
            </span>   
            </div>
        </div>
        
    )
}

export default Home