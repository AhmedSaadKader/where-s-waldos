import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../../firebase-config";
import styles from "./Authentication.module.css";

export default function Authentication(props) {
  const [profileImage, setProfileImage] = useState();
  const [userName, setUserName] = useState();

  const provider = new GoogleAuthProvider();

  const signWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  const signOutGoogle = async () => {
    await signOut(auth);
    props.setUser();
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.setUser(user);
        console.log(user.displayName);
        console.log(props.user);
        setProfileImage(user.photoURL);
        setUserName(user.displayName);
      } else {
        // props.setUser();
      }
    });
  });

  return (
    <div>
      {!props.user ? (
        <button onClick={signWithGoogle}>Sign with Google</button>
      ) : (
        <div className={styles.profileDiv}>
          <img src={profileImage} alt="profile pic" referrerpolicy="no-referrer" />
          <div>
            <div>{userName}</div>
            <button onClick={signOutGoogle}>Sign Out</button>
          </div>
        </div>
      )}
    </div>
  );
}
