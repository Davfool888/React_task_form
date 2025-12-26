import logo from './platzi.webp';
import './App.css';
import { TodoCount } from './TodoCount';

function App() {
  return (
    <div className="App">

      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />

      <TodoCount completed={3} total={5} />
      <TodoCount completed={1} total={5} />
      <TodoCount completed={5} total={5} />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function TodoItem() {
  return (

    <li>
      <span>V</span>
      <p>ver curso platzi</p>
      <span>X</span>
    </li>
  );

}

export default App;
