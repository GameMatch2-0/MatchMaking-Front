import '../css/dataInput.css'
import React, { useState } from 'react';

const DataInput = ({ nameInput, typeInput, onInputChange }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onInputChange(e);
    };

    return (
        <div className="data-input">
            <p>{nameInput}</p>
            <input
                name={nameInput}
                type={typeInput}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default DataInput;