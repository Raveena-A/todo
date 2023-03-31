const DisplayTodo = ({ todoitem, todoList,setTodoList }) => {
    const handleDelete = () => {
        setTodoList(todoList.filter((item) =>item.id !== todoitem.id));
    };
    return (
        <div>
            <div class="py-5 flex items-center justify-center">
                <h3 class="pr-5 text-xl font-semibold">{ todoitem.name }</h3>
                <button onClick={handleDelete} class="border-2 px-2 py-1 rounded-md bg-red-400 hover:bg-red-500  text-white">Done</button>
            </div>
        </div>
    )
}

export default DisplayTodo;