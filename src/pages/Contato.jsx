import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import React, { useState } from 'react';
import "../css/contato.css"
import Interesses from '../components/Interesses';

export default function Contato() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    return (
        <>
            <Navbar />

       
                <div className="div-contato">
                    <h1>Fale com a gente!</h1>
                    <div className="text-div">
                        <textarea cols="30" rows="10" className="txt-area"></textarea>
                    </div>
                    <button onClick={openModal}>Enviar</button>
                    <Interesses isOpen={isModalOpen} onClose={closeModal} />
                    <p>Tente também pelo nosso whatsapp: +55 11 95914-7955</p>
                </div>

            <Footer />
        </>
    )
}