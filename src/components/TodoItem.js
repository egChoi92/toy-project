import { updateTodoApi } from "api/todo";
import TodoDelete from "components/TodoDelete";
import TodoModify from "components/TodoModify";
import { useEffect, useRef, useState } from "react";

export default function TodoItem({ todo, setTodoList }) {
  const [isModify, setIsModify] = useState(false);
  const checkboxRef = useRef(null);
  const todoTextRef = useRef(null);
  const todoId = todo.id;
  const todoText = todo.todo;

  const handleChecked = async () => {
    const isCompleted = checkboxRef.current.checked;

    const todo = isModify ? todoText : todoTextRef.current.textContent;
    const updateTodoData = {
      todo,
      isCompleted,
    };

    const response = await updateTodoApi(todoId, updateTodoData);
    const modifyTodoItem = response.data;

    if (isModify) {
      setIsModify(false);
    }
    setTodoList((prev) => {
      return prev.map((prevItem) => {
        return prevItem.id === modifyTodoItem.id ? modifyTodoItem : prevItem;
      });
    });
  };

  // useEffect(() => {
  //   if (isModify) {
  //     todoInputRef.current.focus();
  //   }
  // }, [isModify])

  return (
    <li className="todo-list__item">
      <label htmlFor="todo-checkbox" className="checkbox-label">
        <input
          type="checkbox"
          id="todo-checkbox"
          className="hidden"
          ref={checkboxRef}
          defaultChecked={todo.isCompleted}
          onChange={handleChecked}
        />
        <span className="checkbox-label__icon"></span>
      </label>
      {!isModify && (
        <span ref={todoTextRef} className="todo-list__text">
          {todoText}
        </span>
      )}
      <TodoModify todo={todo} isModify={isModify} setIsModify={setIsModify} setTodoList={setTodoList} />
      <TodoDelete id={todoId} setTodoList={setTodoList} />
    </li>
  );
}
