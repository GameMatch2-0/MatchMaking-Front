import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Planos from '../pages/Planos';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Cadastro from '../pages/Cadastro';

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