import React from 'react';

const label = props => {
    const name = props.name;
    return (
        <div className="col-md-2">
            <label htmlFor={name} className="font-weight-bold">{name}</label>
        </div>
    )
}

export default label;