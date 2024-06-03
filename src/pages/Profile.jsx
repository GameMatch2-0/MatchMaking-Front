import '../css/profile.css'
import foto from '../assets/foto.png'
import star from '../assets/star.png'
import edit from '../assets/edit.png'
import coelho from '../assets/logo-coelho.jpg'
import Friend from '../components/Friend.jsx';
import Chat from '../components/Chat.jsx';
import Search from '../components/Search.jsx';
import MatchMenu from '../components/MatchMenu.jsx';
import FavCard from '../components/FavCard.jsx';
import InteressesModal from "../components/Interesses";
import PlataformasModal from "../components/PlataformasModal";
import HobbiesModal from "../components/HobbiesModal";
import JogosModal from "../components/JogosModal";
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { app, auth, firestore } from "../services/firebase";
import { collection, doc, getDoc, getDocs, query, where} from "firebase/firestore";

export default function Profile() {
    const navigate = useNavigate();

    const returnIndex = async () => {
        sessionStorage.clear();

        navigate('/');
    };  

    const [nomeCompleto, setNomeCompleto] = useState('');
    const [username, setUsername] = useState('');
    const [favGameCard, setFavGameCard] = useState([]);
    const [favInteresseCard, setFavInteresseCard] = useState([]);
    const [favPlataformaCard, setFavPlataformaCard] = useState([]);
    const [favHobbieCard, setFavHobbieCard] = useState([]);
    const [fotoPerfil, setFotoPerfil] = useState('');

    useEffect(() => {
        async function fetchUserInfo() {
            const userID = sessionStorage.getItem('userIDFirebase');
    
            if (userID) {
                try {
                    const usersRef = collection(firestore, "users");

                    const q = query(usersRef, where("id_usuario", "==", userID));

                    const querySnapshot = await getDocs(q);

                    if (!querySnapshot.empty) {
                        const doc = querySnapshot.docs[0];
                        localStorage.setItem('docId', doc.id);
                    }
                    
                    const docId = localStorage.getItem('docId');
    
                    if (docId) {
                        const docRef = doc(firestore, "users", docId);
                        const docData = await getDoc(docRef);
    
                        if (docData.exists()) {
                            const data = docData.data();
                            const { nome, sobrenome, username, jogos_favoritos, generos_favoritos, consoles, interesses, foto_perfil } = data;
                        
                            const favGameCardData = jogos_favoritos ? jogos_favoritos.map(jogo => ({
                                name: jogo,
                                image: foto
                            })) : [];
                        
                            const favInteresseCardData = generos_favoritos ? generos_favoritos.map(interesse => ({
                                name: interesse,
                                image: foto
                            })) : [];
                        
                            const favPlataformaCardData = consoles ? consoles.map(console => ({
                                name: console,
                                image: foto
                            })) : [];
                        
                            const favHobbieCardData = interesses ? interesses.map(hobbie => ({
                                name: hobbie,
                                image: foto
                            })) : [];
                        
                            setFavGameCard(favGameCardData);
                            setFavInteresseCard(favInteresseCardData);
                            setFavPlataformaCard(favPlataformaCardData);
                            setFavHobbieCard(favHobbieCardData);
                            setUsername(username);
                            setNomeCompleto(nome + " " + sobrenome);
                            setFotoPerfil(foto_perfil);
                        } else {
                            console.log("Nenhum documento encontrado!");
                        }
                    } else {
                        console.log("ID do documento não encontrado no localStorage!");
                    }
                } catch (error) {
                    console.error('Erro ao buscar informações do usuário:', error);
                }
            }
        }
    
        fetchUserInfo();
    }, []);    

    const friendsList = [
    ];

    const chatList = [
    ]; 

    const [headerColor, setHeaderColor] = useState('linear-gradient(120deg, #2032a7, #4150B7)');
    const [slideBarColor, setSlideBarColor] = useState('#4150B7');
    const [matchAreaColor, setMatchAreaColor] = useState('#98a1db');

    const [showProfile, setShowProfile] = useState(true);
    const [showFriends, setShowFriends] = useState(false);
    const [showChat, setShowChat] = useState(false);

    const [activeBar, setActiveBar] = useState(1);

    const handleClickProfile = () => {
        setActiveBar(1);

        setShowProfile(true);
        setShowFriends(false);
        setShowChat(false);
    };

    const handleClickFriends = () => {
        setActiveBar(2);

        setShowProfile(false);
        setShowFriends(true);
        setShowChat(false);
    };

    const handleChat = () => {
        setActiveBar(3);

        setShowProfile(false);
        setShowFriends(false);
        setShowChat(true);
    };

    const handleColorChange = (header1, header2, slideBar, matchArea) => {
        setHeaderColor(`linear-gradient(120deg, ${header1}, ${header2})`);
        setSlideBarColor(slideBar);
        setMatchAreaColor(matchArea);
    };

    const [isInteressesModalOpen, setIsInteressesModalOpen] = useState(false);
    const [isPlataformasModalOpen, setIsPlataformasModalOpen] = useState(false);
    const [isHobbiesModalOpen, setIsHobbiesModalOpen] = useState(false);
    const [isJogosModalOpen, setIsJogosModalOpen] = useState(false);

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

    return (
        <>
            <section className='user-profile'>
                <div className="user-menu">
                    <div className="menu-header" style={{ backgroundImage: headerColor }}>
                        <img src={fotoPerfil} alt="foto de perfil" className='foto-usuario'/>

                        <div className="usernames">
                            <p className="nickname">
                                {username}
                            </p>

                            <p className="real-name">
                                {nomeCompleto}
                            </p>
                        </div>

                        <div className="avaliation">
                            <img src={star} alt="estrela de avaliação" className="rate-icon" />

                            <p className="rate">
                                5
                            </p>
                        </div>
                    </div>

                    <div className="menu-body">
                        <div className="menu-nav">
                            <p onClick={handleClickProfile} className="perfil-nav">
                                Perfil
                            </p>

                            {/* <p onClick={handleClickFriends} className="amigos-nav">
                                Amigos
                            </p>

                            <p onClick={handleChat} className="chat-nav">
                                Chat
                            </p> */}
                        </div>

                        <div className="slide-bar-area">
                            <div className={`slide-bar1 ${activeBar === 1 ? '' : 'hidden'}`} style={{backgroundColor: slideBarColor}}/>
                            {/* <div className={`slide-bar2 ${activeBar === 2 ? '' : 'hidden'}`} style={{backgroundColor: slideBarColor}}/>
                            <div className={`slide-bar3 ${activeBar === 3 ? '' : 'hidden'}`} style={{backgroundColor: slideBarColor}}/> */}
                        </div>  


                        <div className="menu-content">
                            <div className="profile-nav" style={{ display: showProfile ? 'block' : 'none' }}>
                                <div className="user-information">
                                    <div className="bio">
                                        <div className="name-edit">
                                            <p>Bio:</p>

                                            <img src={edit} alt="icone de edição" />
                                        </div>

                                        <textarea cols="30" rows="10"></textarea>
                                    </div>

                                    <InteressesModal isOpen={isInteressesModalOpen} onClose={closeInteressesModal} />
                                    <PlataformasModal isOpen={isPlataformasModalOpen} onClose={closePlataformasModal} />
                                    <HobbiesModal isOpen={isHobbiesModalOpen} onClose={closeHobbiesModal} />
                                    <JogosModal isOpen={isJogosModalOpen} onClose={closeJogosModal} />

                                    <div className="fav-games">
                                        <div className="name-edit">
                                            <p>Jogos favoritos:</p>

                                            <img src={edit} alt="icone de edição" onClick={openJogosModal}/>
                                        </div>

                                        <div className="rolar-fav">
                                            {favGameCard.map((favGameCard, index) => (
                                                <FavCard key={index} name={favGameCard.name} image={coelho} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="fav-interesses">
                                        <div className="name-edit">
                                            <p>Gêneros favoritos:</p>

                                            <img src={edit} alt="icone de edição" onClick={openInteressesModal}/>
                                        </div>

                                        <div className="rolar-fav">
                                            {favInteresseCard.map((favInteresseCard, index) => (
                                                <FavCard key={index} name={favInteresseCard.name} image={coelho} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="consoles">
                                        <div className="name-edit">
                                            <p>Meus consoles:</p>

                                            <img src={edit} alt="icone de edição" onClick={openPlataformasModal}/>
                                        </div>

                                        <div className="rolar-fav">
                                            {favPlataformaCard.map((favPlataformaCard, index) => (
                                                <FavCard key={index} name={favPlataformaCard.name} image={coelho} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="fav-hobbies">
                                        <div className="name-edit">
                                            <p>Gostos pessoais:</p>

                                            <img src={edit} alt="icone de edição" onClick={openHobbiesModal}/>
                                        </div>

                                        <div className="rolar-fav">
                                            {favHobbieCard.map((favHobbieCard, index) => (
                                                <FavCard key={index} name={favHobbieCard.name} image={coelho} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="profile-color">
                                        <div
                                            className="color-option blue"
                                            onClick={() => handleColorChange(
                                                '#2032a7',
                                                '#4150B7',
                                                '#4150B7',
                                                '#98a1db'
                                            )}
                                        />
                                        <div
                                            className="color-option red"
                                            onClick={() => handleColorChange(
                                                '#bb1818',
                                                '#ec3030',
                                                '#bb1818',
                                                '#c56b6b'
                                            )}
                                        />
                                        <div
                                            className="color-option yellow"
                                            onClick={() => handleColorChange(
                                                '#ec9d09',
                                                '#fcad1a',
                                                '#ec9d09',
                                                '#fcd285'
                                            )}
                                        />
                                        <div
                                            className="color-option green"
                                            onClick={() => handleColorChange(
                                                '#0d9c14',
                                                '#15b81d',
                                                '#0d9c14',
                                                '#82d186',
                                            )}
                                        />
                                        <div
                                            className="color-option black"
                                            onClick={() => handleColorChange(
                                                '#000000',
                                                '#131313',
                                                '#000000',
                                                '#777777'
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="friends-nav" style={{ display: showFriends ? 'block' : 'none' }}>
                                <Search />

                                <div className="friend-list">
                                    {friendsList.map((friend, index) => (
                                        <Friend key={index} name={friend.name} photo={friend.photo} />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="chat-nav" style={{ display: showChat ? 'block' : 'none' }}>
                                <Search />

                                <div className="chat-list">
                                    {chatList.map((chat, index) => (
                                        <Chat key={index} name={chat.name} message={chat.message} photo={chat.photo} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="mark-name" onClick={returnIndex} >
                        MatchMaking
                    </h1>
                </div>

                <div className="match-area" style={{ backgroundColor: matchAreaColor }}>
                        <MatchMenu />
                </div>
            </section>
        </>
    )
}