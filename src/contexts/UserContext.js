import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Al Amin Miah' });

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    // why are we doing this?
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed:', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user, createUser, signUser, logOut, signInWithGoogle };

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