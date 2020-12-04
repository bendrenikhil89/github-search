import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className='loading__container'>
            <div className='loading__loader'>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--dot'></div>
                <div className='loading__loader--text'></div>
            </div>
        </div>
    )
}

export default LoadingSpinner;
