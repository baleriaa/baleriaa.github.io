import React from 'react';

const info = [
  { label: "Name", value: "Baleria Reyes" },
  { label: "Location", value: "Bend, Oregon" },
  { label: "Education", value: "Oregon State University computer science student" },
  { label: "Languages", value: "Fluent in English and Spanish" },
];

<PersonalInfo info={info} />


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
