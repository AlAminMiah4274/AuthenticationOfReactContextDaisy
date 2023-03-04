import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    // user creating 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user signing
    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user logging 
    const logOut = () => {
        return signOut(auth);
    }

    // why are we doing this?
    // get current user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('auth state changed:', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    // google signing 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user, loading, setUser, createUser, signUser, logOut, signInWithGoogle };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;

/*
 shorthand of declaring object: 

const a = 56;
const b = 'abc';
const obj = {a,b};
*/