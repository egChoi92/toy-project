import { createTodoApi } from "api/todo";
import React, { useRef } from "react";

export default function TodoCreate({ setTodoList }) {
  const newTodoInputRef = useRef(null);

  const handleCreate = async () => {
    const todo = newTodoInputRef.current.value;
    const response = await createTodoApi({ todo });
    const newTodoItem = response.data;
    setTodoList((prev) => [...prev, newTodoItem]);
  };
  
  return (
    <div>
      <input data-testid="new-todo-input" ref={newTodoInputRef} />
      <button type="button" data-testid="new-todo-add-button" onClick={handleCreate}>
        추가
      </button>
    </div>
  );
}
