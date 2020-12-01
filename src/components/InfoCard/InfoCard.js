import React from 'react';
import './InfoCard.css';
import Circle from '../../assets/images/circle.svg'

const InfoCard = ({infoColumn, infoValue, iconClass, gradientClass}) => {
    return (
        <div className={gradientClass}>
            <div className="infocard__body">
                <img src={Circle} className="infocard__card-img-absolute" alt="circle-image" />
                <div className="infocard__number">{infoValue}
                    <i className={iconClass}></i>
                </div>
                <div className="infocard__text">{infoColumn}</div>
            </div>
        </div>
    )
}

export default InfoCard
