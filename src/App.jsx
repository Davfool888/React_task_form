
import { TodoCount } from './TodoCount/TodoCount';
import { TodoSearch } from './TodoSearch/TodoSearch';
import { TodoList } from './TodoList/TodoList';


import { Container } from './Container/Container';


import React from 'react';
import { TaskContainer } from './TaskContainer/TaskContainer';
import { NewTaske } from './NewTaske/NewTaske';





function App() {
  return (
    <React.Fragment>

      <Container>
        <TodoCount completed={3} total={5} />
        <TodoSearch />

       <TodoList> 
          <TaskContainer/>
        </TodoList>


        <NewTaske/>
      </Container>


    </React.Fragment>
  );
}



export default App;
