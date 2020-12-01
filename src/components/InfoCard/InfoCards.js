import React from 'react';
import InfoCard from './InfoCard';

const InfoCards = ({githubUserDetails}) => {
    return (
        <div className="infocard__container">
            <InfoCard infoColumn="Repos" infoValue={githubUserDetails.public_repos} iconClass="fas fa-book infocard__icon" gradientClass="infocard__wrapper infocard__gradient-blue" />
            <InfoCard infoColumn="Followers" infoValue={githubUserDetails.followers} iconClass="fas fa-users infocard__icon" gradientClass="infocard__wrapper infocard__gradient-green" />
            <InfoCard infoColumn="Following" infoValue={githubUserDetails.following} iconClass="fas fa-user-plus infocard__icon" gradientClass="infocard__wrapper infocard__gradient-yellow" />
            <InfoCard infoColumn="Gists" infoValue={githubUserDetails.public_gists} iconClass="fas fa-code infocard__icon" gradientClass="infocard__wrapper infocard__gradient-red" />
        </div>
    )
}

export default InfoCards
