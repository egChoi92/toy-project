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
    const updateTodoData = {
      todo,
      isCompleted
    }
    const repsonse = await updateTodoApi(todoId, updateTodoData)
    const newTodoItem = repsonse.data;
    toggleModifyMode()
    setTodoList(prev => {
      return prev.map((prevItem) => prevItem.id === todoId? newTodoItem : prevItem)
    })
  }

  useEffect(() => {
    if (isModify) {
      todoInputRef.current.focus();
    }
  }, [isModify]);

  return (
    <span>
      {isModify ? (
        <span>
          <input data-testid="modify-input" ref={todoInputRef} defaultValue={todo.todo} />
          <button data-testid="submit-button" onClick={handleModify}>제출</button>
          <button data-testid="cancel-button" onClick={toggleModifyMode}>취소</button>
        </span>
      ) : (
        <button data-testid="modify-button" onClick={toggleModifyMode}>
          수정
        </button>
      )}
    </span>
  );
}
