import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import University from "./components/University/University";
import Tutors from "./components/Tutors/Tutors";
import Cities from "./components/Cities/Cities";
import Faculties from "./components/Faculties/Faculties";

function App() {
  return (
    <main>
      <Sidebar test />
      <section className="container">
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}

export default App;
