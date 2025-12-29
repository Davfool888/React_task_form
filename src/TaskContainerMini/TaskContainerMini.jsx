import React from 'react';
import './TaskContainerMini.css';

function TaskContainerMini({children}) {
    return (
        <div className='TaskContainerMini'>
            {children}
        </div>
    );
}

export { TaskContainerMini };