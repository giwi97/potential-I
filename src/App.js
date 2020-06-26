import React, { Component } from "react";
import logo from "./logo.svg";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Header } from './components/layouts/header'

firebase.initializeApp({
  apiKey: "AIzaSyDDgIwSGrwpmHF_RPupSPKtbhgtb289cY8",
  authDomain: "task-planner-b7636.firebaseapp.com",
});

export const App = () => (

    <div className = "App">
      <Header />
    </div>

);