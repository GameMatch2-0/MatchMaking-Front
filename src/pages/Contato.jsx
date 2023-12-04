import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../css/contato.css"
import React from "react";

export default function Contato() {
    return (
        <>
            <Navbar />

       
                <div className="div-contato">
                    <h1>Fale com a gente!</h1>
                    <div className="text-div">
                        <textarea cols="30" rows="10" className="txt-area"></textarea>
                    </div>
                    <button>Enviar</button>
                    <p>Tente também pelo nosso whatsapp: +55 11 95914-7955</p>
                </div>

            <Footer />
        </>
    )
}