import { getTodoApi } from "api/todo";
import TodoCreate from "components/TodoCreate";
import TodoItem from "components/TodoItem";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState();

  const getData = async () => {
    const response = await getTodoApi();
    setTodoList(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <TodoCreate setTodoList={setTodoList} />
      <ul>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
