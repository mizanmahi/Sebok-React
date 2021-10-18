import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import initializeFirebase from '../firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
   const [user, setUser] = useState(null);

   const auth = getAuth();

   const handlePasswordSignin = () => {};

   const handlePasswordSignup = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((result) => {
            console.log(result.user);
            console.log('signup success');
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   return {
      user,
      setUser,
      handlePasswordSignin,
      handlePasswordSignup,
   };
};

export default useFirebase;
