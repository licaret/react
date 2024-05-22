import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Playground from "./pages/Playground";
import NotFoundError from "./pages/NotFoundError";
import TasksApp from "./components/TasksApp/TasksApp";
import { useLocation } from "react-router-dom";

function App() {
  useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play" element={<Playground />}>
        <Route path="tasksReducer" element={<TasksApp />} />
      </Route>
      <Route path="*" element={<NotFoundError />} />
    </Routes>
  );
}

export default App;
