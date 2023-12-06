import "../css/navbar.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import LoginModal from '../components/LoginModal';


export default function Navbar() {
    const navigate = useNavigate();

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <>

            <nav>
                <div className="nav-bar">
                    <div className="nav-esquerda"><h2 onClick={() => navigate("/")}>MatchMaking</h2></div>

                    <div className="direita">
                        <ul>
                            <li onClick={() => navigate("/planos")}>Planos</li>
                            <li onClick={() => navigate("/sobre")}>Sobre</li>
                            <li onClick={() => navigate("/contato")}>Contato</li>
                            <button onClick={openModal} className="btn-entrar">Entrar</button>
                            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}