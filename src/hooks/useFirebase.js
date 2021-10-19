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

   const [userLoading, setUserLoading] = useState(true);

   const auth = getAuth();

   const googleProvider = new GoogleAuthProvider();

   const handlePasswordSignin = (email, password) => {
      setUserLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
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
      setUserLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const handleSignOut = () => {
      setUserLoading(true);
      signOut(auth)
         .then((res) => console.log('signed out'))
         .catch((err) => {
            setError(err.message);
            console.log(err.message);
         })
         .finally(() => {
            setUserLoading(false);
         });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
         } else {
            setUser(null);
         }
         setUserLoading(false);
      });

      return unsubscribe;
   }, []);

   return {
      user,
      setUser,
      error,
      setError,
      handlePasswordSignin,
      handlePasswordSignup,
      handleGoogleSignin,
      handleSignOut,
      userLoading,
      setUserLoading,
   };
};

export default useFirebase;
