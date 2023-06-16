import { updateTodoApi } from "api/todo";
import TodoDelete from "components/TodoDelete";
import TodoModify from "components/TodoModify";
import { useEffect, useRef } from "react";

export default function TodoItem({todo, setTodoList}) {
  const checkboxRef = useRef(null);
  const todoTextRef = useRef(null);
  const todoId = todo.id;
  
  const handleChecked = async () => {
    const isCompleted = checkboxRef.current.checked
    const todo = todoTextRef.current.textContent
    const updateTodoData = {
      todo,
      isCompleted
    } 

    const response = await updateTodoApi(todoId, updateTodoData);
    const modifyTodoItem = response.data;

    setTodoList((prev) => {
      return prev.map((prevItem) => {
        return prevItem.id === modifyTodoItem.id ? modifyTodoItem : prevItem      
      })
    })
  }

  return (
    <li>
      <label>
        <input type="checkbox" ref={checkboxRef} defaultChecked={todo.isCompleted} onChange={handleChecked}/>
        <span ref={todoTextRef}>{todo.todo}</span>
      </label>
      <TodoModify />
      <TodoDelete id={todoId} setTodoList={setTodoList}/>
    </li>
  );
}
