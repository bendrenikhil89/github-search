import React, {useContext, useState, useEffect} from 'react';
import {auth} from '../client/firebase';

const GlobalContextProvider = React.createContext();

export function useGlobalContext() {
    return useContext(GlobalContextProvider);
}


export function ContextDataProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [githubUser, setGithubUser] = useState('');

    function signUp(email, password, githubname){
        return auth.createUserWithEmailAndPassword(email, password)
        .then(function(result) {
            return result.user.updateProfile({
                displayName: githubname
            })
        }).catch(function(error) {
            console.log(error);
        });
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
            if(user !== null){
                setGithubUser(user.displayName);
            }
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
        githubUser
    }

    return (
        <GlobalContextProvider.Provider value={value}>
            {!loading && children}
        </GlobalContextProvider.Provider>
    )
}
