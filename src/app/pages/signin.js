import { useContext } from "react";
import App from "../components/App";
import { FirebaseContext, UserContext } from "./_app";
import router from "next/router";
import { auth, firebase, firestore } from "./_app";

const Signin = () => {
  const { user, setUser } = useContext(UserContext);
  const authHandler = async authUser => {
    // check if user exists in users collection
    const profileFromFirebase = await firestore
      .collection("users")
      .doc(authUser.uid)
      .get();
    if (true || profileFromFirebase.exists) {
      // push to home
      setUser(authUser);
      router.push("/");
    } else {
      router.push("/signup");
    }
  };

  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth
      .signInWithPopup(authProvider)
      .then(result => {
        const authUser = {
          uid: result.user.uid,
          email: result.user.email,
          name: result.user.displayName,
          photo: result.user.photoURL
        };
        authHandler(authUser);
      })
      .catch(err => console.log(err));
  };

  return (
    <App>
      <button onClick={() => authenticate("Google")}>
        Sign in with Google
      </button>
    </App>
  );
};
export default Signin;
