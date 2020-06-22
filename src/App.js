import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


firebase.initializeApp({

  apiKey: "AIzaSyDDgIwSGrwpmHF_RPupSPKtbhgtb289cY8",
  authDomain: "task-planner-b7636.firebaseapp.com"

})

class App extends Component {
  state = { isSignedIn : false }
  uiConfig = {

    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {

      signInSuccess: () => false

    }

  }

  componentDidMount = () => {

    firebase.auth().onAuthStateChanged(user => {

      this.setState({isSignedIn: !!user})
      console.log("user", user)

    })

  }

  render() {
  return (

    <div className="App">
      {this.state.isSignedIn ? (
        <span>
        <div>Signed in!</div>
        <button onClick = {() => firebase.auth().signOut()}>Sign out</button>
        <h1>Welcome {firebase.auth().currentUser?.displayName}</h1>
        <img alt = "Profile Image" src = {firebase.auth().currentUser.photoURL}/>
        </span>
      ) : (
        <StyledFirebaseAuth
          uiConfig = {this.uiConfig}
          firebaseAuth = {firebase.auth()}
        />
      )}
    </div>

  );
  }
}

export default App;
