import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App({ id }) {

  useEffect(() => {
    console.log("micro app mounted");

    return () => {
      console.log("micro app unmounted");
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {id ?
          <img src={"http://localhost:3000/" + logo} className="App-logo" alt="logo" /> :
          <img src={logo} className="App-logo" alt="logo" />
        }
        
        <p>
          Micro app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Micro app example
        </a>
      </header>
    </div>
  );
}

export default App;
