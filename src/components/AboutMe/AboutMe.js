import React from 'react';
import ProfileImage from './ProfileImage';
import PersonalInfo from './PersonalInfo';
import Bio from './Bio';
import SkillsList from './SkillsList';
import ResumeButton from './ResumeButton';
import SocialLinks from './SocialLinks';

const info = [
  { label: "Name", value: "Baleria Reyes" },
  { label: "Location", value: "Bend, Oregon" },
  { label: "Education", value: "Oregon State University computer science student" },
  { label: "Languages", value: "Fluent in English and Spanish" },
];

const AboutMe = () => {
    return (
        <section id="about-me">
            <PersonalInfo info={info} />
            {/* other components... */}
        </section>
    );
}

export default AboutMe;