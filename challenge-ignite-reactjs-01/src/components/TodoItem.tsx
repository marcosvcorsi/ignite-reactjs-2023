import { BsTrash } from "react-icons/bs";

import styles from "./TodoItem.module.css";

interface Todo {
  id: string;
  name: string;
  completedAt?: Date;
}

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

export function TodoItem({
  todo,
  onCompleteTodo,
  onDeleteTodo,
}: TodoItemProps) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={!!todo.completedAt}
        onChange={() => onCompleteTodo(todo.id)}
      />
      <label htmlFor="checkbox"></label>
      <span className={todo.completedAt ? styles.done : styles.created}>
        {todo.name}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>
        <BsTrash />
      </button>
    </li>
  );
}
