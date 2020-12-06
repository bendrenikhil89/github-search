import React from 'react';
import {useGlobalContext} from '../../context/ContextData';
import {useHistory} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import InfoCards from '../InfoCard/InfoCards';
import './Dashboard.css';
import User from '../User/User';
import Followers from '../Followers/Followers';
import LanguagesPieChart from '../LanguagesPieChart/LanguagesPieChart';
import MostPopularBarChart from '../MostPopularBar/MostPopularBar';

const Dashboard = () => {
    const {logout, currentUser, githubUserDetails, repos, followers, setGithubUser, getGithubUserData, setGithubUserDetails, setRepos, setFollowers, error, searchTerm} = useGlobalContext();
    const history = useHistory();

    async function logoutHandler(e) {
        e.preventDefault();
        try{
            await logout();
            setGithubUser('');
            setGithubUserDetails([]);
            setRepos([]);
            setFollowers([]);
            history.push('/login');
        }
        catch(error){
            alert(error.message);
        }
    }

    return (
        <div className="main-wrapper">
            <Navbar userName={currentUser.displayName.split(';#')[1]} logoutHandler={logoutHandler} getGithubUserData={getGithubUserData} searchTerm={searchTerm} />
            {error.show ? <div className="dashboard__alert dashboard__danger-alert">
                <h3>{error.msg}</h3>
            </div> : null}
            <InfoCards githubUserDetails={githubUserDetails}/>
            <div className="user-followers-container">
                <User githubUserDetails={githubUserDetails} />
                <Followers followers={followers} />
            </div>
            <div className="charts-container">
                <div className="charts__languages"><LanguagesPieChart repos={repos} /></div>
                <div className="charts__star__projects"><MostPopularBarChart repos={repos} /></div>
            </div>
        </div> 
    )
}

export default Dashboard;
