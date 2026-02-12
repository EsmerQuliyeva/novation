import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./TopNavbar.css";

const TopNavbar = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user.email);
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="top-navbar-container">
      <div className="user-profile-navbar">
        <img
          src="https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?semt=ais_hybrid&w=740"
          alt="profile"
        />
        <p>{currentUser}</p>
      </div>
    </div>
  );
};

export default TopNavbar;
