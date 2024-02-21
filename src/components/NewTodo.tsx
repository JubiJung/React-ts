import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import styles from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">할일</label>
      <input ref={todoTextInputRef} type="text" id="text" />
      <button>제출</button>
    </form>
  );
};
export default NewTodo;
