import React from 'react';

const Input = ({ label, name , value, placeholder, onChange, error }) => {
    return (
        <div className="form-group">
            {label.length > 0 ?
            <label
                htmlFor={label}
                style={{ textTransform: 'capitalize' }}
            >
                {label}
            </label>: ''}
            <input
                value={value}
                onChange={onChange}
                name={name}
                autoFocus
                id={name}
                type="text"
                className="form-control"
                placeholder={placeholder}
            />
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
        </div>
    );
}

export default Input;