import React, {useContext, useState, useEffect} from 'react';
import {auth} from '../client/firebase';

const GlobalContextProvider = React.createContext();

export function useGlobalContext() {
    return useContext(GlobalContextProvider);
}


export function ContextDataProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [githubUser, setGithubUser] = useState('');
    const [githubUserDetails, setGithubUserDetails] = useState([]);
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState({show: false, msg: ''});

    function signUp(email, password,githubName, userName){
        return auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            setGithubUser(githubName);
            res.user.updateProfile({
                displayName: `${githubName};#${userName}`
            })
        })
    }

    function signIn(email, password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout() {
        return auth.signOut();
    }

    async function getGithubUserData(user){
        setLoading(true);
        setSearchTerm(user);
        setError({show: false, msg: ''});
        const headers= {
            "Authorization" : "Token "+ process.env.REACT_APP_GIT_ACCESS_TOKEN
        };
        try{
            const reqUser = await fetch(`https://api.github.com/users/${user}`, {
                "method": "GET",
                "headers" : headers
            });
            const resUser = await reqUser.json();
            if(!resUser.message){
                setGithubUserDetails(resUser);
                const { login, followers_url } = resUser;
                const [dataRepos, dataFollowers] = await Promise.all([
                    fetch(`https://api.github.com/users/${login}/repos?per_page=100`,{
                        "method": "GET",
                        "headers" : headers
                    })
                    .then(res => res.json()),
                    fetch(`${followers_url}?per_page=100`,{
                        "method": "GET",
                        "headers" : headers
                    })
                    .then(res => res.json())
                ])
                setRepos(dataRepos);
                setFollowers(dataFollowers);
            }
            else{
                setError({show:true, msg:'No user found with that username'});
            }
        }
        catch(err){
            console.log(err)
        }
        setLoading(false);
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsAuthenticated(true);
            if(user && user.displayName !== null){
                getGithubUserData(user.displayName.split(';#')[0]);
                setSearchTerm('');
            }
        })
        return unsubscribe;
    }, []);

    useEffect(() => {
        if(githubUser && githubUser.displayName !== null){
            getGithubUserData(githubUser);
            setSearchTerm('');
        }
    }, [githubUser])

    const value = {
        signUp,
        signIn,
        logout,
        setGithubUser,
        getGithubUserData,
        setLoading,
        setGithubUserDetails,
        setRepos,
        setFollowers,
        currentUser,
        githubUser,
        githubUserDetails,
        repos,
        followers,
        loading,
        error,
        searchTerm
    }

    return (
        <GlobalContextProvider.Provider value={value}>
            {isAuthenticated && children}
        </GlobalContextProvider.Provider>
    )
}
