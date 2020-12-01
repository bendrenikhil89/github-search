import React from 'react';
import './User.css';

const User = ({githubUserDetails}) => {
    return (
        <div className="user__container">
            <div className="user__card__title">
                User
            </div>
            <div className="user__card__body">
                <div className="user__photo__row">
                    <div className="user__photo">
                        <img src={githubUserDetails.avatar_url} />
                        <div className="user__name__details">
                            <div><strong>{githubUserDetails.name}</strong></div>
                            <div>@ {githubUserDetails.twitter_username ? githubUserDetails.twitter_username : "Not Available"}</div>
                        </div>
                    </div>
                    <div className="user__follow">
                        <a href={githubUserDetails.html_url} target="_blank">Follow</a>
                    </div>
                </div>
                <div className="user__bio">
                    <p>{githubUserDetails.bio}</p>
                </div>
                <div className="user__office">
                    <p><i className="fas fa-building"></i>{githubUserDetails.company}</p>
                </div>
                <div className="user__location">
                    <p><i className="fas fa-map-marker-alt"></i>{githubUserDetails.location}</p>
                </div>
                <div className="user__website">
                    <p><i className="fas fa-link"></i>{githubUserDetails.blog}</p>
                </div>
            </div>
        </div>
    )
}

export default User;
