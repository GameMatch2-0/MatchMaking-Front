import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx"
import '../css/sobre.css'
import imagem1 from '../assets/img1.png'
import imagem2 from '../assets/img2.png'
import imagem3 from '../assets/img3.png'
import missao from '../assets/missao.png'
import visao from '../assets/visao.png'
import valores from '../assets/valores.png'
import secao4 from '../assets/secao4.png'

export default function Index() {
    return (
        <>
            <Navbar />

            <div className="sobre-banner">
                <div className="sobre-info">
                    <h2>EM BUSCA DE UM MUNDO ONDE TODOS POSSAM SE DIVERTIR</h2>
                    <h1>Trabalhando para construir um lugar seguro, longe de tudo que te oprime, um lugar para que todos possam aproveitar.</h1>
                </div>

            </div>

            <div className="sobre-secao2">
                <div className="sobre-section">
                    <h5>Jornada do herói...</h5>
                    <div className="div-jornada">
                        <div className="div-parte1">
                            <img src={imagem1} alt="" />

                            <div className="div-info">
                                <h1>12/2022</h1>
                                <p>Tinhamos uma missão, um projeto inovador. Aceitamos a quest e começamos com uma simples ideia... rede social para gamers!</p>
                            </div>
                        </div>
                        <div className="div-parte2">
                            <div className="div-info">
                                <h1>07/2023</h1>
                                <p>Após isso, começamos com os trabalhos, e tinhamos na cabeça que enfrentariamos um grande boss... Chamado Sprint.</p>
                            </div>
                            <img src={imagem2} alt="" />
                        </div>
                        <div className="div-parte3">
                            <img src={imagem3} alt="" />
                            <div className="div-info">
                                <h1>09/2023</h1>
                                <p>Sprint tentou nos derrubar, mas conseguimos vencê-lo, apesar de sair com pouco HP, isso nos deixou mais motivados.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <div className="sobre-secao3">
                

                <div className="missao">
                    <img src={missao} alt="" />
                    <h1>Missão</h1>
                    <p>Conectar gamers de todo o mundo que compartilham interesses em comum, proporcionando um ambiente divertido, seguro e respeitoso.</p>
                </div>
                <div className="visao">
                    <img src={visao} alt="" />
                    <h1>Visão</h1>
                    <p>Ser a rede social preferida dos gamers, oferecendo uma plataforma inovadora, dinâmica e personalizada para cada usuário.</p>
                </div>
                <div className="valores">
                    <img src={valores} alt="" />
                    <h1>Valores</h1>
                    <p>Paixão pelos jogos
                        Respeito por cada jogador
                        Compromisso com a qualidade e a segurança
                        Inovação e criatividade</p>
                </div>

            </div>

            <div className="sobre-secao4">
                <img className="img-secao4"src={secao4} alt="" />
            </div>

            <div className="footer-div">
                <Footer />
            </div>
        </>
    )
}