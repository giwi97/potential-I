import firebase from "firebase";

const firebaseConfiguration = firebase.initializeApp({
    apiKey: "AIzaSyDDgIwSGrwpmHF_RPupSPKtbhgtb289cY8",
    authDomain: "task-planner-b7636.firebaseapp.com",
  });

  export { firebaseConfiguration as firebase }