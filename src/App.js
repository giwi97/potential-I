import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


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

    })

  }

  render() {
  return (

    <div className="App">
      {this.state.isSignedIn ? (
        <div>Signed in!</div>
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
