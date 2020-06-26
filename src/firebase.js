import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfiguration = firebase.initializeApp({
    apiKey: "AIzaSyDDgIwSGrwpmHF_RPupSPKtbhgtb289cY8",
    authDomain: "task-planner-b7636.firebaseapp.com",
    databaseURL: "https://task-planner-b7636.firebaseio.com",
    projectId: "task-planner-b7636",
    storageBucket: "task-planner-b7636.appspot.com",
    messagingSenderId: "483887023396",
    appId: "1:483887023396:web:2145500a7c2a76b71c5fb1",
    measurementId: "G-T4715DMWM7"
  });

  export { firebaseConfiguration as firebase }