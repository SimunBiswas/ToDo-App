import React from "react";

const Todo = ({ task, toggleCompleted, deletetodo, editTodo}) => {
  return (
    <div className="todo">
        <p onClick={() => toggleCompleted(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        <div>
          <i onClick={() => editTodo(task.id)} className="fi fi-rr-edit"></i>
          <i onClick={()=> deletetodo(task.id)} className="fi fi-rr-trash"></i>
        </div>      
    </div>
  );
};

export default Todo;
