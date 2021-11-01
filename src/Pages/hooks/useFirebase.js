import React, { useEffect, useState } from 'react';
import InitializeAuthentication from '../../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";



InitializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [errorLoginMsg, setErrorLoginMsg] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false)
          });
          return () => unsubscribed;
    },[])

    const registerWithEmail = (name, email, password) => {
        setIsLoading(true)
        // console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            updateName(name)
            setUser(result.user);
            setSuccessMsg('Your account is successfully created')
        })
        .catch((error) => {
            setErrorMsg('This email already exists.');
        })
        .finally(()=>setIsLoading(false))
    
    }
    const updateName = (name) => {
        setIsLoading(true)
        updateProfile(auth.currentUser, {displayName: name})
        .then((result) => {})
        .finally(()=>setIsLoading(false))
    }

    const loginWithEmail = (email, password) => {
        setErrorLoginMsg(false)
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     setUser(result.user);
        // }) 
        // .catch((error) => {
        //     setErrorLoginMsg(true);
        // })
        // .finally(()=>setIsLoading(false))
    }

    const createUserWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUserWithGitHub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }

    const Logout = () => {
    setIsLoading(true)
    signOut(auth)
    .then((result) => {
        // setSuccessMsg('')
    })
    .finally(()=>setIsLoading(false))
    }

    // console.log(user)
    return {
        getAuth,
        user,
        isLoading,
        registerWithEmail,
        loginWithEmail,
        createUserWithGoogle,
        createUserWithGitHub,
        successMsg,
        errorLoginMsg,
        errorMsg, 
        setErrorMsg,
        setSuccessMsg,
        Logout,
    };
};

export default useFirebase;