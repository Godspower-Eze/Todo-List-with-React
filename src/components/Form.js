function Form({inputText,setInputText,todos,setTodoList, setStatus}){
    // Here I can write JavaScript code
    const inputHandeler = (event) =>{
        setInputText(event.target.value)
    }
    const sumbitTextHandler = (event) =>{
        event.preventDefault()
        setTodoList([
            ...todos,
            {text:inputText,completed:false, id:Math.random()*1000}]
        )
        setInputText('')
    }
    const statusHandler = (event) => {
        setStatus(event.target.value)
    }
    return (
        <form>
        <input value={inputText} onChange={inputHandeler} type="text" className="todo-input" />
        <button onClick={sumbitTextHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}
export default Form;