import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"




  // Ensure firebaseConfig is defined before this script
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Monitor Authentication State
onAuthStateChanged(auth, (user) => {
  if (user) {
    // If user is logged in, retrieve and display user info
    const loggedInUserId = localStorage.getItem('loggedInUserId') || user.uid;
    localStorage.setItem('loggedInUserId', loggedInUserId);

    // Update UI to reflect logged-in state
    document.getElementById("userbtn").style.display = "none";
    document.getElementById("logout").style.display = "block";
    document.getElementById("login").style.display="none";
    document.getElementById("loggedUserFName").innerText = user.displayName || user.email;
    document.getElementById("loggedUserEmail").innerText= user.email;
  } else {
    // If no user is logged in, redirect to login page
    window.location.href = 'Login/index.html';
  }
});

// Logout Functionality
const logoutButton = document.getElementById('logout'); // Ensure this element exists in HTML
logoutButton.addEventListener('click', () => {
  // Remove user ID from local storage
  localStorage.removeItem('loggedInUserId');

  signOut(auth)
    .then(() => {
     
      window.location.href = '../Login/index.html';
      console.log("logout-Sucessful")
      document.getElementById("login").style.display = "block";
      document.getElementById("logout").style.display = "none";
    })
    .catch((error) => {
      // Log sign-out errors
      console.error('Error Signing out:', error);
    });
});
