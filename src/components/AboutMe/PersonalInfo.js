import React from 'react';

const PersonalInfo = ({ info }) => {
    return (
        <div className="personal-info">
            <h2 className="personal-info-title">Personal Info</h2>
            {info.map((item, index) => (
                <p key={index}><strong>{item.label}:</strong> {item.value}</p>
            ))}
        </div>
    )
}

export default PersonalInfo;
