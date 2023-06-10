import React, {useState} from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();    
    addTodo(value);
    setValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <p className="todo-p">Get Things Done . . .</p>
      <input
        className="to-do"
        type="text"
        value={value}
        placeholder="What is the Task today...."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
