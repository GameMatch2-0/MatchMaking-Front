import '../css/dataInput.css'
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

const DataInput = ({ nameInput, typeInput, onInputChange, mask, style }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
        onInputChange(e);
    };

    return (
        <div className="data-input">
            <p>{nameInput}</p>
            {mask ? (
                <InputMask
                    mask={mask}
                    value={value}
                    onChange={handleChange}
                >
                    {(inputProps) => <input {...inputProps} name={nameInput} type={typeInput} style={style || {}} />}
                </InputMask>
            ) : (
                <input
                    name={nameInput}
                    type={typeInput}
                    value={value}
                    onChange={handleChange}
                    style={style || {}}
                />
            )}
        </div>
    );
};

export default DataInput;