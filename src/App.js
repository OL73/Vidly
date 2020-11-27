import React from "react";
import "./App.css";
import Movies from "./components/movies";
import { Route } from 'react-dom';
import { Switch } from 'react-router-dom';
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Movies />
      </main>
    </>
  );
}

export default App;
