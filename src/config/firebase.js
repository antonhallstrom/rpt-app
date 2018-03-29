import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBWMafU_rn6EPduro1_043kRzbbh9DEC6k",
  authDomain: "rpt-app-9ff7d.firebaseapp.com",
  databaseURL: "https://rpt-app-9ff7d.firebaseio.com",
  projectId: "rpt-app-9ff7d",
  storageBucket: "",
  messagingSenderId: "831207357741"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
