import Alert from "./Alert";
import "./App.css";
import Menu from "./Menu";

function App() {
  const isLoaded = true;

  const menuItems = [
    { id: 0, name: 'Acasa' },
    { id: 1, name: 'Despre noi' },
    { id: 2, name: 'Contact' },
    { id: 3, name: 'Alta pagina' }
  ];

  return (
    <>
      {isLoaded ? <Menu items={menuItems} /> : <p>Spinner</p>}
      <Alert>some text</Alert>
    </>
  );
}

export default App;
