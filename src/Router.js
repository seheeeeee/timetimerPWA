import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import Home from "./pages/Home";
import Add from "./pages/Add";

function Router() {
  return (
    <>
      <Global styles={reset} />
      <Routes>
        {/* <Route exact path="*" element={<Navigate replace to="/login" />} /> */}
        <Route exact path="*" element={<Home />} />
        <Route exact path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default Router;
