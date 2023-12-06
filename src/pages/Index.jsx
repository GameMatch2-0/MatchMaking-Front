import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"
import '../css/index.css'
import perfil from '../assets/perfil.png'
import mural from '../assets/mural.png'
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <div className="index-banner">
                <h5>Deslize, jogue, conecte-se!</h5><h2>Conectando jogadores, construindo amizades e explorando novos mundos juntos.</h2>

                <button className="btn-conectar" onClick={() => navigate("/cadastro")}>Conectar</button>
            </div>

            <div className="index-secao2">
                <div className="about-section">
                    <div className="left">
                        <img src={perfil} alt="" />
                    </div>

                    <div className="right">
                        <div>
                            <div className="title">Conheça pessoas com gostos iguais aos seus!</div>
                            <hr className="line"></hr>
                        </div>
                        <p className="about-text">Encontre jogadores confiaveis com gostos iguais aos seus,
                            joguem juntos e desenvolvam uma ótima amizade.</p>
                    </div>
                </div>

            </div>
            <div className="index-secao3">
                <div className="mural-section">
                    <div className="left">
                        <div>
                            <div className="title">Deixe seu perfil com sua cara!</div>
                            <hr className="line"></hr>
                        </div>
                        <p className="about-text">Personalize seu perfil da forma que quiser, mude as cores, jogos favoritos e gostos. Mostre ao mundo quem você é de verdade.</p>

                    </div>

                    <div className="right">
                        <img src={mural} alt="" />
                    </div>
                </div>

            </div>

            <div className="footer-div">
                <Footer />
            </div>
        </>
    )
}