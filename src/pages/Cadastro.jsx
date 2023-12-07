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

export default function Cadastro(){
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    };

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

    const [formData, setFormData] = useState({
        usuario: {
            nome: '',
            sobrenome: '',
            email: '',
            contato: '',
            senha: '',
            dtNascimento: '',
            identidadeGenero: '',
        },
        perfil: {
            username: '',
            biografia: '',
            nota: 5.0,
            orientacaoSexual: '',
            procuraAmizade: true,
            procuraNamoro: false,
            procuraPlayer2: false,
            isPremium: false,
        },
        generoJogoPerfil: [],
        interessePerfil: [],
        consolePerfil: [],
        midiaList: [],
    });

    const handleInputChange = (event, parentObject) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [parentObject]: {
                ...prevData[parentObject],
                [name]: value,
            },
        }));
    };          

    const handleCreateAccount = async () => {
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8080/perfis/novo-cadastro', formData);
            console.log('Resposta do servidor:', response.data);
            navigate('/profile');
        } catch (error) {
            console.error('Erro ao criar conta:', error);
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
                        <DataInput nameInput="nome" typeInput="text" onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <DataInput nameInput="sobrenome" typeInput="text" onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <DataInput nameInput="username" typeInput="text" onInputChange={(e) => handleInputChange(e, 'perfil')} />

                        <DataInput nameInput="contato" typeInput="text" onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <DataInput nameInput="email" typeInput="email" onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <DataInput nameInput="senha" typeInput="password" onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <DataInput nameInput="confirme sua senha" typeInput="password" />

                        <BirthdateComponent onInputChange={(e) => handleInputChange(e, 'usuario')} />

                        <GenderComponent onGenderSelect={handleInputChange} />
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