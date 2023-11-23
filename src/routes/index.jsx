import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planos" element={<Planos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
    );
}

export default RoutesComponent;