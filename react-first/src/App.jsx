import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ButtonComponent from './ButtonComponent';
import ImageComponent from './ImageComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <ImageComponent src={viteLogo} alt="Vite logo" className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <ImageComponent src={reactLogo} alt="React logo" className="logo react" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonComponent text={`count is ${count}`} onClick={() => setCount(count + 1)} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;