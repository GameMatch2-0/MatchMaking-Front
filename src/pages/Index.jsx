import Navbar from "../components/Navbar.jsx";
import '../css/index.css'
import perfil from '../assets/perfil.png'

export default function Index() {
    return (
        <>
            <Navbar />

            <section className="index-banner">

            </section>

            <section className="index-secao2">
                <div className="esquerda">
                    <img src={perfil} alt="" />
                </div>

                <div className="direita">
                    <h3>Conheça pessoas com gostos iguais aos seus!</h3>
                    <p>Encontre jogadores confiaveis com gostos iguais aos seus, joguem juntos e desenvolvam uma ótima amizade.</p>
                </div>
            </section>
        </>
    )
}