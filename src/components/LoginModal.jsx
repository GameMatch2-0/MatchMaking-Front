// src/LoginModal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/login.css'


const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [changeAuthMethod, setChangeAuthMethod] = useState(false);
    const rememberedEmail = sessionStorage.getItem('email')
    const rememberedSenha = sessionStorage.getItem('password')

    const [rememberUser, setRememberUser] = useState(false);

    useEffect(() => {
        const rememberedEmail = sessionStorage.getItem('email');
        const rememberedSenha = sessionStorage.getItem('password');
        const rememberedUserID = sessionStorage.getItem('userID');
        const rememberedName = sessionStorage.getItem('nome');

        if (rememberUser && rememberedEmail && rememberedUserID && rememberedName) {
            setEmail(rememberedEmail);
            setSenha(rememberedSenha); 
        }
    }, [rememberUser]);


    const handleLogin = async () => {
        try {
            
            const response = await axios.post('http://localhost:8080/usuarios/login', {
                email,
                senha,
            });

           
            console.log('Token:', response.data.token);

            sessionStorage.setItem('token', response.data.token)
            sessionStorage.setItem('userID', response.data.userId)
            sessionStorage.setItem('nome', response.data.nome)
            sessionStorage.setItem('email', response.data.email)
            sessionStorage.setItem('password', senha)

            if (rememberUser) {
                sessionStorage.setItem('nome', response.data.nome);
                sessionStorage.setItem('email', response.data.email);
                console.log('credenciais salvas')
            }

            window.location.href = 'http://localhost:5173/profile'
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
                    <label>E-mail:</label>
                    <input
                        type="text"
                        value={rememberedEmail} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={rememberedSenha}
                        onChange={(e) => setSenha(e.target.value)}
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
