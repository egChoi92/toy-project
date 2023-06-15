import React, { useRef } from "react";

export default function TodoCreate({setTodoList}) {
  const newTodoInputRef = useRef(null);
  const handleCreate = () => {
    const newTodo = newTodoInputRef.current.value;
    setTodoList(prev => [...prev, {
        "id": 1,
        "todo": newTodo,
        "isCompleted": false,
        "userId": 1
    }])
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
