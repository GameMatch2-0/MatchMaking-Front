import '../css/match.css'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import plus from '../assets/plus.png'
import foto from '../assets/foto.png'
import star from '../assets/star.png'
import userData from '../static/users.json'
import { useEffect, useState } from 'react'
import React from 'react';

const MatchMenu = () => {
    const [data, setData] = useState([]);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        setData(userData);
    }, []);

    const handleLikeClick = () => {
        const carousel = document.querySelector('.carousel');
        setCurrentScroll(currentScroll + carousel.clientHeight);
        carousel.scrollTop = currentScroll;
    };

    return (
        <div className="match-menu">
            <div className="carousel">
                {data.map((item) => {
                    const {id, nickname, idade, nota, nome, sobrenome, biografia, hobbie1, hobbie2, hobbie3, jogo1, jogo2, jogo3, genero1, genero2, genero3, console1, console2, console3} = item;
                    return ( 
                        <div className="match-info" key={id}>
                            <div className="album">
                                <img src={foto} alt="foto perfil" />
                            </div>

                            <div className="profile-info">
                                <div className="top-info">
                                    <div className="nick-idade">
                                        <span className="nick">{nickname}</span>
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
                                    <span className="hobbie">{hobbie1}</span>
                                    <span className="hobbie">{hobbie2}</span>
                                    <span className="hobbie">{hobbie3}</span>
                                </div>
                                <span className="titulo-fav">Jogos favoritos:</span>
                                <div className="jogos-section">
                                    <span className="jogo">{jogo1}</span>
                                    <span className="jogo">{jogo2}</span>
                                    <span className="jogo">{jogo3}</span>
                                </div>
                                <span className="titulo-fav">Gêneros favoritos:</span>
                                <div className="generos-section">
                                    <span className="genero">{genero1}</span>
                                    <span className="genero">{genero2}</span>
                                    <span className="genero">{genero3}</span>
                                </div>
                                <span className="titulo-fav">Meus consoles:</span>
                                <div className="consoles-section">
                                    <span className="console">{console1}</span>
                                    <span className="console">{console2}</span>
                                    <span className="console">{console3}</span>
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