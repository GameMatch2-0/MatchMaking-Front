import React, { useState } from 'react';
import '../css/interesses.css'

const InteressesModal = ({ isOpen, onClose }) => {
    const [interessesSelecionados, setInteressesSelecionados] = useState([]);

    const adicionarOuRemoverInteresse = (genero) => {
        setInteressesSelecionados(prevState => {
            if (prevState.includes(genero)) {
                return prevState.filter(interesse => interesse !== genero);
            } else {
                if (prevState.length < 5) {
                    return [...prevState, genero];
                } else {
                    return prevState;
                }
            }
        });
    };

    const confirmarInteresses = () => {
        console.log('interesses selecionados:', interessesSelecionados);

        const interessesEmString = JSON.stringify(interessesSelecionados);
        localStorage.setItem('interessesFavoritos', interessesEmString);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Escolha até 5 gêneros favoritos.</h2>
                <div className='div-interesses'>
                    {['Ação', 'Aventura', 'RPG', 'Terror', 'FPS', 'Moba', 'Puzzle', 'Corrida', 'Luta', 'Esporte'].map(genero => (
                        <button
                            key={genero}
                            onClick={() => adicionarOuRemoverInteresse(genero)}
                            className={interessesSelecionados.includes(genero) ? 'btn-selecionado' : ''}
                        >
                            {genero}
                        </button>
                    ))}
                </div>
                <div className="div-modal-button">
                    <button className='btn-confirmar' type="button" onClick={confirmarInteresses}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InteressesModal;