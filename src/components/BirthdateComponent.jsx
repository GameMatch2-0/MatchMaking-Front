import '../css/birthDate.css'
import React, { useState } from 'react';

const BirthdateComponent = ({ onInputChange }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleInputChangeWithFormat = () => {
        const formattedDate = `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        const event = {
            target: {
                name: 'dtNascimento',
                value: formattedDate,
            }
        };
        onInputChange(event, 'usuario');
    };

    const handleDayChange = (e) => {
        const dayValue = e.target.value;
        setDay(dayValue);
        handleInputChangeWithFormat();
    };

    const handleMonthChange = (e) => {
        const monthValue = e.target.value;
        setMonth(monthValue);
        handleInputChangeWithFormat();
    };

    const handleYearChange = (e) => {
        const yearValue = e.target.value;
        setYear(yearValue);
        handleInputChangeWithFormat();
    };

    return (
        <div>
            <label htmlFor="birthdate">Data de nascimento</label>
            <div id="birthdate" className='birthdate-div'>
                <input type="number" value={day} onChange={handleDayChange} placeholder="Dia" min="1" max="31" />
                <input type="number" value={month} onChange={handleMonthChange} placeholder="Mês" min="1" max="12" />
                <input type="number" value={year} onChange={handleYearChange} placeholder="Ano" min="1900" max={new Date().getFullYear()} />
            </div>
        </div>
    );
};

export default BirthdateComponent;

