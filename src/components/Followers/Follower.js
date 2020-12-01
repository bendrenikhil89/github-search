import React from 'react';
import './Follower.css';

const Follower = ({follower}) => {
    return (
        // <div className="follower__container">
        //     <div className="follower__card__title">
        //         Followers
        //     </div>
        //     <div className="follower__card__body">
                <div className="follower__photo__row">
                    <div className="follower__photo">
                        <img src={follower.avatar_url} />
                        <div className="follower__name__details">
                            <div><strong>{follower.login}</strong></div>
                            <div>{follower.html_url}</div>
                        </div>
                    </div>
                    <div className="follower__follow">
                        <a href={follower.html_url} target="_blank">Follow</a>
                    </div>
                </div>
        //     </div>
        // </div>
    )
}

export default Follower;
