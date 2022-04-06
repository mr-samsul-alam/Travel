import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";

// initialize firebase app
initializeAuthentication()

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    let navigate = useNavigate();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // This is for sign in with Google
    const signUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const destination = location?.state?.from || '/';
                navigate(destination)
                setAuthError('');
                const user = result.user
                setUser(user);
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // Email Pass log In and Reg

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name }
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                setAuthError('');
                navigate('/')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, location,) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                console.log(destination);
                navigate(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // this is using for Log Out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setAuthError(error);
            }).finally(() => setIsLoading(false));
    }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        signUsingGoogle,
        registerUser,
        logout,
        loginUser,
        isLoading,
        authError
    }
};

export default useFireBase;