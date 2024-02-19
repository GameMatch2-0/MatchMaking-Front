import "../css/footer.css"
import insta from '../assets/insta.png'
import twitter from '../assets/twitter.png'
import face from '../assets/face.png'


export default function Footer() {
    return (
        <>
            <footer>
                <div className="div-footer">
                    <div className="esquerda"><h4>MatchMaking</h4>
                        <div className="div-links">
                            <div className="esquerda-produtos">
                                <h2>Produtos</h2>
                                <p>App</p>
                                <p>Planos</p>
                            </div>
                            <div className="esquerda-aprender">
                                <h2>Aprender</h2>
                                <p>Jogos</p>
                                <p>Saúde</p>
                            </div>
                            <div className="esquerda-mais">
                                <h2>Mais da MatchMaking</h2>
                                <p>Jornada</p>
                                <p>Contato</p>
                            </div>
                        </div>
                    </div>

                    <div className="meio">
                        <p className="copyright">©2023</p>
                    </div>

                    <div className="direita">
                        <img src={insta} alt="" className="insta" />
                        <img src={twitter} alt="" className="twitter" />
                        <img src={face} alt="" className="face" />
                    </div>
                </div>
            </footer>
        </>
    )
}