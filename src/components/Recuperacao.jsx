import React, { useState } from 'react';
import '../css/login.css'


const Recuperacao = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        // Lógica de autenticação aqui
        console.log('Recuperando senha no email:', email);
        onClose(); // Fechar o modal após o login bem-sucedido
    };


    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Informe o endereço de email para redefinir a senha</h2>
                <form>
                    <label>E-mail:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='btn-entrar-login' type="button">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Recuperacao;
