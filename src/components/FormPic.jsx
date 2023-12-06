import '../css/formPic.css';
import addIcon from '../assets/add_icon.png'
import React from 'react';

const FormPic = ({ onImageChange }) => {
    return (
        <div className="form-pic">
            <input type="file" onChange={onImageChange} accept="image/*" />
            <img src={addIcon} alt="icone de adicionar foto" className="add-icon" />
        </div>
    );
};

export default FormPic;
