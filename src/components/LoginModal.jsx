// src/LoginModal.js
import React, { useState } from 'react';
import axios from 'axios';
import '../css/login.css'


const LoginModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [changeAuthMethod, setChangeAuthMethod] = useState(false);

    const handleLogin = async () => {
        try {
            
            const response = await axios.post('http://seu-backend.com/api/login', {
                username,
                password,
            });

           
            console.log('Token:', response.data.token);
            
            onClose(); 
        } catch (error) {
            console.error('Erro ao autenticar:', error);
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                <form>
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="additional-options">
                        <input className='ipt-chk'
                            type="checkbox"
                            checked={changeAuthMethod}
                            onChange={() => setChangeAuthMethod(!changeAuthMethod)}
                        />
                         <label>Lembrar identificação do usuário</label>
                    </div>
                    <button className='btn-entrar-login' type="button" onClick={handleLogin}>
                        Entrar
                    </button>
                    <div className="login-method">
                        <p>Esqueci minha senha</p>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default LoginModal;
