import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/login.css'
import Recuperacao from '../components/Recuperacao';
import { app, auth, firestore } from "../services/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [changeAuthMethod, setChangeAuthMethod] = useState(false);
    const [rememberUser, setRememberUser] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        const rememberedEmail = sessionStorage.getItem('email');
        const rememberedUserID = sessionStorage.getItem('userID');
        const rememberedName = sessionStorage.getItem('nome');

        if (rememberUser && rememberedEmail && rememberedUserID && rememberedName) {
            setEmail(rememberedEmail);
            setSenha('');
        }
    }, [rememberUser]);


    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);

            const user = userCredential.user;

            console.log('Usuário:', user);

            sessionStorage.setItem('tokenFirebase', user.refreshToken);
            sessionStorage.setItem('userIDFirebase', user.uid);
            sessionStorage.setItem('nomeFirebase', user.displayName);
            sessionStorage.setItem('emailFirebase', user.email);

            navigate("/profile");

            onClose(); 
        } catch (error) {
            console.error('Erro ao autenticar:', error);
            setShowError(true);
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
                    <label>Email:</label>
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
                    {showError && <div className="error-message">Usuário ou senha incorretos.</div>}
                    <div className="botao">
                        <button className='btn-entrar-login' type="button" onClick={handleLogin}>
                            Entrar
                        </button>
                    </div>
                    <div className="login-method" onClick={openModal} >
                        <p className='esqueci-senha'>Esqueci minha senha</p>
                    </div>
                    <Recuperacao isOpen={isModalOpen} onClose={closeModal} />
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
