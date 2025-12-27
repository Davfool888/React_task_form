
import './App.css';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


function App() {
  return (
    <div className="App">
      <TodoCount completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList >

      <CreateTodoButton />

    </div>
  );
}



export default App;
