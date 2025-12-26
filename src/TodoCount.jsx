function TodoCount(props) {
    return(
        <h1>
            has {props.completed} de {props.total} tareas completadas
        </h1>
    );
}

export { TodoCount };