import '../css/match.css'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'
import React from 'react';

const MatchMenu = () => {
    return (
        <div className="match-menu">
            <div className="match-info">
                <div className="album">

                </div>

                <div className="profile-info">
                    
                </div>
            </div>

            <div className="match-options">
                <img src={like} alt="icone de like" />
                <img src={like} alt="icone de like" />
                <img src={dislike} alt="icone de dislike" />
            </div>
        </div>
    );
};

export default MatchMenu;