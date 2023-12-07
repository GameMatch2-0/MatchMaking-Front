import React, { useState } from 'react';
import '../css/interesses.css'

const OrientacaoSexualModal = ({ isOpen, onClose }) => {
    const [orientacaoSelecionadas, setOrientacoesSelecionadas] = useState([]);

    const adicionarOuRemoverOrientacao = (orientacao) => {
        setOrientacoesSelecionadas(prevState => {
            if (prevState.includes(orientacao)) {
                return prevState.filter(orientacao => orientacao !== orientacao);
            } else {
                return [...prevState, orientacao];
            }
        });
    };

    const confirmarOrientacoes = () => {
        console.log('orientações selecionadas:', orientacaoSelecionadas);
        onClose();
        // Aqui você pode salvar os interessesSelecionados onde desejar
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