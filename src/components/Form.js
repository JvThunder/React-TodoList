import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus, setUrgency, urgency}) => {
  // Here i can write javascript code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, urgency: urgency, id: Math.random() * 1000},
    ]);
    setInputText("");
    setUrgency("1");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  const urgencyHandler = (e) => {
    setUrgency(e.target.value)
  }

  return (
    <form>
      <div>Urgency:</div>
      <div className="select">
        <select value={urgency} onChange={urgencyHandler} name="choose-urgency" className="choose-urgency">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
      </div>
      <div>Task:</div>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">      
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
  );
};

export default Form;