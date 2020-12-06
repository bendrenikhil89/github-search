import React from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="pagenotfound__wrapper">
            <div className="pagenotfound__main">
            <h1>404</h1>
            <p>It looks like you're lost...<br/>That's a trouble?</p>
            <Link className="pagenotfound__redirect" to="/">Go back</Link>
            </div>  
        </div>
    )
}

export default PageNotFound;
