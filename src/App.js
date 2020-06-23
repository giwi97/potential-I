import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Navbar, Nav, Button, Col, Image } from "react-bootstrap";

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
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => firebase.auth().signOut()}
                  >
                    {firebase.auth().currentUser?.displayName}
                  </Button>
                </Navbar.Text>

                <img
                  alt="Profile Image"
                  src={firebase.auth().currentUser.photoURL}
                  class="propic"
                />
              </Navbar.Collapse>
            </Navbar>
          </span>
        ) : (
          <div>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Task-Planner</Navbar.Brand>
            </Navbar>

            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
              class="login-box"
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
