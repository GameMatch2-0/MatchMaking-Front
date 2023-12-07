import '../css/gender.css'
import React, { useState } from 'react';

const GenderSelectButtons = ({ onGenderSelect }) => {
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderSelect = (gender) => {
        setSelectedGender(gender);
        onGenderSelect(gender);
    };

    return (
        <div className="gender-div">
            <label htmlFor="gender">Gênero</label>

            <div className="gender-options">
                <button
                    type="button"
                    onClick={() => handleGenderSelect('Homem')}
                    style={selectedGender === 'Homem' ? { backgroundColor: 'white', color: '#4150B7' } : {}}
                >
                    Homem
                </button>
                <button
                    type="button"
                    onClick={() => handleGenderSelect('Mulher')}
                    style={selectedGender === 'Mulher' ? { backgroundColor: 'white', color: '#4150B7' } : {}}
                >
                    Mulher
                </button>
                <button
                    type="button"
                    onClick={() => handleGenderSelect('Outro')}
                    style={selectedGender === 'Outro' ? { backgroundColor: 'white', color: '#4150B7' } : {}}
                >
                    Outro
                </button>
            </div>
        </div>
    );
};

export default GenderSelectButtons;
