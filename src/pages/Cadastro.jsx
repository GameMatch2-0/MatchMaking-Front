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

    return(
        <>
            <div className="header">
                    <h2 onClick={() => navigate("/")}>MatchMaking</h2>
            </div>

            <div className="form-data">
                <h2 className="titulo-form">Criar Conta</h2>

                <div className="mandatory-data">
                    <div className="left-data">
                        <DataInput nameInput="Nome" typeInput="text" />

                        <DataInput nameInput="Nickname" typeInput="text" />

                        <DataInput nameInput="Email" typeInput="email" />

                        <DataInput nameInput="Senha" typeInput="password" />

                        <DataInput nameInput="Confirme sua senha" typeInput="password" />

                        <BirthdateComponent />

                        <GenderComponent />
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
                        <button className="create-account">
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