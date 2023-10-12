import { updateTodoApi } from "api/todo";
import { useEffect, useRef } from "react";

export default function TodoUtil({ todo, setTodoList, isModify, setIsModify }) {
  const todoInputRef = useRef(null);
  const todoId = todo.id;
  const isCompleted = todo.isCompleted;

  const toggleModifyMode = () => {
    setIsModify(!isModify);
  };

  const handleModify = async () => {
    const todo = todoInputRef.current.value;
    toggleModifyMode();
    if (!todo) {
      return;
    }
    const updateTodoData = {
      todo,
      isCompleted,
    };
    const repsonse = await updateTodoApi(todoId, updateTodoData);
    const newTodoItem = repsonse.data;
    setTodoList((prev) => {
      return prev.map((prevItem) => (prevItem.id === todoId ? newTodoItem : prevItem));
    });
  };

  useEffect(() => {
    if (isModify) {
      todoInputRef.current.focus();
    }
  }, [isModify]);

  return (
    // <div className="todo-modify">
    <>
      {isModify ? (
        <span className="todo-modify">
          <label htmlFor="modify-input" className="todo-modify__label">
            <span className="hidden">Todo Text</span>
            <input
              type="text"
              id="modify-input"
              className="input"
              data-testid="modify-input"
              ref={todoInputRef}
              defaultValue={todo.todo}
            />
          </label>
          <button type="button" className="todo-modify__button todo-modify__button--positive" data-testid="submit-button" onClick={handleModify}>
            제출
          </button>
          <button type="button" className="todo-modify__button" data-testid="cancel-button" onClick={toggleModifyMode}>
            취소
          </button>
        </span>
      ) : (
        <button type="button" className="todo-list__button todo-list__button--positive" data-testid="modify-button" onClick={toggleModifyMode}>
          수정
        </button>
      )}
    </>
  );
}
