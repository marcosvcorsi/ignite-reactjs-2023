import styles from "./TodoList.module.css";

import clipboardImg from "../assets/clipboard.svg";
import { TodoItem } from "./TodoItem";

interface Todo {
  id: string;
  name: string;
  completedAt?: Date;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
  onCompleteTodo: (id: string) => void;
}

export function TodoList({
  todos,
  onDeleteTodo,
  onCompleteTodo,
}: TodoListProps) {
  const completedCount = todos.filter((todo) => todo.completedAt).length;
  const createdCount = todos.filter((todo) => !todo.completedAt).length;

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.info}>
          <strong className={styles.created}>Tarefas criadas</strong>
          <div className={styles.counter}>
            <span>{createdCount}</span>
          </div>
        </div>

        <div className={styles.info}>
          <strong className={styles.done}>Concluidas</strong>
          <div className={styles.counter}>
            <span>{completedCount}</span>
          </div>
        </div>
      </div>

      {todos.length === 0 ? (
        <div className={styles.empty}>
          <img src={clipboardImg} alt="Tarefas" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        <ul className={styles.list}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDeleteTodo={onDeleteTodo}
              onCompleteTodo={onCompleteTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
