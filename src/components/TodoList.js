const TodoList = (props) => {
    //todoList

    if(props.todoList.length === 0) {
        return <p className="mx-2 my-2">Awaiting the first item...</p>
    }

    return props.todoList.map((item) => {
        console.log(item);
        return <p key = {item.id} className="mx-2 my-2">
            
            {item.title}
            <span className="mx-5 text-danger" onClick={() => props.dropItem(item.id)}>X</span>
            </p>
    });
}

export default TodoList;