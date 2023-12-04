// src/LoginModal.js
import React, { useState } from 'react';
import '../css/login.css'


const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Autenticado com:', username, password);
    onClose(); // Fechar o modal após o login bem-sucedido
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
          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
