import { createTodoApi } from "api/todo";
import React, { useRef } from "react";

export default function TodoCreate({ setTodoList }) {
  const newTodoInputRef = useRef(null);

  const handleCreate = async () => {
    const todo = newTodoInputRef.current.value;
    if (!todo) {
      newTodoInputRef.current.focus();
      return;
    }
    const response = await createTodoApi({ todo });
    const newTodoItem = response.data;
    setTodoList((prev) => [...prev, newTodoItem]);
  };
  
  return (
    <div className="todo-create">
      <label htmlFor="new-todo-input" className="todo-label">
        <span className="todo-label__title">해야할 일을 입력해주세요</span>
        <input id="new-todo-input" data-testid="new-todo-input" ref={newTodoInputRef} />
      </label>
      <button type="button" className="todo-create__button" data-testid="new-todo-add-button" onClick={handleCreate}>
        추가
      </button>
    </div>
  );
}
