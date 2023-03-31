import DisplayTodo from "./DisplayTodo";
const TodoList = ({ todoList,setTodoList}) => {
    return (
        <div>{todoList.map((todoitem) => (
            <DisplayTodo setTodoList={setTodoList} key={todoitem.id} todoitem={todoitem} todoList={todoList}></DisplayTodo>
        ))}</div>
    )

}
export default TodoList;