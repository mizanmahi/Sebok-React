import { useEffect, useState } from 'react';
import {
   getAuth,
   createUserWithEmailAndPassword,
   updateProfile,
   signInWithEmailAndPassword,
   signInWithPopup,
   GoogleAuthProvider,
   onAuthStateChanged,
   signOut,
} from 'firebase/auth';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   const auth = getAuth();

   const googleProvider = new GoogleAuthProvider();

   const handlePasswordSignin = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
         .then((res) => {
            setUser(res.user);
            setError(null);
         })
         .catch((err) => {
            console.log(err.message);
            setError(err.message);
         });
   };

   const handlePasswordSignup = (email, password, userName) => {
      createUserWithEmailAndPassword(auth, email, password, userName)
         .then((result) => {
            console.log(result.user);
            setUser(result.user);
            setError(null);

            updateProfile(auth.currentUser, {
               displayName: userName,
            })
               .then((res) => {
                  console.log('user name set done');
                  setError(null);
               })
               .catch((err) => setError(err.message));
         })
         .catch((err) => {
            console.log(err.message);
            setError(err.message);
         });
   };

   const handleGoogleSignin = () => {
      signInWithPopup(auth, googleProvider)
         .then((res) => {
            setUser(res.user);
            setError(null);
            console.log(res.user);
         })
         .catch((err) => setError(err.message));
   };

   const handleSignOut = () => {
      signOut(auth)
         .then((res) => console.log('signed out'))
         .catch((err) => {
            setError(err.message);
            console.log(err.message);
         });
   };

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
      });
   }, []);

   return {
      user,
      setUser,
      error,
      setError,
      handlePasswordSignin,
      handlePasswordSignup,
      handleGoogleSignin,
      handleSignOut
   };
};

export default useFirebase;
