import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { database } from "../../firebase-config";
import { ref, set } from "firebase/database";
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

  function writeUserData(userId, name, email, imageUrl) {
    set(ref(database, "users/" + userId), {
      username: name,
      email: email,
      profile_picture: imageUrl,
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        props.setUserID(user.uid);
        writeUserData(props.userID, user.displayName, user.email, user.photoURL);
        props.setUser(user);
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
          <img src={profileImage} alt="profile pic" referrerPolicy="no-referrer" />
          <div>
            <div>{userName}</div>
            <button onClick={signOutGoogle} className={styles.signOutButton}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
