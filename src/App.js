
import './App.css';
import TodoList from './components/todoList';
import {useState, useRef} from 'react';
import CreateList from './components/CreateList';

function App() {
  //CreateList의 입력 인풋을 상태관리
  const [inputs,setInputs] = useState({
    todolist:"",
  });
  const onChange = (e)=>{
    const{name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
    console.log(inputs);
  }
  const{todolist} = inputs;
  //useState() 실행 -> 배열 return
  //arr[0] = 상태
  //arr[1] = 상태를 변경해주는 function
  const [todos, setTodos] = useState([
  
]

  )
  const nextId = useRef(1);
  //배열에 새로운 항목을 추가하는 함수
  //users 배열에 새로운 user객체를 추가

  const onCreate = ()=>{
    const todo ={
      id: nextId.current,
      todolist,
      done:false,
    }
    setTodos([...todos,todo]);
    setInputs({
      todolist:"",
    })
    nextId.current += 1;
  }
  //todos 배열에 해당 id는 삭제
  //filter -> 해당하는 id와 todo객체의 id가 다른 객체만 새 배열로 반환
  const onDelete = (id)=>{
    setTodos(todos.filter(todo=>id !==todo.id));
  }

  //todo객체를 클릭하면 done이라는 class toggle
  const onToggle = (id)=>{
    setTodos(todos.map(todo=>id===todo.id? {...todo,done: !todo.done} : todo))
  }

  
  return (
    <div className="App">
      <h2>To-do List</h2>
      <CreateList todolist={todolist} onChange={onChange} onCreate={onCreate}/>
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;

