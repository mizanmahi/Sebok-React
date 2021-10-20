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
import { useHistory } from 'react-router';

initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState(null);
   const [error, setError] = useState(null);

   const [userLoading, setUserLoading] = useState(true);
   const [name, setName] = useState(null);

   const auth = getAuth();
   const history = useHistory();
   const googleProvider = new GoogleAuthProvider();

   const handlePasswordSignin = (email, password) => {
      setUserLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const handlePasswordSignup = (email, password, userName) => {
      console.log(email, password, userName);
      setName(userName);
      createUserWithEmailAndPassword(auth, email, password, userName)
         .then((result) => {
            setError(null);

            updateProfile(auth.currentUser, {
               displayName: userName,
            })
               .then((res) => {
                  setError(null);
               })
               .catch((err) => setError(err.message))
               .finally(() => {
                  history.push('/');
                  window.location.reload()
               });
         })
         .catch((err) => {
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
         })
         .finally(() => {
            setUserLoading(false);
         });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
            setUser(user);
            setName(name);
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
      name,
      setName,
   };
};

export default useFirebase;
