import React, { useState } from 'react';
import '../css/interesses.css'

const PlataformasModal = ({ isOpen, onClose }) => {
    const [plataformasSelecionadas, setPlataformasSelecionadas] = useState([]);

    const adicionarOuRemoverPlataforma = (plataforma) => {
        setPlataformasSelecionadas(prevState => {
            if (prevState.includes(plataforma)) {
                return prevState.filter(plat => plat !== plataforma);
            } else {
                if (prevState.length < 5) {
                    return [...prevState, plataforma];
                } else {
                    return prevState;
                }
            }
        });
    };    

    const confirmarPlataformas = () => {
        console.log('plataformas selecionadas:', plataformasSelecionadas);

        const plataformasEmString = JSON.stringify(plataformasSelecionadas);
        localStorage.setItem('plataformasFavoritas', plataformasEmString);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Escolha até 5 plataformas favoritas.</h2>
                <div className='div-interesses'>
                    {['PlayStation 5', 'PlayStation 4', 'X Box Series', 'X Box One', 'Nintendo Switch', 'PC', 'Mobile'].map(plataforma => (
                        <button
                            key={plataforma}
                            onClick={() => adicionarOuRemoverPlataforma(plataforma)}
                            className={plataformasSelecionadas.includes(plataforma) ? 'btn-selecionado' : ''}
                        >
                            {plataforma}
                        </button>
                    ))}
                </div>
                <div className="div-modal-button">
                    <button className='btn-confirmar' type="button" onClick={confirmarPlataformas}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlataformasModal;