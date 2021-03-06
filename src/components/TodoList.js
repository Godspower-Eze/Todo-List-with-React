import Todo from './Todo'

function TodoList({todos, setTodoList, filterTodos}){
    return (
    <div className="todo-container">
        <ul className="todo-list">
            {
                filterTodos.map((todo)=>(
                    <Todo key={todo.id} todo={todo} text={todo.text} todos={todos} setTodoList={setTodoList} />
                ))
            }
        </ul>
    </div>
    )
}
export default TodoList;