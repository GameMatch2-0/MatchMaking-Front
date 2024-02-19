import React, { useState } from 'react';
import '../css/interesses.css'

const JogosModal = ({ isOpen, onClose }) => {
    const [jogosSelecionados, setJogosSelecionados] = useState([]);

    const adicionarOuRemoverJogo = (jogo) => {
        setJogosSelecionados(prevState => {
            if (prevState.includes(jogo)) {
                return prevState.filter(j => j !== jogo);
            } else {
                if (prevState.length < 5) {
                    return [...prevState, jogo];
                } else {
                    return prevState;
                }
            }
        });
    };
    
    const confirmarJogos = () => {
        console.log('jogos selecionados:', jogosSelecionados);

        const jogosEmString = JSON.stringify(jogosSelecionados);    
        localStorage.setItem('jogosFavoritos', jogosEmString);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Escolha até 5 Jogos favoritos.</h2>
                <div className='div-interesses'>
                    {['GTA', 'Roblox', 'League of Legends', 'Fortnite', 'Mario', 'Final Fantasy', 'Assassins Creed', 'The Last of Us', 'Genshin Impact', 'Persona', 'Minecraft', 'Pokemon', 'Rocket League', 'Forza', 'Fifa', 'Omori', 'Sonic', 'Uncharted', 'FarCry', 'Need For Speed', 'Crash Bandcoot', 'Shadow of the Colossus', 'Kingdom Hearts', 'Undertale', 'Unpacking', 'Life is Strange', 'Dark Souls'].map(jogo => (
                        <button
                            key={jogo}
                            onClick={() => adicionarOuRemoverJogo(jogo)}
                            className={jogosSelecionados.includes(jogo) ? 'btn-selecionado' : ''}
                        >
                            {jogo}
                        </button>
                    ))}
                </div>
                <div className="div-modal-button">
                    <button className='btn-confirmar' type="button" onClick={confirmarJogos}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JogosModal;