import { getTodoApi } from "api/todo";
import TodoCreate from "components/TodoCreate";
import TodoItem from "components/TodoItem";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const getData = async () => {
    const response = await getTodoApi();
    setTodoList(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TodoCreate setTodoList={setTodoList} />
      {todoList?.length > 0 && (
        <ul className="todo-list">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} setTodoList={setTodoList} />
          ))}
        </ul>
      )}
    </div>
  );
}
