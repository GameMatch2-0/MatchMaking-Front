import '../css/birthDate.css';
import React, { useState } from 'react';

const BirthdateComponent = ({ onInputChange }) => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleInputChangeWithFormat = () => {
        if (day && month && year) {
            const dateConcatenated = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
            localStorage.setItem('birthdate', dateConcatenated);
            onInputChange(dateConcatenated);
        }
    };

    const handleDayChange = (e) => setDay(e.target.value);
    const handleMonthChange = (e) => setMonth(e.target.value);
    const handleYearChange = (e) => setYear(e.target.value);

    const handleBlur = () => {
        handleInputChangeWithFormat();
    };
    
    return (
        <div>
            <label htmlFor="birthdate">Data de nascimento</label>
            <div id="birthdate" className='birthdate-div'>
                <input type="number" value={day} onChange={handleDayChange} placeholder="Dia" min="1" max="31" />
                <input type="number" value={month} onChange={handleMonthChange} placeholder="Mês" min="1" max="12" />
                <input type="number" value={year} onChange={handleYearChange} onBlur={handleBlur} placeholder="Ano" min="1900" max={new Date().getFullYear()} />
            </div>
        </div>
    );
};

export default BirthdateComponent;
