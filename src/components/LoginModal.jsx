// src/LoginModal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/login.css'
import Recuperacao from '../components/Recuperacao';


const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [changeAuthMethod, setChangeAuthMethod] = useState(false);

    const [rememberUser, setRememberUser] = useState(false);

    useEffect(() => {
        // Verifica se deve lembrar a identificação do usuário ao montar o componente
        const rememberedEmail = sessionStorage.getItem('email');
        const rememberedUserID = sessionStorage.getItem('userID');
        const rememberedName = sessionStorage.getItem('nome');

        if (rememberUser && rememberedEmail && rememberedUserID && rememberedName) {
            setEmail(rememberedEmail);
            setSenha(''); // Considerando que você não queira preencher a senha ao lembrar o usuário
            // Preencha outros estados conforme necessário
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

            if (rememberUser) {
                // Salva informações do usuário se a opção "Lembrar identificação do usuário" estiver marcada
                sessionStorage.setItem('nome', response.data.nome);
                sessionStorage.setItem('email', response.data.email);
            }

            window.location.href = 'http://localhost:5173/profile'
            onClose(); 
        } catch (error) {
            console.error('Erro ao autenticar:', error);
        }
    };
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Login</h2>
                <form>
                    <label>Nome de usuário:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Senha:</label>
                    <input
                        type="password"
                        value={senha}
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
                    <div className="login-method" onClick={openModal} >
                        <p>Esqueci minha senha</p>
                    </div>
                    <Recuperacao isOpen={isModalOpen} onClose={closeModal} />



                </form>
            </div>
        </div>
    );
};

export default LoginModal;
