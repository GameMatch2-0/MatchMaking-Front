import '../css/dataInput.css'
import React from 'react';

const DataInput = ({ nameInput, typeInput }) => {
    return (
        <div className="data-input">
            <p>{nameInput}</p>
            <input type={typeInput} />
        </div>
    );
};

export default DataInput;