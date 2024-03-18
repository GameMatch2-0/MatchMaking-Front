import '../css/formPic.css';
import addIcon from '../assets/add_icon.png'
import React from 'react';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const FormPic = ({ onImageChange }) => {
    const storage = getStorage();

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = ref(storage, 'images/' + file.name);
        const snapshot = await uploadBytes(storageRef, file);
        console.log('Uploaded a blob or file!', snapshot);
    };

    return (
        <div className="form-pic">
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <img src={addIcon} alt="icone de adicionar foto" className="add-icon" />
        </div>
    );
};

export default FormPic;
