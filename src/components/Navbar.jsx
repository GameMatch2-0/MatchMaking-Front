import "../css/navbar.css"
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>

            <nav>
                <div className="esquerda"><h2>MatchMaking</h2></div>
                <div className="direita">
                    <ul>
                        <li onClick={() => navigate("/planos")}>Planos</li>
                        <li onClick={() => navigate("/sobre")}>Sobre</li>
                        <li onClick={() => navigate("/contato")}>Contato</li>
                        <button className="btn-entrar">Entrar</button>
                    </ul>



                </div>
            </nav>
        </>
    )
}