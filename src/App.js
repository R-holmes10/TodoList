import React, { useState } from "react";
import "./App.css";

const App = () => <TodoApp />;

const TodoApp = () => {
  const [messageList, setMessageList] = useState(["Novel", "Code-Comments", "Deployment"]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };

  return (
    <div id="app">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br /> 
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
};

const TodoHeader = () => (
  <div id="header">
    <h1>Todo List</h1>
  </div>
);

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const changeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    addTodo(input);
    setInput("");
  };

  return (
    <div id="form">
      <input
        id="form__input"
        type="text"
        value={input}
        onChange={changeHandler}
        placeholder='Add todo...'
      />
      <button id="form__submit" onClick={submitHandler}>
        Add Todo
      </button>
    </div>
  );
};

const TodoList = ({ messageList, deleteTodo }) => (
  <ol id="todolist">
    {messageList.map((message, index) => (
      <Todo message={message} deleteTodo={deleteTodo} key={index} />
    ))}
  </ol>
);

const Todo = ({ message, deleteTodo }) => {
  const handleSubmit = (event) => {
    deleteTodo(message);
  };

  return (
    <li id="todo">
      <span id="todo__label">{message + "  "}</span>
      <button id="todo__delete" onClick={handleSubmit}>
        Delete
      </button>
    </li>
  );
};

const Footer = () => (
  <div id="footer">
    <a
      href="https://github.com/R-holmes10"
    
    >
      Github: Ritu Verma
    </a>
  </div>
);

export default App;
