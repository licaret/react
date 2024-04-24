import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Play";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Playground />} />
    </Routes>
  );
}

export default App;
