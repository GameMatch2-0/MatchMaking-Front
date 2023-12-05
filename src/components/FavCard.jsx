import '../css/favCard.css'
import React from 'react'

const FavCard = ({ name, image }) => {
    return (
        <div className="fav-card">
            <img src={image} alt="foto do jogo" />
            <p>{name}</p>
        </div>
    );
};

export default FavCard;