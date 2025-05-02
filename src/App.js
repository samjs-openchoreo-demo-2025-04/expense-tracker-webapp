import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made with ❤️ by OpenChoreo
        </p>
        <a
          className="App-link"
          href="https://github.com/openchoreo/openchoreo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn OpenChoreo
        </a>
      </header>
    </div>
  );
}

export default App;
