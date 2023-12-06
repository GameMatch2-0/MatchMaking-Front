// src/LoginModal.js
import React, { useState } from 'react';
import '../css/interesses.css'


const InteressesModal = ({ isOpen, onClose }) => {
    const [interesse1, setInteresse1] = useState('');
    const [interesse2, setInteresse2] = useState('');
    const [interesse3, setInteresse3] = useState('');
    const [interesse4, setInteresse4] = useState('');
    const [interesse5, setInteresse5] = useState('');
    const [changeAuthMethod, setChangeAuthMethod] = useState(false);

    const handleLogin = () => {
        // Lógica de autenticação aqui
        console.log('interesses selecionados:', interesse1, interesse2, interesse3, interesse4, interesse5);
        onClose(); // Fechar o modal após o login bem-sucedido
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Escolha até 5 gêneros favoritos.</h2>
                <div className='div-interesses'>
                    <div className="div-linha1">
                        <button>Ação</button>
                        <button>Aventura</button>
                        <button>RPG</button>
                    </div>
                    <div className="div-linha2">
                        <button>Terror</button>
                        <button>FPS</button>
                    </div>
                    <div className="div-linha3">
                        <button>Moba</button>
                        <button>Puzzle</button>
                        <button>Corrida</button>
                    </div>
                    <div className="div-linha4">
                        <button>Luta</button>
                        <button>Esporte</button>
                    </div>

                    <button className='btn-confirmar' type="button">
                    Confirmar
                </button>
                </div>

                


            </div>
        </div>
    );
};

export default InteressesModal;