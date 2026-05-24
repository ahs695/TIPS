// firebase-config.js – Firebase initialization for Phone Auth
// Replace the placeholder values with your actual Firebase project configuration.
const firebaseConfig = {
  apiKey: "AIzaSyBwRvsNrQZ01RFbVFYeFHkIn7JC4Jt5zco",
  authDomain: "tips-enquiry-site.firebaseapp.com",
  projectId: "tips-enquiry-site",
  storageBucket: "tips-enquiry-site.appspot.com",
  messagingSenderId: "101648164589",
  appId: "1:101648164589:web:88f4a00fb8d2ba38ed4ee4",
  measurementId: "G-5HEND37JJ7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Optional: Initialize analytics if you want to use it
if (firebase.analytics) {
  firebase.analytics();
}
