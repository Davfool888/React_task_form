
import './App.css';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'cutting onion', completed: true },
  { text: 'Design t-shirts', completed: true },
  { text: 'Vender productos', completed: true },
  { text: 'Actualizar Cv', completed: true },
  { text: 'Actualizar Cvx', completed: true },
]


function App() {
  return (
    <React.Fragment>
      <TodoCount completed={3} total={5} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={
            todo.text}
            parrafo={todo.text}
            completed={todo.completed} />

        ))}
      </TodoList >

      <CreateTodoButton />

    </React.Fragment>
  );
}



export default App;
