import React from 'react';

const CreateList = ({todolist, onChange, onCreate}) => {
    return (
        <div>
            <input name="todolist" placeholder='할일을 입력하세요' value={todolist} onChange={onChange}/>
            <button onClick={onCreate}>+</button>
        
        </div>
    );
};

export default CreateList;