import logo from "./logo.svg";
import "./App.css";
import Rolodex from "./Rolodex.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Monster Rolodex</p>
        <Rolodex />
      </header>
    </div>
  );
}

export default App;
