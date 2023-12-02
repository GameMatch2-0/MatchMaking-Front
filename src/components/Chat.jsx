import '../css/chat.css'
import React from 'react';

const Chat = ({ name, message, photo }) => {
    return (
        <div className="chat">
            <img src={photo} alt={`Foto de ${name}`} className="friend-photo" />

            <div className="last-chat">
                <p className="friend-name">{name}</p>
                <p className="chat-message">{message}</p>
            </div>
        </div>
    );
};

export default Chat;