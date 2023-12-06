import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import beneficios from "../assets/beneficios.png"
import "../css/planos.css"
import React from "react";

export default function Planos(){
    return(
        <>
        <Navbar />

        <div className="section-planos">
                <div className="planos-div-direita">
                    <h4 className="planos-info">MatchMaking Premium, mais liberdade para você ser quem quiser!</h4>
                    <h1>Teste por 1 mês GRATIS - Depois R$19,90</h1>
                    <button>Assinar</button>
                    <p>Vamos enviar um lembrete 7 dias antes de o teste terminar. Faturamento recorrente.</p>
                </div>
                <div className="planos-div-esquerda">
                    <img src={beneficios} alt="" />
                </div>
            </div>
        <Footer />
        </>
    )
}