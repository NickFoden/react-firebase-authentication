import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB8CP5aYyI7ldVrZV5NJ3l_jJVMcHARBR0",
  authDomain: "react-auth-8b9e1.firebaseapp.com",
  databaseURL: "https://react-auth-8b9e1.firebaseio.com",
  projectId: "react-auth-8b9e1",
  storageBucket: "react-auth-8b9e1.appspot.com",
  messagingSenderId: "937888939073"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth };
