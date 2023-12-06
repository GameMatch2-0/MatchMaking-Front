import '../css/birthDate.css'
import React from 'react';

const BirthdateComponent = ({ onDayChange, onMonthChange, onYearChange }) => {
    return (
        <div>
            <label htmlFor="birthdate">Data de nascimento</label>
            <div id="birthdate" className='birthdate-div'>
                <input type="number" onChange={onDayChange} placeholder="Dia" min="1" max="31" />
                <input type="number" onChange={onMonthChange} placeholder="Mês" min="1" max="12" />
                <input type="number" onChange={onYearChange} placeholder="Ano" min="1900" max={new Date().getFullYear()} />
            </div>
        </div>
    );
};

export default BirthdateComponent;
