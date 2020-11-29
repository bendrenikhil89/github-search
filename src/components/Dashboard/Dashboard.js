import React, {useState} from 'react';
import {useGlobalContext} from '../../context/ContextData';
import {useHistory} from 'react-router-dom';

const Dashboard = () => {
    const {logout} = useGlobalContext();
    const [error, setError] = useState('');
    const history = useHistory();

    const {githubUser} = useGlobalContext();
    
    async function logoutHandler(e) {
        e.preventDefault();
        try{
            setError('');
            await logout();
            history.push('/login');
        }
        catch{
            setError('Failed to logout.');
        }
    }
    return (
        <div>
            Dashboard - {githubUser}
            <button type="submit" onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default Dashboard;
