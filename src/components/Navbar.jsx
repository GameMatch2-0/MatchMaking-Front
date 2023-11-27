import "../css/navbar.css"

export default function Navbar() {
    return (
        <>

            <nav>
                <div className="esquerda"><h2>MatchMaking</h2></div>
                <div className="direita">
                    <ul>
                        <li>Planos</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <button className="btn-entrar">Entrar</button>
                    </ul>



                </div>
            </nav>
        </>
    )
}