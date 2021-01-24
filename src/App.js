import logo from './logo.svg';
import './App.css';

import Calculadora from './components/Calculadora.js';

function Header() {
  return (
    <div className="Header">
      <h1>Calculadora</h1>
      <hr></hr>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Calculadora></Calculadora>
    </div>
  );
}

export default App;
