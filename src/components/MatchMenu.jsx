import '../css/match.css'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import plus from '../assets/plus.png'
import foto from '../assets/foto.png'
import star from '../assets/star.png'
import userData from '../static/users.json'
import { useEffect, useState } from 'react'
import React from 'react';
import { app, auth, firestore } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

const MatchMenu = () => {
    const [data, setData] = useState([]);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        async function fetchUserDocuments() {
            const usersRef = collection(firestore, "users");
    
            const querySnapshot = await getDocs(usersRef);
    
            const data = querySnapshot.docs.map(doc => {
                const docData = doc.data();
                const { id_usuario, username, nome, sobrenome, dt_nascimento, nota, biografia, foto_perfil } = docData;
                const interesses = docData.interesses || [];
                const jogos_favoritos = docData.jogos_favoritos || [];
                const generos_favoritos = docData.generos_favoritos || [];
                const consoles = docData.consoles || [];
            
                return { id_usuario, username, nome, sobrenome, dt_nascimento, nota, biografia, interesses, jogos_favoritos, generos_favoritos, consoles, foto_perfil };
            });
            
            console.log(data);
            setData(data);
        }
    
        fetchUserDocuments();
    }, []);

    const calculateAge = (birthDate) => {
        const dob = new Date(birthDate);
        const today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        return age;
    };

    const handleLikeClick = () => {
        const carousel = document.querySelector('.carousel');
        setCurrentScroll(currentScroll + carousel.clientHeight);
        carousel.scrollTop = currentScroll;
    };

    return (
        <div className="match-menu">
            <div className="carousel">
            {data.map((item) => {
                const { id_usuario, username, nome, sobrenome, dt_nascimento, nota, biografia, interesses, jogos_favoritos, generos_favoritos, consoles, foto_perfil } = item;
                const idade = calculateAge(dt_nascimento);
                return ( 
                    <div className="match-info" key={id_usuario}>
                        <div className="album">
                            <img src={foto_perfil} alt="foto perfil" />
                        </div>

                        <div className="profile-info">
                            <div className="top-info">
                                <div className="nick-idade">
                                    <span className="nick">{username}</span>
                                    <span className="idade">{idade}</span>
                                </div>
                                <div className="nota">
                                    <img src={star} alt="estrela" />
                                    <span className="nota-media">{nota}</span>
                                </div>
                            </div>
                            <div className="nome-real">
                                <span className="nome">{nome}</span>
                                <span className="sobrenome">{sobrenome}</span>
                            </div>
                            <div className="biografia">
                                <span className="bio">{biografia}</span>
                            </div>
                            <span className="titulo-fav">Gosto de:</span>
                            <div className="hobbies-section">
                                {interesses.map((interesse, index) => (
                                    <span className="hobbie" key={index}>{interesse}</span>
                                ))}
                            </div>
                            <span className="titulo-fav">Jogos favoritos:</span>
                            <div className="jogos-section">
                                {jogos_favoritos.map((jogo, index) => (
                                    <span className="jogo" key={index}>{jogo}</span>
                                ))}
                            </div>
                            <span className="titulo-fav">Gêneros favoritos:</span>
                            <div className="generos-section">
                                {generos_favoritos.map((genero, index) => (
                                    <span className="genero" key={index}>{genero}</span>
                                ))}
                            </div>
                            <span className="titulo-fav">Meus consoles:</span>
                            <div className="consoles-section">
                                {consoles.map((console, index) => (
                                    <span className="console" key={index}>{console}</span>
                                ))}
                            </div>
                        </div>
                    </div> 
                );
            })}
            </div>

            <div className="match-options">
                <img src={like} alt="icone de like" onClick={handleLikeClick} />
                <img src={plus} alt="icone de like" />
                <img src={dislike} alt="icone de dislike" onClick={handleLikeClick}/>
            </div>
        </div>
    );
};

export default MatchMenu;