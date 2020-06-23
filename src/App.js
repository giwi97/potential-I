import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navbar, Nav, Button } from "react-bootstrap";

firebase.initializeApp({
  apiKey: "AIzaSyDDgIwSGrwpmHF_RPupSPKtbhgtb289cY8",
  authDomain: "task-planner-b7636.firebaseapp.com",
});

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Task-Planner</Navbar.Brand>

              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto </a>
                </Navbar.Text>
                <Button variant="outline-info">Sign-out</Button>
              </Navbar.Collapse>
            </Navbar>

            <div>Signed in!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
            <h1>Welcome {firebase.auth().currentUser?.displayName}</h1>
            <img
              alt="Profile Image"
              src={firebase.auth().currentUser.photoURL}
            />
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
