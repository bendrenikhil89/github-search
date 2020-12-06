import React from 'react';
import Follower from './Follower';

const Followers = ({followers}) => {
    return (
        <div className="follower__container">
            <div className="follower__card__title">
                Followers
            </div>
            <div className="follower__card__body">
                {followers.length > 0 ? followers.map(follower => {
                    return <Follower follower={follower} key={follower.id} />
                }) : <h4 className="follower__none">User has no followers.</h4>}
            </div>
        </div>
    )
}

export default Followers
