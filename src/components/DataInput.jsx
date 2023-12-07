import '../css/dataInput.css'
import React, { useState } from 'react';

const DataInput = ({ nameInput, typeInput, onInputChange }) => {
    const [value, setValue ] = useState('');

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onInputChange(nameInput, newValue);
    };

    return (
        <div className="data-input">
            <p>{nameInput}</p>
            <input type={typeInput} value={value} onChange={handleChange}/>
        </div>
    );
};

export default DataInput;