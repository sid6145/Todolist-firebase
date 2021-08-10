import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDrXfbxfyHg6hzkm9wrZhRm01km4cbhYOs",
    authDomain: "todo-app-19975.firebaseapp.com",
    projectId: "todo-app-19975",
    storageBucket: "todo-app-19975.appspot.com",
    messagingSenderId: "808529889386",
    appId: "1:808529889386:web:81564994a79a23eaea6213"
  };

  firebase.initializeApp(firebaseConfig)

  export const db = firebase.firestore();