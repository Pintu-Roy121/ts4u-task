import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app)


const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [isLoadign, setIsLoading] = useState(true)


    // Register User auth------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user auth--------------
    const signin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user info---------------
    const updateUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // Logout user auth------------------
    const LogOut = () => {
        return signOut(auth);
    }


    // set login user to setuser---------------
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { isLoadign, user, updateUser, createUser, signin, LogOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;