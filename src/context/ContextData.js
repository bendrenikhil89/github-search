import React, {useContext, useState, useEffect} from 'react';
import {auth} from '../client/firebase';
import mockUser from './MockData/User';
import mockRepos from './MockData/mockRepos';
import mockFollowers from './MockData/mockFollowers';

const GlobalContextProvider = React.createContext();

export function useGlobalContext() {
    return useContext(GlobalContextProvider);
}


export function ContextDataProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [githubUser, setGithubUser] = useState('');
    const [githubUserDetails, setGithubUserDetails] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);


    function signUp(email, password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function signIn(email, password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout() {
        return auth.signOut();
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
    
    const value = {
        currentUser,
        signUp,
        signIn,
        logout,
        setGithubUser,
        githubUser,
        githubUserDetails,
        repos,
        followers,
        loading
    }

    return (
        <GlobalContextProvider.Provider value={value}>
            {children}
        </GlobalContextProvider.Provider>
    )
}
