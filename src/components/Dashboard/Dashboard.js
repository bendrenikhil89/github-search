import React, {useState} from 'react';
import {useGlobalContext} from '../../context/ContextData';
import {useHistory} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import InfoCards from '../InfoCard/InfoCards';
import './Dashboard.css';
import User from '../User/User';
import Followers from '../Followers/Followers';


const Dashboard = () => {
    const {logout, currentUser, githubUserDetails, repos, followers, setGithubUser} = useGlobalContext();
    const [error, setError] = useState('');
    const history = useHistory();

    async function logoutHandler(e) {
        e.preventDefault();
        try{
            setError('');
            await logout();
            setGithubUser('');
            history.push('/login');
        }
        catch{
            setError('Failed to logout.');
        }
    }
    return (
        <div className="main-wrapper">
            <Navbar userName={currentUser.displayName.split(';#')[1]} logoutHandler={logoutHandler} />
            <InfoCards githubUserDetails={githubUserDetails}/>
            <div className="user-followers-container">
                <User githubUserDetails={githubUserDetails} />
                <Followers followers={followers} />
            </div>
        </div>
    )
}

export default Dashboard;
