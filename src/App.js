import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import firebase from "firebase/app";
import db from "./firebase";
function App() {
  const [todos, setTodos] = useState(["first todo"]);
  const [input, setInput] = useState("");
  useEffect(() => {
    db.collection("todos").onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo));
    });
  }, []);
  const addTodo = event => {
    event.preventDefault();
    console.log("working");
    setTodos([...todos, input]);
    setInput("");
    console.log(todos);
  };
  return (
    <div className="App">
      <br />
      <form action="">
        <input
          type="text"
          value={input}
          onChange={event => setInput(event.target.value)}
          type="text"
        />
        <button onClick={addTodo}>try</button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
