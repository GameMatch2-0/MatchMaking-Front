import '../css/friend.css'
import React from 'react';

const Friend = ({ name, photo }) => {
    return (
        <div className="friend">
            <img src={photo} alt={`Foto de ${name}`} className="friend-photo" />
            <p className="friend-name">{name}</p>
        </div>
    );
};

export default Friend;