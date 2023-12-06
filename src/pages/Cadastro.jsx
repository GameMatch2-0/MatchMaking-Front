import { useNavigate } from "react-router-dom";
import "../css/cadastro.css"
import React from "react";
import DataInput from "../components/DataInput";
import FormPic from "../components/FormPic";
import BirthdateComponent from "../components/BirthdateComponent";
import GenderComponent from "../components/GenderComponent";

export default function Cadastro(){
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    };

    return(
        <>
            <div className="header">
                    <h2 onClick={() => navigate("/")}>MatchMaking</h2>
            </div>

            <div className="form-data">
                <h2>Criar Conta</h2>

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
                            <button>+ Jogos favoritos</button>
                            <button>+ Gêneros favoritos</button>
                            <button>+ Plataformas</button>
                        </div>

                        <div className="bottom-buttons">
                            <button>+ Interesses</button>
                            <button>+ Orientação sexual</button>
                        </div>
                    </div>

                    <div className="last-step">
                        <button className="create-account">
                            Criar Conta
                        </button>
                    </div>

                    <div className="have-account">
                        <p>Já tem uma conta? <a href="">Entrar</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}