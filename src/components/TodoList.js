import React from "react";
// import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredsortedTodos, urgency}) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredsortedTodos.map((todo) => (
          <Todo 
            setTodos={setTodos} 
            todos={todos} 
            key={todo.id} 
            todo={todo} 
            text={todo.text} 
            urgency={todo.urgency}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;