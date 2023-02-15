import { Header } from "./components/Header";
import { v4 as uuid } from "uuid";
import "./global.css";

import styles from "./App.module.css";
import { TodoForm } from "./components/TodoForm";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

interface Todo {
  id: string;
  name: string;
  completedAt?: Date;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (name: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: uuid(), name }]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completedAt: todo.completedAt ? undefined : new Date() }
          : todo
      )
    );
  };

  return (
    <div className={styles.content}>
      <Header />
      <main className={styles.main}>
        <TodoForm onAddTodo={handleAddTodo} />

        <TodoList
          todos={todos}
          onCompleteTodo={handleCompleteTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </div>
  );
}

export default App;
