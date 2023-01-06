import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredsortedTodos, setFilteredTodos] = useState([]);
  const [urgency, setUrgency] = useState("1")

  useEffect(() => {
    filterHandler();
  }, [todos,status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true).sort((a, b) => a.urgency < b.urgency ? 1 : -1));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false).sort((a, b) => a.urgency < b.urgency ? 1 : -1));
        break;
      default:
        setFilteredTodos(todos.sort((a, b) => a.urgency < b.urgency ? 1 : -1));
        break;
    } 
  }
  return (
    <div className="App">
      <header>
        <h1>JvThunder's Todo List</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        setUrgency={setUrgency}
        urgency={urgency}
      />
      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredsortedTodos={filteredsortedTodos}
        urgency={urgency}
      />
    </div>
  );
}

export default App;