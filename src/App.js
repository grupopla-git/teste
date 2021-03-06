import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <h1>
        <small>Voce está executando em modo: <b>{process.env.NODE_ENV}</b>.</small>
    </h1>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React JS!!!
        </a>

      <form>
         {/* setar variavel em ambiente teste/dev (via PowerShell)
        ($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
         */}
      REACT_APP_NOT_SECRET_CODE: <input type="text" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
            </header>
    </div>
  );
}

export default App;
