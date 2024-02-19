import React, { useState } from 'react';
import '../css/interesses.css'

const HobbiesModal = ({ isOpen, onClose }) => {
    const [hobbiesSelecionados, setHobbiesSelecionados] = useState([]);

    const adicionarOuRemoverHobbie = (hobbie) => {
        setHobbiesSelecionados(prevState => {
            if (prevState.includes(hobbie)) {
                return prevState.filter(hob => hob !== hobbie);
            } else {
                if (prevState.length < 5) {
                    return [...prevState, hobbie];
                } else {
                    return prevState;
                }
            }
        });
    };

    const confirmarHobbies = () => {
        console.log('hobbies selecionados:', hobbiesSelecionados);

        const hobbiesEmString = JSON.stringify(hobbiesSelecionados);
        localStorage.setItem('hobbiesFavoritos', hobbiesEmString);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Escolha até 5 Hobbies favoritos.</h2>
                <div className='div-interesses'>
                    {['Ler', 'Carros', 'Música', 'Academia', 'Festas', 'Filmes', 'Animes', 'Cozinhar', 'Dormir'].map(hobbie => (
                        <button
                            key={hobbie}
                            onClick={() => adicionarOuRemoverHobbie(hobbie)}
                            className={hobbiesSelecionados.includes(hobbie) ? 'btn-selecionado' : ''}
                        >
                            {hobbie}
                        </button>
                    ))}
                </div>
                <div className="div-modal-button">
                    <button className='btn-confirmar' type="button" onClick={confirmarHobbies}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HobbiesModal;