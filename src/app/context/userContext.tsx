import { useState, useEffect, createContext, useContext } from 'react';
import { auth } from '../firebase/clientApp';

export const userConst = {
  uid: '',
  displayName: '',
  email: '',
  photoURL: '',
};

export const UserContext = createContext((null as unknown) as typeof userConst);

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = auth.onAuthStateChanged(async (currentUser) => {
      try {
        console.log(currentUser);
        if (currentUser) {
          // User is signed in.
          const { uid, displayName, email, photoURL } = currentUser;
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ uid, displayName, email, photoURL });
        } else setUser(null);
      } catch (error) {
        // Most probably a connection error. Handle appropiately.
      } finally {
        setLoadingUser(false);
      }
    });

    // Unsubscribe auth listener on unmount
    return () => unsubscriber();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook that shorhands the context!
export const useUser = () => useContext(UserContext);
