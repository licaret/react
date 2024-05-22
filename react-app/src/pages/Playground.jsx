import { Link, Outlet } from "react-router-dom";

function Playground() {
    return (
    <>
      <h1>Playground</h1>
      <Link to="/">Home</Link>
      <Outlet />
    </>
  );
}

export default Playground;
