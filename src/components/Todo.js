import React from "react";

const Todo = ({ text, todo, todos, setTodos, urgency}) => {
    // Events
    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const completeHandler = () => {
      setTodos(
        todos.map((item) => {
          if(item.id === todo.id)  {
            return {
              ...item, 
              completed: !item.completed
            }
          }
          return item;
        })
      );
    };

    const urgencyText = (u) => {
      let text = ""
      for (let i = 0; i < u; i++) {
        text += "!";
      }
      return text
    }

    return(
      <div className="todo">
        <div className="urgency-view">{urgencyText(urgency)}</div>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
}

export default Todo;