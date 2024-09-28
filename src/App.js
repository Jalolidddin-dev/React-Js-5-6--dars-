import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todo-form";
import TodoItem from "./components/todo-item";

function App() {
  const [todos, setTodos] = useState([
    { text: "Item 1", isComplite: false },
    { text: "Item 2", isComplite: false },
    { text: "Item 3", isComplite: false },
  ]);
  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isComplite: false }];
    setTodos(newTodos);
  };

  const complitedTodo = (index) => {
    const newTodo = [...todos];

    newTodo[index].isComplite = !newTodo[index].isComplite;

    setTodos(newTodo);
  };

  const deletedTodo = (index) => {
    const newTodo = [...todos];

    newTodo.splice(index, 1);

    setTodos(newTodo);
  };

  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((item, index) => {
          return (
            <TodoItem
              value={item}
              key={index}
              index={index}
              deletedTodo={deletedTodo}
              complitedTodo={complitedTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
