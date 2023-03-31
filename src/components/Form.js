
const Form = ({ todo, setTodo, todoList, setTodoList }) => {
    const handleTodo = (event) => {
        setTodo(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList([...todoList, {name: todo,id:todo}])
        console.log(todoList)
        setTodo("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleTodo} class="mt-5 text-center p-2 bg-gray-200  w-full" placeholder="Todo"></input>
            <button type="submit" class="w-full mt-2 border-2 bg-green-500 text-white p-2 hover:bg-green-700">Submit</button>
        </form>
    )
}
export default Form;