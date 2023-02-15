import { FormEvent, useState } from "react";
import styles from "./TodoForm.module.css";
import { BsPlusCircle } from "react-icons/bs";

interface TodoFormProps {
  onAddTodo: (name: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [name, setName] = useState("");

  const handleCreateTodo = (event: FormEvent) => {
    event.preventDefault();

    onAddTodo(name);
    setName("");
  };

  return (
    <form className={styles.form} onSubmit={handleCreateTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Criar
        <BsPlusCircle />
      </button>
    </form>
  );
}
