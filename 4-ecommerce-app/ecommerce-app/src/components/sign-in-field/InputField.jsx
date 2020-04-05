import React from 'react';
import './inputfield.css';

const Inputfield = ({ label, type, onChange }) => {
    return (
        <div className='input-field'>
            <span className='input-label'>{label}</span>
            <input className='input-value' type={type} onChange={onChange} required />
        </div>
    );
};

export default Inputfield;