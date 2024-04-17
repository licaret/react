import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import University from "./components/University/University";
import Tutors from "./components/Tutors/Tutors";
import Cities from "./components/Cities/Cities";
import Faculties from "./components/Faculties/Faculties";
import { menuConfig } from "./helpers/menu";
import data from "./helpers/data.json";

function App() {
  const { name, description, tutors } = data;

  return (
    <main>
      <Sidebar data={menuConfig} />
      <section className="container">
        <University name={name} description={description} />
        <Tutors tutors={tutors} />
        <Cities />
        <Faculties />
      </section>
    </main>
  );
}

export default App;
