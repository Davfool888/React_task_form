function TodoCount({completed, total}) {
    return(
        <h1>
            has {completed} de {total} tareas completadas
        </h1>
    );
}

export { TodoCount };