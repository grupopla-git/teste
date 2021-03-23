import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>

        <p></p>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <form>
         {/* setar variavel em ambiente teste/dev (via PowerShell)
        ($env:REACT_APP_NOT_SECRET_CODE = "abcdef") -and (npm start)
         */}
      <input type="text" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      <input type="text" defaultValue="HARDCODED" />
      </form>
            </header>
    </div>
  );
}

export default App;
