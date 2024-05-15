import React from "react";
import { Outlet } from "react-router-dom";
function Playground() {
  return (
    <>
      <h1>Playground</h1>
      <Outlet />
    </>
  );
}

export default Playground;
