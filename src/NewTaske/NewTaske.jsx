

import { CreateNewTask } from "../CreateNewTask/CreateNewTask";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import React from "react";
import './NewTaske.css';

function NewTaske() {
    return(
        <div className="NewTaske">
            <CreateNewTask/>
            <CreateTodoButton/>

        </div>
    );
}
export { NewTaske };