import logo from "./logo.svg";
import "./App.css";
import GreetingF from "./components/pure/GreetingF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Greeting name="Julio" /> */}
        <GreetingF name="Julio" />
      </header>
    </div>
  );
}

export default App;
