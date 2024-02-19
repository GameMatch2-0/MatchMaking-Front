import React, { useState } from 'react';
import '../css/interesses.css'

const OrientacaoSexualModal = ({ isOpen, onClose }) => {
    const [orientacaoSelecionadas, setOrientacoesSelecionadas] = useState([]);

    const adicionarOuRemoverOrientacao = (orientacao) => {
        setOrientacoesSelecionadas(prevState => {
            if (prevState.includes(orientacao)) {
                return prevState.filter(orientacao => orientacao !== orientacao);
            } else {
                if (prevState.length < 1) {
                    return [...prevState, orientacao];
                } else {
                    return prevState;
                }
            }
        });
    };

    const confirmarOrientacoes = () => {
        console.log('orientações selecionadas:', orientacaoSelecionadas);

        const orientacaoEmString = JSON.stringify(orientacaoSelecionadas);
        localStorage.setItem('orientacaoSexual', orientacaoEmString);
        onClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>×</span>
                <h2>Selecione sua orientação sexual.</h2>
                <div className='div-interesses'>
                    {['Heterossexual', 'Homossexual', 'Bissexual', 'Assexual', 'Pansexual', 'Demissexual'].map(orientacao => (
                        <button
                            key={orientacao}
                            onClick={() => adicionarOuRemoverOrientacao(orientacao)}
                            className={orientacaoSelecionadas.includes(orientacao) ? 'btn-selecionado' : ''}
                        >
                            {orientacao}
                        </button>
                    ))}
                </div>
                <div className="div-modal-button">
                    <button className='btn-confirmar' type="button" onClick={confirmarOrientacoes}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrientacaoSexualModal;