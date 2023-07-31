import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Router />
    </BrowserRouter>
  );
}

export default App;
