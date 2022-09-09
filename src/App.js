import logo from "./logo.svg";
import "./App.css";
import Contactos from "./components/container/contactos";
// import GreetingF from "./components/pure/GreetingF";
// import TaskListComponent from "./components/container/task_list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de ejemplo Funcional */}
        {/* <Greeting name="Julio" /> */}
        {/* <TaskListComponent /> */}
        <Contactos />
      </header>
    </div>
  );
}

export default App;
