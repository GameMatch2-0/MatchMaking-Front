import '../css/profile.css'
import foto from '../assets/foto.png'
import star from '../assets/star.png'
import Friend from '../components/Friend.jsx';
import Chat from '../components/Chat.jsx';
import Search from '../components/Search.jsx';
import React, {useState} from 'react';

export default function Profile() {
    const userInfo = {
        nickname: 'Kayaterasu',
        realname: 'Bruno Pimentel',
        rate: 4.8,
    }

    const friendsList = [
        { name: 'Amigo 1', photo: foto },
        { name: 'Amigo 2', photo: foto },
        { name: 'Amigo 3', photo: foto },
        { name: 'Amigo 4', photo: foto },
        { name: 'Amigo 5', photo: foto },
        { name: 'Amigo 6', photo: foto },
    ];

    const chatList = [
        { name: 'Amigo 1', message: 'Bom dia', photo: foto },
        { name: 'Amigo 2', message: 'Boa tarde', photo: foto },
        { name: 'Amigo 3', message: 'Bora jogar?', photo: foto },
        { name: 'Amigo 4', message: 'GG', photo: foto },
        { name: 'Amigo 5', message: 'Você joga bem', photo: foto },
        { name: 'Amigo 6', message: 'Legal', photo: foto },
    ];

    const [color1, setColor1] = useState('#4150B7');
    const [color2, setColor2] = useState('none');
    const [color3, setColor3] = useState('none');

    const [showProfile, setShowProfile] = useState(false);
    const [showFriends, setShowFriends] = useState(true);
    const [showChat, setShowChat] = useState(false);

    const handleClickProfile = () => {
        setColor1('#4150B7');
        setColor2('transparent');
        setColor3('transparent');

        setShowProfile(true);
        setShowFriends(false);
        setShowChat(false);
    };

    const handleClickFriends = () => {
        setColor1('transparent');
        setColor2('#4150B7');
        setColor3('transparent');

        setShowProfile(false);
        setShowFriends(true);
        setShowChat(false);
    };

    const handleChat = () => {
        setColor1('transparent');
        setColor2('transparent');
        setColor3('#4150B7');

        setShowProfile(false);
        setShowFriends(false);
        setShowChat(true);
    };

    return (
        <>
            <section className='user-profile'>
                <div className="user-menu">
                    <div className="menu-header">
                        <img src={foto} alt="foto de perfil" className='foto-usuario'/>

                        <div className="usernames">
                            <p className="nickname">
                                {userInfo.nickname}
                            </p>

                            <p className="real-name">
                                {userInfo.realname}
                            </p>
                        </div>

                        <div className="avaliation">
                            <img src={star} alt="estrela de avaliação" className="rate-icon" />

                            <p className="rate">
                                {userInfo.rate}
                            </p>
                        </div>
                    </div>

                    <div className="menu-body">
                        <div className="menu-nav">
                            <p onClick={handleClickProfile} className="perfil-nav">
                                Perfil
                            </p>

                            <p onClick={handleClickFriends} className="amigos-nav">
                                Amigos
                            </p>

                            <p onClick={handleChat} className="chat-nav">
                                Chat
                            </p>
                        </div>

                        <div className="slide-bar-area">
                            <div className="slide-bar1"  style={{backgroundColor: color1}}/>
                            <div className="slide-bar2"  style={{backgroundColor: color2}}/>
                            <div className="slide-bar3"  style={{backgroundColor: color3}}/>
                        </div>

                        <div className="menu-content">
                            <div className="profile-nav">

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

                    <h1 className="mark-name">
                        MatchMaking
                    </h1>
                </div>

                <div className="match-area">

                </div>
            </section>
        </>
    )
}