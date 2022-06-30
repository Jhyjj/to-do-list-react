import React from 'react';
import './ListStyle.css';

//Todo component 만들기
const Todo = ({todo,onDelete,onToggle})=>{
    return (
        <div>
            {/* &&연산자는 둘 중 하나만 false면 false를 반환  --> {user.active && "active"}*/}
            <span className={todo.done? 'done' : "" } onClick={()=>{onToggle(todo.id)}}>
            {todo.todolist}
            </span>
            {/* x버튼을 누르면 삭제되게 만들기 */}
            <button onClick={()=>{onDelete(todo.id);}}>x</button>
        </div>
    )
}

const TodoList = ({todos, onDelete, onToggle}) => {

return (
        <div>
            {todos.map(todo=>(<Todo todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle}/>))}    
        </div>
    );
};

export default TodoList;