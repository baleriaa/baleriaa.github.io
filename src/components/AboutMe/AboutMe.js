import React from 'react';
import ProfileImage from './ProfileImage';
import Bio from './Bio';
import SkillsList from './SkillsList';
import ResumeButton from './ResumeButton';
import SocialLinks from './SocialLinks';

const AboutMe = () => {
    return (
        <section id="about-me">
            <ProfileImage />
            <PersonalInfo />
            <Bio />
            <SkillsList />
            <ResumeButton />
            <SocialLinks />
        </section>
    );
}

export default AboutMe;
