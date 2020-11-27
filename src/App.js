import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
