import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/cadastro.css"
import React from "react";
import DataInput from "../components/DataInput";
import FormPic from "../components/FormPic";
import BirthdateComponent from "../components/BirthdateComponent";
import GenderComponent from "../components/GenderComponent";
import InteressesModal from "../components/Interesses";
import PlataformasModal from "../components/PlataformasModal";
import HobbiesModal from "../components/HobbiesModal";
import JogosModal from "../components/JogosModal";
import OrientacaoSexualModal from "../components/OrientacaoSexualModal";
import LoginModal from "../components/LoginModal";
import axios from 'axios';
import { app, auth, firestore } from "../services/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import InputMask from 'react-input-mask';

export default function Cadastro(){
    const navigate = useNavigate();

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [isInteressesModalOpen, setIsInteressesModalOpen] = useState(false);
    const [isPlataformasModalOpen, setIsPlataformasModalOpen] = useState(false);
    const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);
    const [isJogosModalOpen, setIsJogosModalOpen] = useState(false);
    const [isOrientacaoSexualModalOpen, setIsOrientacoesSexuaisModalOpen] = useState(false);

    const openInteressesModal = () => {
        setIsInteressesModalOpen(true);
    }; 

    const openPlataformasModal = () => {
        setIsPlataformasModalOpen(true);
    };

    const openHobbiesModal = () => {
        setIsHobbiesModalOpen(true);
    };

    const openJogosModal = () => {
        setIsJogosModalOpen(true);
    };

    const openOrientacaoSexual = () => {
        setIsOrientacoesSexuaisModalOpen(true);
    };

    const closeInteressesModal = () => {
        setIsInteressesModalOpen(false);
    };

    const closePlataformasModal = () => {
        setIsPlataformasModalOpen(false);
    }; 
    
    const closeHobbiesModal = () => {
        setIsHobbiesModalOpen(false);
    };

    const closeJogosModal = () => {
        setIsJogosModalOpen(false);
    };

    const closeOrientacoesSexuaisModal = () => {
        setIsOrientacoesSexuaisModalOpen(false);
    };

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [contato, setContato] = useState('');
    const [senha, setSenha] = useState('');
    const [identidadeGenero, setIdentidadeGenero] = useState('');
    const [username, setUsername] = useState('');
    const [confirmSenhaColor, setConfirmSenhaColor] = useState('white');
    const [fotoPerfil, setFotoPerfil] = useState('');

    const handleNomeChange = (event) => {
        const { value } = event.target;
        setNome(value);
    };
      
    const handleSobrenomeChange = (event) => {
        const { value } = event.target;
        setSobrenome(value);
    };

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleContatoChange = (event) => {
        const { value } = event.target;
        setContato(value.replace(/\D/g, ''));
    };

    const handleSenhaChange = (event) => {
        const { value } = event.target;
        setSenha(value);
    };

    const handleConfirmSenhaChange = (event) => {
        const { value } = event.target;
    
        if (value !== senha) {
            setConfirmSenhaColor('tomato');
        } else {
            setConfirmSenhaColor('white');
        }
    };   

    const handleGenderChange = (selectedGender) => {
        setIdentidadeGenero(selectedGender);
    };            

    const handleUsernameChange = (event) => {
        const { value } = event.target;
        setUsername(value);
    };

    const handleImageChange = (url) => {
        setFotoPerfil(url);
    };

    const handleCreateAccount = async () => {
        const orientacaoSexualLocal = JSON.parse(localStorage.getItem('orientacaoSexual'));
        const orientacaoSexual = orientacaoSexualLocal[0];
        const birthdate = localStorage.getItem('birthdate');

        const newData = {
            usuario: {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                contato: contato,
                senha: senha,
                dtNascimento: birthdate,
                identidadeGenero: identidadeGenero
            },
            perfil: {
                username: username,
                biografia: 'Olá, estou utilizando o MatchMaking!',
                nota: 5.0,
                orientacaoSexual: orientacaoSexual,
                procuraAmizade: true,
                procuraNamoro: false,
                procuraPlayer2: false,
                isPremium: false,
            },
            generoJogoPerfil:[
                {
                    generoJogoId: 1,
                    isVisible: true
                },
                {
                    generoJogoId: 2,
                    isVisible: true
                }
            ],
            interessePerfil:[
                {
                    interesseId: 1,
                    isVisible: true
                },
                {
                    interesseId: 2,
                    isVisible: true
                }
            ],
            consolePerfil:[
                {
                    consoleId: 1,
                    isVisible: true
                },
                {
                    consoleId: 2,
                    isVisible: true
                }
            ],
            midiaList:[
                {
                    link: "https://www.youtube.com/example",
                    isVisible: true
                },
                {
                    link: "https://www.instagram.com/example",
                    isVisible: false
                }
            ]
        };

        const plataformas = JSON.parse(localStorage.getItem('plataformasFavoritas'));
        const generosFavoritos = JSON.parse(localStorage.getItem('interessesFavoritos'));
        const hobbies = JSON.parse(localStorage.getItem('hobbiesFavoritos'));
        const jogosFavoritos = JSON.parse(localStorage.getItem('jogosFavoritos'));

        try {
            console.log('Objeto enviado para o servidor:', newData);

            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            if (user && user.uid) {
                sessionStorage.removeItem('userIDFirebase');
                sessionStorage.setItem('userIDFirebase', user.uid);
                console.log('Usuário criado com sucesso:', user);

                const docRef = await addDoc(collection(firestore, "users"), {   
                    biografia: newData.perfil.biografia,
                    consoles: plataformas,
                    contato: newData.usuario.contato,
                    dt_cadastro: Timestamp.now(),
                    deleted: false,
                    dt_nascimento: birthdate,
                    email: newData.usuario.email,
                    generos_favoritos: generosFavoritos,
                    id_usuario: user.uid,
                    identidadeGenero: newData.usuario.identidadeGenero,
                    interesses: hobbies,
                    jogos_favoritos: jogosFavoritos, 
                    nome: newData.usuario.nome,
                    nota: newData.perfil.nota,
                    orientacao_sexual: newData.perfil.orientacaoSexual,
                    senha: senha,
                    sobrenome: sobrenome,
                    username: username,
                    foto_perfil: fotoPerfil,
                });

                localStorage.setItem('docId', docRef.id);
                console.log('Documento criado com sucesso no Firestore:', docRef.id);

                navigate("/profile");
            } else {
                console.error('Erro ao criar usuário: UID inválido.');
            }
        } catch (error) {
            console.error('Erro ao criar a conta:', error);
        }
    };

    return(
        <>
            <div className="header">
                    <h2 onClick={() => navigate("/")}>MatchMaking</h2>
            </div>

            <div className="form-data">
                <h2 className="titulo-form">Criar Conta</h2>

                <div className="mandatory-data">
                    <div className="left-data">
                        <DataInput 
                            nameInput="nome" 
                            typeInput="text"
                            onInputChange={handleNomeChange}
                        />
                        <DataInput 
                            nameInput="sobrenome" 
                            typeInput="text" 
                            onInputChange={handleSobrenomeChange}
                        />
                        <DataInput 
                            nameInput="username" 
                            typeInput="text" 
                            onInputChange={handleUsernameChange}
                        />
                        <DataInput 
                            nameInput="contato" 
                            typeInput="text" 
                            onInputChange={handleContatoChange}
                            mask="(99)99999-9999"
                            maskChar={null}
                        />
                        <DataInput 
                            nameInput="email" 
                            typeInput="email" 
                            onInputChange={handleEmailChange}
                        />
                        <DataInput 
                            nameInput="senha" 
                            typeInput="password"
                            onInputChange={handleSenhaChange}
                        />
                        <DataInput 
                            nameInput="confirme sua senha" 
                            typeInput="password" 
                            onInputChange={handleConfirmSenhaChange}
                            style={{ color: confirmSenhaColor }}
                        />
                        <BirthdateComponent />
                        <GenderComponent 
                            onGenderSelect={handleGenderChange} 
                        />

                    </div>
                    
                    <div className="right-data">
                        <p>Foto de perfil</p>

                        <div className="pics-row">
                            <FormPic onImageChange={handleImageChange} />
                            <FormPic onImageChange={handleImageChange} />
                            <FormPic onImageChange={handleImageChange} />
                        </div>

                        <div className="pics-row">
                            <FormPic onImageChange={handleImageChange} />
                            <FormPic onImageChange={handleImageChange} />
                            <FormPic onImageChange={handleImageChange} />
                        </div>
                    </div>
                </div>

                <div className="optional-data">
                    <div className="break-row">
                        <div className="line" />
                        <p>Opcional</p>
                        <div className="line" />
                    </div>

                    <div className="optional-content">
                        <div className="top-buttons">
                            <button onClick={openJogosModal}>+ Jogos favoritos</button>
                            <button onClick={openInteressesModal}>+ Gêneros favoritos</button>
                            <button onClick={openPlataformasModal}>+ Plataformas</button>
                        </div>

                        <div className="bottom-buttons">
                            <button onClick={openHobbiesModal}>+ Interesses</button>
                            <button onClick={openOrientacaoSexual}>+ Orientação sexual</button>
                        </div>
                    </div>

                    <InteressesModal isOpen={isInteressesModalOpen} onClose={closeInteressesModal} />
                    <PlataformasModal isOpen={isPlataformasModalOpen} onClose={closePlataformasModal} />
                    <HobbiesModal isOpen={isHobbiesModalOpen} onClose={closeHobbiesModal} />
                    <JogosModal isOpen={isJogosModalOpen} onClose={closeJogosModal} />
                    <OrientacaoSexualModal isOpen={isOrientacaoSexualModalOpen} onClose={closeOrientacoesSexuaisModal} />
                    <LoginModal isOpen={isModalOpen} onClose={closeModal} />

                    <div className="last-step">
                        <button className="create-account" onClick={handleCreateAccount}>
                            Criar Conta
                        </button>
                    </div>

                    <div className="have-account">
                        <p>Já tem uma conta? <a onClick={openModal}>Entrar</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
}