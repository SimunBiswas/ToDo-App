import React, {useState} from "react";

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();    
    editTodo(value, task.id);
    setValue("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="to-do"
        type="text"
        value={value}
        placeholder="Update Task...."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update 
      </button>
    </form>
  );
};

export default EditTodoForm;
