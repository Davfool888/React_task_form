import React from 'react';
import './TaskContainer.css';
import { TodoItem } from '../TodoItem/TodoItem';
import { CheckTrue } from '../checkTrue/checkTrue';
import { CheckFals } from '../checkFalse/CheckFals';
import { TaskContainerMini } from '../TaskContainerMini/TaskContainerMini';
import { LogoList } from '../LogoList/LogoList';



const defaultTodos = [
  { text: 'cutting onion', completed: true },
  { text: 'Design t-shirts', completed: true },
  { text: 'Vender productos', completed: true },
  { text: 'Actualizar Cv', completed: true },
  { text: 'Actualizar Cvx', completed: true },
]

function TaskContainer() {
  return (
    <div className='TaskContainer'>
    
    {defaultTodos.map(todo => (
            <React.Fragment key={todo.text}>
            <TaskContainerMini> 
              <LogoList/>
            <TodoItem
              parrafo={todo.text}
              completed={todo.completed} />
              <CheckTrue/> <CheckFals/>
              </TaskContainerMini>
              </React.Fragment>          

          ))}
    </div>
  );
}

export { TaskContainer };