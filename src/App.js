import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'
import {useState, useEffect} from 'react'


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodoList] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])
  
  useEffect( () => {
    getFromLocalStorage()
  },[])

  useEffect(() => {
    filterTodosHandler()
    saveLocalStorage()
  },[todos,status])

  const saveLocalStorage = () => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos")=== null){
      localStorage.setItem("todos",JSON.stringify([]))
    }
    else {
      let localTodos = JSON.parse(localStorage.getItem("todos"))
      setTodoList(localTodos)
    }
  }

  const filterTodosHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true ))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false  ))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }
  return (
    <div  className="App">
    <header>
      <h1>Simple To Do</h1>
    </header>
    <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodoList={setTodoList} setInputText={setInputText} />
    <TodoList filterTodos={filterTodos} todos={todos} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
